import connectDB from "../../../../config/db";
import User from "../../../../models/User";
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        await connectDB();
    
        const body = await request.json();
        const { seat, round, drink } = body;
    
        const user = await User.findOne({ seat, round });
    
        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" });
        }
        
        let cartData = user.cartData

        const found = cartData.find((item) => 
            item.productId === drink.productId &&
            item.option === drink.option &&
            item.selectedTime === drink.selectedTime &&
            JSON.stringify(item.addon) === JSON.stringify(drink.addon) &&
            item.request === drink.request
        );

        if (found) {
            cartData = cartData.map(item => item === found ? { ...item, quantity: item.quantity + drink.quantity } : item);
        } else {
            cartData.push(drink)
        }

        user.cartData = cartData;
        await user.save();        

        return NextResponse.json({ success: true, message: 'เพิ่มลงตะกร้าเรียบร้อย' });
    
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}
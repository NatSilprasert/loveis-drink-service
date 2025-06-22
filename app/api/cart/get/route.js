import connectDB from "../../../../config/db";
import User from "../../../../models/user"
import { NextResponse } from "next/server"

export async function POST(request) {
    
    try {
        await connectDB();
    
        const body = await request.json();
        const { seat, round } = body;
    
        const user = await User.findOne({ seat, round });
    
        if (!user) {
          return NextResponse.json({ success: false, message: "User not found" });
        }
    
        let cartData = user.cartData;
        let orderData = user.orderData;

        return NextResponse.json({ success: true, cartData, orderData });
    
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}
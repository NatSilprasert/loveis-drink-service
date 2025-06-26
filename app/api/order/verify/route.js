import connectDB from "../../../../config/db";
import { NextResponse } from "next/server"
import Order from "../../../../models/Order.js";
import User from "../../../../models/User.js";

export async function POST(request) {
    try {
        await connectDB();
    
        const body = await request.json();
        const { seat, round, orderId, success } = body;

        try {
            if (success === "true") {

                await Order.findByIdAndUpdate(orderId, { payment: true });
                const { allOrder } = await Order.findById(orderId);

                await User.findOneAndUpdate(
                    { seat, round },
                    {
                        $set: { cartData: [] },
                        $push: { orderData: { $each: allOrder } }
                    }
                );
    
                return NextResponse.json({ success: true, message: 'ชำระเงินเสร็จสิ้น' });
            } else {
                await Order.findByIdAndDelete(orderId);
                return NextResponse.json({ success: false, message: 'ชำระเงินล้มเหลว' });
            }
        } catch (error) {
            console.log(error)
            return NextResponse.json({ success: false, message: error.message });
        }

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}
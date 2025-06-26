import connectDB from "../../../../config/db";
import { NextResponse } from "next/server"
import Order from "../../../../models/Order.js";

export async function GET(request) {
    try {
        await connectDB();

        const orders = await Order.find();
        return NextResponse.json({ success: true, orders});
    
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}
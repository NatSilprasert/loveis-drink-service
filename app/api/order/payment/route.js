import connectDB from "../../../../config/db";
import { NextResponse } from "next/server"
import Order from "../../../../models/Order.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SANDBOX_SECRET_KEY);

export async function POST(request) {
    try {
        await connectDB();

        const origin = request.headers.get('origin');
        const body = await request.json();
        const { seat, round, amount, orderItems } = body;

        const orderData = {
            seat,
            round,
            orderItems,
            amount,
            payment: false,
            date: Date.now()
        }

        const newOrder = new Order(orderData)
        await newOrder.save()

        const line_items = orderItems.map((item) => ({
            price_data: {
                currency: 'THB',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })

        return NextResponse.json({ success: true, session_url:session.url});
    
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}
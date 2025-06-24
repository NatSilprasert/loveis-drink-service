import connectDB from "../../../../config/db";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";


export async function POST(request) {

    try {

        const { productId } = await request.json();
        await connectDB()

        await Product.findByIdAndDelete(productId)
        return NextResponse.json({ success: true ,message: 'Product Deleted' })

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message})
    }
}
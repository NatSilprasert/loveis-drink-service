import { v2 as cloudinary } from "cloudinary";
import connectDB from "../../../../config/db";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

export async function POST(request) {
    try {
        const formData = await request.formData();

        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const option = formData.get('option');
        const category = formData.get('category');
        const image = formData.get('image'); // image เป็น Blob

        // แปลง Blob เป็น Buffer
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // อัปโหลดขึ้น Cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "products" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        });

        await connectDB()
        const newProduct = await Product.create({
            name,
            description,
            price: Number(price),
            imageUrl: uploadResult.secure_url,
            category,
            option: JSON.parse(option)
        })

        return NextResponse.json({ success: true, message: 'Upload successful', newProduct })

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message})
    }
}
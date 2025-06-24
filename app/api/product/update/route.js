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

        const id = formData.get('productId');
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const option = formData.get('option');
        const category = formData.get('category');
        const bestseller = formData.get('bestseller');
        const signature = formData.get('signature');
        const image = formData.get('banner'); // image เป็น Blob

        let imageUrl = "";

        if (image && typeof image !== "string") {
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

            imageUrl = uploadResult.secure_url;
        }

        const productData = {
            name,
            description,
            price: Number(price),
            image: imageUrl,
            option: JSON.parse(option),
            category,
            bestseller,
            signature,
        }
       
        await connectDB()
        const products = await Product.findByIdAndUpdate(id, {...productData})

        return NextResponse.json({ success: true, message: 'Product Updated!'})

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message})
    }
}
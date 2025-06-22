import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connectDB from '../../../../config/db';

export async function POST(request)  {

    try {
        await connectDB();
    
        console.log(1)
        const body = await request.json();
        const { email, password } = body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            return NextResponse.json({success: true, token})
        } else {
            return NextResponse.json({success: false, message: "Incorrect Password"})
        }

    } catch (error) {
        return NextResponse.json({success: false, message: error.message})
    }

}
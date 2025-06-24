"use client"

import Navbar from '@/components/Navbar'
import { useAppContext } from '@/context/AppContext'
import { ArrowLeft, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Cart = () => {

    const { router, cartItems, products, getCartAmount, removeFromCart } = useAppContext();

    return (
        <div>
            <Navbar/>
            <section className='px-4 md:px-8'>
                <div className='h-18 w-full'></div>
                <div onClick={() => router.push('/')} className='flex gap-1 mb-4'>
                    <ArrowLeft/>
                    <p className='text-gray-500'>ย้อนกลับ</p>
                </div>
                <p className='text-2xl font-semibold'>สรุปคำสั่งซื้อ</p>

                {cartItems.map((item, index) => {

                    const productData = products.find((product) => product._id === item.productId)

                    return (
                        <div key={index}>
                            <div className='mt-4 flex justify-between'>
                                <div className='flex gap-4'>
                                    <Image 
                                        src={productData?.imageUrl}
                                        alt="image" 
                                        width={0} 
                                        height={0} 
                                        sizes="100vw" 
                                        className='w-16 h-fit'
                                    />

                                    <div className='flex flex-col'>
                                        <p className='font-medium'>{productData?.name} <span className='text-gray-500'>x {item.quantity}</span></p>
                                        <div className='text-xs text-gray-500'>
                                            <p>เวลาที่ต้องการเครื่องดื่ม: {item.selectedTime}</p>
                                            <p>{item.option}</p>
                                            {item.addon.map((addon, index) => (
                                                <p key={index}>+ {addon}</p>
                                            ))}
                                            <p className='text-gray-400'>{item.request}</p>
                                        </div>
                                    </div>   
                                </div>

                                <div className='flex flex-col justify-between'>
                                    <p className='font-medium'>฿{productData && productData.price * item.quantity}</p> 
                                    <div className='justify-end flex'>
                                        <Trash2 onClick={() => removeFromCart(item)} />     
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-4 text-gray-400/50'/>
                        </div>
                    )
            })}
                
            </section>

            <section className='fixed flex flex-col border-t border-gray-300 w-full bg-white pb-8 p-4 bottom-0 gap-3 justify-center items-center'>
                <div className='w-full font-medium flex justify-between items-center'>
                    <p>รวมทั้งหมด</p>
                    <p className='text-xl'>฿{getCartAmount()}</p>
                </div>
                <div className='w-full flex flex-1 justify-center items-center p-4 bg-primary text-white font-medium rounded-lg'>
                    <p>ยืนยันคำสั่งซื้อ</p>
                </div>
            </section>
        </div>
    )
}

export default Cart

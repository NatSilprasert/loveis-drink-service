"use client"

import { useAppContext } from '@/context/AppContext'
import { ArrowLeft, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Cart = () => {

    const { router } = useAppContext();

    return (
        <div>
            <section className='px-4 md:px-8'>
                <div className='h-18 w-full'></div>
                <div onClick={() => router.push('/')} className='flex gap-1 mb-4'>
                    <ArrowLeft/>
                    <p className='text-gray-500'>ย้อนกลับ</p>
                </div>
                <p className='text-2xl font-semibold'>สรุปคำสั่งซื้อ</p>

                <div className='mt-4 flex justify-between'>
                    <div className='flex gap-4'>
                        <Image 
                            src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/484048727_643735608415427_3716085843766740198_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-iUfn5qT2hbJc0ILKMSJVjzvNmBxXlk6PO82YHFeWTrlQatRV-VOkc2QhCm4DAj3AXbqhcoKoBXhhrXfDd5GA&_nc_ohc=kj-671FcfAYQ7kNvwGYhQtZ&_nc_oc=AdkicRhz7Evp95f0knWHzSlmh2BqbVOW22ot_ZHrXyra4WFzdnBE6vmnNGo77tTUQw7RztNLZO3plnyJ5k__xazu&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=pN1qaGMIqKBPpyuEnvZxhg&oh=00_AfP3YsDRmrCwfzlvBIcLjnqxf11XPB_tFracV5RF13VPrw&oe=6858500C" 
                            alt="image" 
                            width={0} 
                            height={0} 
                            sizes="100vw" 
                            className='w-16 h-fit'
                        />

                        <div className='flex flex-col'>
                            <p className='font-medium'>Cappuccino <span className='text-gray-500'>x 1</span></p>
                            <div className='text-xs text-gray-500'>
                                <p>ร้อน</p>
                                <p>+ shot dark</p>
                                <p>+ honey</p>
                                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatem.</p>
                            </div>
                        </div>   
                    </div>

                    <div className='flex flex-col justify-between'>
                        <p className='font-medium'>฿100</p> 
                        <div className='justify-end flex'>
                            <Trash2/>     
                        </div>
                    </div>
                </div>
                <hr className='mt-4 text-gray-400/50'/>
            </section>

            <section className='fixed flex flex-col border-t border-gray-300 w-full bg-white pb-8 p-4 bottom-0 gap-3 justify-center items-center'>
                <div className='w-full font-medium flex justify-between items-center'>
                    <p>รวมทั้งหมด</p>
                    <p className='text-xl'>฿100</p>
                </div>
                <div className='w-full flex flex-1 justify-center items-center p-4 bg-primary text-white font-medium rounded-lg'>
                    <p>ยืนยันคำสั่งซื้อ</p>
                </div>
            </section>
        </div>
    )
}

export default Cart

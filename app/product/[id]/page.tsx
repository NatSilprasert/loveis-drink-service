"use client"

import Navbar from '@/components/Navbar';
import { useAppContext } from '@/context/AppContext';
import { ArrowLeft, Check, SquareMinus, SquarePlus } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const ProductItem = () => {

    const { id } = useParams();
    const { router } = useAppContext();
    const [option, setOption] = useState<string>('');
    const [addon, setAddon] = useState<string[]>([]);
    const [quantity, setQuantity] = useState<number>(1);

    const increase = () => {
        setQuantity((prev) => prev + 1);
    }

    const decrease = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1); // ป้องกันไม่ให้ติดลบ
    };

    const handleAddonToggle = (name: string) => {
        setAddon(prev =>
            prev.includes(name)
                ? prev.filter(item => item !== name)
                : [...prev, name]
        );
    };

    return (
        <div>
            <div className='h-18 w-full'></div>
            <ArrowLeft onClick={() => router.push('/')} className='absolute mx-2 mt-2 text-white'/>
            <Image 
                src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/484048727_643735608415427_3716085843766740198_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-iUfn5qT2hbJc0ILKMSJVjzvNmBxXlk6PO82YHFeWTrlQatRV-VOkc2QhCm4DAj3AXbqhcoKoBXhhrXfDd5GA&_nc_ohc=kj-671FcfAYQ7kNvwGYhQtZ&_nc_oc=AdkicRhz7Evp95f0knWHzSlmh2BqbVOW22ot_ZHrXyra4WFzdnBE6vmnNGo77tTUQw7RztNLZO3plnyJ5k__xazu&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=pN1qaGMIqKBPpyuEnvZxhg&oh=00_AfP3YsDRmrCwfzlvBIcLjnqxf11XPB_tFracV5RF13VPrw&oe=6858500C" 
                alt="image" 
                width={0} 
                height={0} 
                sizes="100vw" 
                className='w-full h-auto'
            />
            <section className='pt-3'>
                <div className='px-4 md:px-8'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-semibold'>Cappuccino</p>
                        <p className='text-2xl font-semibold'>฿100</p>
                    </div>
                    <p className='text-xs mt-2 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, enim!</p>
                </div>

                <hr className='mt-4 text-gray-400/50'/>

                <div className='flex flex-col gap-3 mt-4 px-4 md:px-8'>
                    <p className='text-xl font-semibold'>Option</p>
                    <div className='ml-1 flex items-center gap-2 text-gray-600'> 
                        <div onClick={() => setOption('hot')} className={`${option === 'hot' ? 'border-7 border-primary' : 'border-2'} w-5 h-5 rounded-full border-gray-300`}></div>
                        <p>ร้อน</p>
                    </div>
                    <div className='ml-1 flex items-center gap-2 text-gray-600'>
                        <div onClick={() => setOption('cold')} className={`${option === 'cold' ? 'border-7 border-primary' : 'border-2'} w-5 h-5 rounded-full border-gray-300`}></div>
                        <p>เย็น</p>
                    </div>
                </div>

                <hr className='mt-4 text-gray-400/50'/>

                <div className='flex flex-col gap-3 mt-4 px-4 md:px-8'>
                    <div className='flex justify-between'>
                        <p className='text-xl font-semibold'>Add On</p>
                        <p className='text-gray-400'>optional</p>
                    </div>
                    <div className='ml-1 flex justify-between text-gray-600'>  
                        <div className='flex items-center gap-3'>
                            <div
                                onClick={() => handleAddonToggle('shot dark')}
                                className={`flex items-center justify-center text-white w-5 h-5 rounded-sm border-2 border-gray-300 cursor-pointer ${addon.includes('shot dark') ? 'bg-primary border-primary' : ''}`}
                            >
                                <Check />
                            </div>
                            <p>shot dark</p>
                        </div>
                        <p>+20</p>
                    </div>
                    <div className='ml-1 flex justify-between text-gray-600'>  
                        <div className='flex items-center gap-3'>
                            <div
                                onClick={() => handleAddonToggle('shot medium')}
                                className={`flex items-center justify-center text-white w-5 h-5 rounded-sm border-2 border-gray-300 cursor-pointer ${addon.includes('shot medium') ? 'bg-primary border-primary' : ''}`}
                            >
                                <Check />
                            </div>
                            <p>shot medium</p>
                        </div>
                        <p>+30</p>
                    </div>
                    <div className='ml-1 flex justify-between text-gray-600'>  
                        <div className='flex items-center gap-3'>
                            <div
                                onClick={() => handleAddonToggle('oat milk')}
                                className={`flex items-center justify-center text-white w-5 h-5 rounded-sm border-2 border-gray-300 cursor-pointer ${addon.includes('oat milk') ? 'bg-primary border-primary' : ''}`}
                            >
                                <Check />
                            </div>
                            <p>oat milk</p>
                        </div>
                        <p>+20</p>
                    </div>
                    <div className='ml-1 flex justify-between text-gray-600'>  
                        <div className='flex items-center gap-3'>
                            <div
                                onClick={() => handleAddonToggle('honey')}
                                className={`flex items-center justify-center text-white w-5 h-5 rounded-sm border-2 border-gray-300 cursor-pointer ${addon.includes('honey') ? 'bg-primary border-primary' : ''}`}
                            >
                                <Check />
                            </div>
                            <p>honey</p>
                        </div>
                        <p>+10</p>
                    </div>
                    <div className='ml-1 flex justify-between text-gray-600'>  
                        <div className='flex items-center gap-3'>
                            <div
                                onClick={() => handleAddonToggle('vanilla syrup')}
                                className={`flex items-center justify-center text-white w-5 h-5 rounded-sm border-2 border-gray-300 cursor-pointer ${addon.includes('vanilla syrup') ? 'bg-primary border-primary' : ''}`}
                            >
                                <Check />
                            </div>
                            <p>vanilla syrup</p>
                        </div>
                        <p>+10</p>
                    </div>
                </div>
                <hr className='mt-4 text-gray-400/50'/>
            </section>

            <section className='p-4'>
                <div className='flex justify-between'>
                    <p className='text-xl font-semibold'>Additional Request</p>
                    <p className='text-gray-400'>optional</p>
                </div>
                <textarea 
                    className='p-3 mt-3 w-full border rounded-lg border-gray-300' 
                    name="request" 
                    id="request"
                    placeholder='ส่งข้อความถึงร้านค้า'
                >
                </textarea>
            </section>

            <div className='h-36 w-full'></div>

            <section className='fixed flex border-t border-gray-300 w-full bg-white pb-8 p-4 bottom-0 gap-3 justify-center items-center'>
                <div className='flex gap-4 items-center'>
                    <SquareMinus onClick={() => decrease()} className='text-black/80 w-8 h-8' />
                    <p className='font-medium'>{quantity}</p>
                    <SquarePlus onClick={() => increase()} className='text-black/80 w-8 h-8' />
                </div>
                <div className='md:max-w-1/3 flex flex-1 justify-between p-4 bg-primary text-white font-medium rounded-lg'>
                    <p>เพิ่มลงตะกร้า</p>
                    <p>฿{quantity * 100}</p>
                </div>
            </section>
        </div>
    )
}

export default ProductItem

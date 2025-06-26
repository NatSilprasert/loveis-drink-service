"use client"

import { useAppContext } from '@/context/AppContext'
import { GlassWater, ReceiptText, ShoppingCart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const { router, getCartCount, setShowLogin, login } = useAppContext();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname === '/') {
            setShowLogin(true);
        }
    };

    return (   
        <div className='absolute w-full flex justify-between px-4 md:px-8 py-4 z-10'>
            <div onClick={handleClick} className='bg-white border border-gray-400 px-3 py-2 rounded-xl'>
                <p>
                    {`${login.seat} | ${login.round}`}
                </p>
            </div>

            <div className='flex gap-3'>
                <div onClick={() => router.push('/cart')} className='relative p-2 bg-white border-1 border-gray-400 rounded-full'>
                    <GlassWater/>
                    {getCartCount() !== 0 &&
                    <p 
                        className='absolute right-[-4px] top-[-4px] w-4 text-center leading-4 bg-red-600 text-white aspect-square rounded-full text-[8px] font-bold font-sans'
                    >
                        {getCartCount()}
                    </p>
                    }
                </div>
                <div onClick={() => router.push('/orders')} className='p-2 bg-white border-1 border-gray-400 rounded-full'>
                    <ReceiptText/>
                </div>
            </div>
        </div>

    )
}

export default Navbar

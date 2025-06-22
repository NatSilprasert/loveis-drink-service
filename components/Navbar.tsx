"use client"

import { useAppContext } from '@/context/AppContext'
import { GlassWater, ReceiptText, ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {

    const { router, showLogin, setShowLogin, login } = useAppContext();

    return (   
        <div className='absolute w-full flex justify-between px-4 md:px-8 py-4 z-10'>
            <div onClick={() => setShowLogin(true)} className='bg-white border border-gray-400 px-3 py-2 rounded-xl'>
                <p>
                    {`${login.seat} | ${login.round}`}
                </p>
            </div>

            <div className='flex gap-3'>
                <div onClick={() => router.push('/cart')} className='p-2 bg-white border-1 border-gray-400 rounded-full'>
                    <GlassWater/>
                </div>
                <div onClick={() => router.push('/order')} className='p-2 bg-white border-1 border-gray-400 rounded-full'>
                    <ReceiptText/>
                </div>
            </div>
        </div>

    )
}

export default Navbar

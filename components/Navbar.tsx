import { GlassWater, ReceiptText, ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        
    <div className='absolute w-full flex justify-between px-4 md:px-8 py-4 z-10'>
        <div className='bg-white border border-gray-400 px-3 py-2 rounded-xl'>
            <p>ที่นั่ง A01 | คุณ ณัฏฐ์</p>
        </div>

        <div className='flex gap-3'>
            <div className='p-2 bg-white border-1 border-gray-400 rounded-full'>
                <GlassWater/>
            </div>
            <div className='p-2 bg-white border-1 border-gray-400 rounded-full'>
                <ReceiptText/>
            </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { assets } from "../assets/assets";
import Image from 'next/image';
import { X } from 'lucide-react';

const Hero = () => {
  return (
    <div className='relative bg-gray-400 w-full h-120 flex flex-col gap-4 pt-8 items-center justify-center overflow-hidden'>
        <Image
            src={assets.coffee}
            alt='background'
            fill
            className='object-cover z-0'
            priority
        />
        <div className="absolute inset-0 bg-[#2A55CB]/90 z-0 pointer-events-none" />

        <div className='relative z-10 flex items-center gap-3'>
            <Image className='rounded-full w-24 h-24' src={assets.tcos} alt="loveis" width={96} height={96} />
            <X className='text-white'/>
            <Image className='rounded-full w-24 h-24' src={assets.loveis} alt="loveis" width={96} height={96} />
        </div>
        <div className='relative z-10 mt-4 px-4 text-white'>
            <p className='text-center font-semibold text-3xl'>บริการการสั่งเครื่องดื่ม</p>
            <p className='mt-1 text-center font-normal'>สำหรับละครเวที “ทำนองของสายฝน : The Hidden Saloon” ในวันที่ 28 - 29 มิถุนายน</p>
        </div>
    </div>
  )
}

export default Hero

import React from 'react'
import { assets } from '../assets/assets'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='py-4 mt-24 px-4 md:-px-8 lg:px-54'>
        <div className='flex flex-col gap-14 sm:flex-row justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                    <Image className='w-6 h-6' src={assets.instagram} alt="" /><span className='text-[8px] sm:text-[12px]'>@thecomingofstages</span>
                </div>
                <div className='flex gap-4 items-center'>
                    <Image className='w-6 h-6' src={assets.facebook} alt="" /><span className='text-[8px] sm:text-[12px]'>The Coming of Stages</span>
                </div>
                <div className='flex gap-4 items-center'>
                    <Image className='w-6 h-6' src={assets.tiktok} alt="" /><span className='text-[8px] sm:text-[12px]'>@thecomingofstages</span>
                </div>
            </div>

            <div className='bg-black rounded-full p-6'>
                <Image className='h-16 w-16' src={assets.tcospng} alt="" />
            </div>
        </div>
        
        <div className='pt-12'>
            <hr/>
            <p className='py-5 text-[8px] sm:text-[12px] text-center'>
                {`Copyright ${new Date().getFullYear()}@ thecomingofstages.com - All Right Reserved.`}
            </p>
        </div>
    </div>
  )
}

export default Footer
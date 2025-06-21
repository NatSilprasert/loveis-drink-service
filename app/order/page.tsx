"use client"

import Navbar from '@/components/Navbar'
import { useAppContext } from '@/context/AppContext'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

const Order = () => {

  const { router } = useAppContext();

  return (
    <div>
      <Navbar/>
      <section className='px-4 md:px-8'>
        <div className='h-18 w-full'></div>
        <div onClick={() => router.push('/')} className='flex gap-1 mb-4'>
            <ArrowLeft/>
            <p className='text-gray-500'>ย้อนกลับ</p>
        </div>
        <p className='text-2xl font-semibold'>รายการที่สั่ง</p>
      </section>
      
    </div>
  )
}

export default Order

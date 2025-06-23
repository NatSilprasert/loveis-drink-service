import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

  const { router, setAdminToken } = useAppContext();

  const logout = () => {
    setAdminToken('');
    localStorage.removeItem('adminToken');
  }

  return (
    <div onClick={() => router.push('/')} className='flex items-center px-4 md:px-8 justify-between border-b bg-[#f8f8f8]'>
      <Image className='w-16 lg:w-20 cursor-pointer' src={assets.tcos} alt="" />
      <button onClick={() => logout()} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
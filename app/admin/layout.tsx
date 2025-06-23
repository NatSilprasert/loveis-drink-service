'use client'
import Navbar from '@/components/admin/Navbar'
import Sidebar from '@/components/admin/Sidebar'
import Login from '@/components/admin/Login'
import { useAppContext } from '@/context/AppContext'
import React from 'react'

const Layout = ({ children }: Readonly<{children: React.ReactNode}>) => {

  const { adminToken } = useAppContext();

  return (
    <div>
        <div className='w-full'>
            { adminToken === "" 
            ? <Login/>
            : <>
              <Navbar/>
              <div className='flex w-full'>
                <Sidebar/>
                <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                  {children}
                </div>
              </div>
            </>
            }
        </div>
    </div>
  )
}

export default Layout

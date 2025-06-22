'use client'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'

const Layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div>
        <div className='flex w-full'>
            {children}
        </div>
    </div>
  )
}

export default Layout

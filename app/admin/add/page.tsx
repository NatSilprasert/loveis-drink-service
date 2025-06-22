'use client'
import Navbar from '@/components/admin/Navbar';
import Sidebar from '@/components/admin/Sidebar';
import { useAppContext } from '@/context/AppContext';
import React, { useEffect } from 'react'

const Add = () => {

    const { adminToken, router } = useAppContext();
    
        useEffect(() => {
            if (!adminToken) {
                router.push('/admin');
            }
        }, [adminToken]);

    return (
        <div className='w-full'>
            <Navbar/>
            <Sidebar/>
            Add
        </div>
    )
}

export default Add

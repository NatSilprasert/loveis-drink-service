'use client'
import { useAppContext } from '@/context/AppContext'
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react';
import toast from 'react-hot-toast';

const VerifyContent = () => {
    const { login, router, setCartItems } = useAppContext();
    const searchParams = useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')
    const { seat, round } = login;

    const verifyPayment = async () => {
        try {
            const response = await axios.post('/api/order/verify', { seat, round, orderId, success })
            if (response.data.success) {
                router.push('/orders')
                toast.success(response.data.message)
                setCartItems([])
            } else {
                router.push('/cart')
                toast.error(response.data.message)
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (login.seat !== 'guest') {
            verifyPayment();
        }
    }, [login]);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
        </div>
    )
}

export default function Verify() {
    return (
        <Suspense>
            <VerifyContent />
        </Suspense>
    );
}
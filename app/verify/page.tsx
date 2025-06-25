'use client'
import { useAppContext } from '@/context/AppContext'
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Verify = () => {

    const { login, router, setCartItems } = useAppContext();

    const searchParams = useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {

            if (!login) {
                return null
            }

            const { seat, round } = login;
            const response = await axios.post('/api/order/verify', { seat, round, orderId, success })

            if (response.data.success) {
                setCartItems([])
                router.push('/orders')
                toast.success(response.data.message)
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
        verifyPayment()
    }, [])

    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
        </div>
    )
}

export default Verify
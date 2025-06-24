'use client'
import { Drink, useAppContext } from '@/context/AppContext';
import axios from 'axios';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {

    const { showLogin, setShowLogin, login, setLogin } = useAppContext();

    const [seat, setSeat] = useState<string>('');
    const [round, setRound] = useState<string>("28 มิ.ย. 13.00-16.00");

    const handleUserData = async () => {

        try {
            const response = await axios.post('/api/user/login', {seat, round})
            if (response.data.success) {
                toast.success(response.data.message)
                setLogin({seat, round})
                setShowLogin(false);
            } else {
                toast.error(response.data.message)
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error.message)
        }

    }

    useEffect(() => {

        if (showLogin) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }
    }, [showLogin]);

    return (
        <div className={`${showLogin ? 'flex' : 'hidden'} absolute  bg-primary/90 z-60  w-full h-screen items-center justify-center px-12`}>
            <section className='relative flex flex-col p-12 bg-white text-center gap-3'>
                <X onClick={() => setShowLogin(false)} className='absolute right-0 top-0 m-2'/>
                <p className='text-3xl'>กรอกที่นั่งของคุณ</p>
                <input 
                    onChange={(e) => setSeat(e.target.value)}
                    value={seat}
                    className="border border-gray-400 p-2" 
                    type="text" 
                    placeholder='เช่น A00'
                />
                <p className='text-3xl'>รอบละครเวที</p>
                <select
                     value={round}
                     onChange={(e) => setRound(e.target.value)}
                    className='border border-gray-400 p-2'
                >
                    <option value="28 มิ.ย. 13.00-16.00">รอบที่ 1 | วันที่ 28 มิ.ย. 13.00-16.00</option>
                    <option value="28 มิ.ย. 18.00-21.00">รอบที่ 2 | วันที่ 28 มิ.ย. 18.00-21.00 </option>
                    <option value="29 มิ.ย. 13.00-16.00">รอบที่ 3 | วันที่ 29 มิ.ย. 13.00-16.00</option>
                    <option value="29 มิ.ย. 18.00-21.00">รอบที่ 4 | วันที่ 29 มิ.ย. 18.00-21.00</option>
                </select>

                <button onClick={handleUserData} className='w-full bg-primary p-2 rounded-xl text-white text-xl mt-2'>ยืนยัน</button>
                <p className='text-xs text-red-500'>*กรุณาตรวจสอบรอบการแสดงและที่นั่งของลูกค้าอย่างละเอียดอีกครั้ง เพื่อให้แน่ใจว่าไม่มีการเปลี่ยนแปลงของที่นั่ง</p>
            </section>
        </div>
    )
}

export default Login

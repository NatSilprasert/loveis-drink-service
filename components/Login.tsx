import React from 'react'

const Login = () => {
  return (
    <div className='absolute bg-primary/90 z-100 w-full h-screen flex items-center justify-center'>
        <section className='flex flex-col p-12 bg-white text-center gap-3'>
            <p className='text-3xl'>กรอกที่นั่งของคุณ</p>
            <input 
                className="border border-gray-400 p-2" 
                type="text" 
                placeholder='Ex. A01'
            />
            <p className='text-3xl'>รอบละครเวที</p>
            <input className="border border-gray-400" type="option" />
        </section>
    </div>
  )
}

export default Login

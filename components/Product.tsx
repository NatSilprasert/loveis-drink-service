"use client"

import React, { useState } from 'react'
import ProductCard from './ProductCard';
import { useAppContext } from '@/context/AppContext';

const Product = () => {

    const product = {
        _id: 1
    }

    const [activeCategory, setActiveCategory] = useState('bestseller');

    return (
        <div className='mt-4'>
            <div className='flex gap-8 justify-center'>
                <div className='flex flex-col items-center'>
                    <button onClick={() => setActiveCategory('bestseller')} className={`${activeCategory === 'bestseller' ? 'text-black font-semibold' : 'text-gray-500'} flex-1 text-center font-medium py-2`}>BEST SELLER</button>
                    <hr className={`${activeCategory === 'bestseller' ? 'border-black' : 'border-white'} w-4/5 border-b`}/>
                </div>
                <div className='flex flex-col items-center'>
                    <button onClick={() => setActiveCategory('coffee')} className={`${activeCategory === 'coffee' ? 'text-black font-semibold' : 'text-gray-500'} flex-1 text-center font-medium py-2`}>COFFEE</button>
                    <hr className={`${activeCategory === 'coffee' ? 'border-black' : 'border-white'} w-4/5 border-b`}/>
                </div>
                <div className='flex flex-col items-center'>
                    <button onClick={() => setActiveCategory('non-coffee')} className={`${activeCategory === 'non-coffee' ? 'text-black font-semibold' : 'text-gray-500'} flex-1 text-cent-medium py-2`}>NON-COFFEE</button>
                    <hr className={`${activeCategory === 'non-coffee' ? 'border-black' : 'border-white'} w-4/5 border-b`}/>
                </div>
            </div>
            <hr className='w-full border-gray-400/50'/>
            <div className='mt-6 mx-4 md:mx-8 lg:mx-54'>
                <p className='font-semibold text-2xl mb-4'>{activeCategory}</p>
                <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </section>
            </div>
            <hr className='mt-16 text-gray-400/50'/>
        </div>
    )
}

export default Product

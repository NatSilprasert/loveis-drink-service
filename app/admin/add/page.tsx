'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import toast from 'react-hot-toast';

const Add = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [banner, setBanner] = useState<File | null>(null);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [category, setCategory] = useState<string>("coffee");
    const [option, setOption] = useState<string[]>([]);
    const [bestseller, setBestseller] = useState<boolean>(false);

    const onSubmitHandler = async (e: any) => {
       
        e.preventDefault();
        setIsSubmitting(true);

        try {
            
            const formData = new FormData()

            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("option", JSON.stringify(option))
            formData.append("bestseller", bestseller ? "true" : "false");
            if (banner) formData.append("banner", banner);
            
            const response = await axios.post("/api/product/add", formData)
            
            if (response.data.success) {
                console.log(response.data);
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setPrice('')
                setCategory('')
                setOption([])
                setBestseller(false)
                setBanner(null) 
            } else {
                toast.error(response.data.message)
            }

            
            
        } catch (error: any) {
            console.log(error);
            toast.error(error.message)
        }
        
        setIsSubmitting(false);
    }
        
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>

                <p className='mb-2'>Upload Banner</p>

                <label htmlFor="banner">
                    <Image className='mb-2' src={!banner ? assets.upload_area : URL.createObjectURL(banner)} alt="" width={80} height={80} />
                    <input onChange={(e: any) => setBanner(e.target.files[0])} type="file" id="banner" hidden/>
                </label>

            </div>

            <div className='w-full'>
                <p className='mb-2'>Product name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 border' type="text" placeholder='Type here' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 border' placeholder='Write content here' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

                <div>
                    <p className='mb-2'>Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='border w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='0' />
                </div>
                <div>
                    <p className='mb-2'>Product Category</p>
                    <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='border w-full px-3 py-2 sm:w-[120px]'
                    >
                        <option value="coffee">coffee</option>
                        <option value="non-coffee">non-coffee</option>
                    </select>
                </div>

            </div>
            
            <p className=''>Product Option</p>
            <div className='flex gap-3'>
                <div onClick={() => setOption(prev => prev.includes("hot") ? prev.filter(item => item != "hot") : [...prev, "hot"])}>
                    <p className={`${option.includes("hot") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>hot</p>
                </div>
                <div onClick={() => setOption(prev => prev.includes("cold") ? prev.filter(item => item != "cold") : [...prev, "cold"])}>
                    <p className={`${option.includes("cold") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>cold</p>
                </div> 
            </div>

            <div className='flex gap-2 mt-2'>
                <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
                <label className='cursor-pointer' htmlFor="bestseller">Bestseller?</label>
            </div>

            <button 
                disabled={isSubmitting}
                type='submit' 
                className='w-28 py-3 mt-4 bg-black text-white'
            >
                {isSubmitting ? "Adding..." : "Add"}
            </button>

        </form>
    )
}

export default Add

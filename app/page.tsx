import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Product from '@/components/Product'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Hero/>
        <Product/>
      </div>
      <Footer/>
    </>
  )
}

export default Home

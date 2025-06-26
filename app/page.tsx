import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Login from '@/components/Login'
import Navbar from '@/components/Navbar'
import Product from '@/components/Product'
import React from 'react'

const Home = () => {

  return (
    <>
      <Login/>
      <Navbar/>
      <Hero/>
      <Product/>
      <Footer/>
    </>
  )
}

export default Home

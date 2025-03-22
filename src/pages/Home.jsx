import React, { useState } from 'react'
import Hero from '../components/HeroSection/Hero'
import Category from '../components/category/Category'
import Flashsale from '../components/Offer/Flashsale';
const Home = () => {
  const [category, setCategory]=useState("All");
  return (
    <div>
      <Hero />
    <Category categoryes={category} setCategory={setCategory}/>
    <Flashsale />
    </div>
  )
}

export default Home
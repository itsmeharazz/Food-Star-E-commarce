import React from 'react'
import Hero from '../components/HeroSection/Hero'
// import Category from '../components/category/Category'
import Flashsale from '../components/Offer/Flashsale';
import Topsaleing from '../components/Topsaleing/Topsaleing';
import Products from '../components/products/Products';
import Policy from '../components/policy/Policy';
const Home = () => {
  // const [category, setCategory]=useState("All");
  return (
    <div>
      <Hero />
    {/* <Category categoryes={category} setCategory={setCategory}/> */}
    <Flashsale />
    <Topsaleing />
    <Products />
    <Policy />
    </div>
  )
}

export default Home
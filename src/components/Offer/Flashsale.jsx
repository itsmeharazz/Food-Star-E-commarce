import React from 'react'
import {assets} from '../../assets/assets';
import { products } from "../../assets/assets";
import { Navigate } from "react-router-dom";
const Flashsale = () => {
  return (
    <div className='container my-5'>
      <img src={assets.coming_soon} className='w-full h-[20em] mb-5' alt='' />
      <div className='w-full flex justify-end my-5'>
        <button
          className='cursor-pointer w-[6em] h-[2em] bg-accent rounded-2xl hover:bg-accent-dark '
          onClick={() => Navigate("/shop")}>
          Show all
        </button>
      </div>
      <div className='flex justify-between items-center'>
        {products.slice(0, 4).map((offerItems, index) => (
          <div
            key={index}
            onClick={() => Navigate("/productsDetails")}
            className='cursor-pointer w-full  md:w-[22%] h-[20em] rounded-3xl shadow-xl hover:shadow-2xl  overflow-hidden block md:flex flex-col'>
            <div className='w-full h-[70%] overflow-hidden'>
              <img src={offerItems.image} className='object-cover' alt='' />
            </div>
            <p className='my-3 pl-3 text-xl font-medium '>{offerItems.name}</p>
            <div className='flex justify-between items-center'>
              <p className='font-medium p-4'>৳ {offerItems.price}</p>
              <p className='p-4 offer-text line-through'>
                ৳ {offerItems.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flashsale
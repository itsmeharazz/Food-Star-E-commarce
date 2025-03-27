import React from 'react'
import {assets} from '../../assets/assets';
import { products } from "../../assets/assets";
import { Navigate, useNavigate } from "react-router-dom";
const Flashsale = () => {
  const Navigate = useNavigate();
  return (
    <div className='container my-5'>
      <img
        src={assets.coming_soon}
        className='w-full h-[15em] md:h-[30em]  mb-5'
        alt=''
      />
      <div className='w-full flex justify-end my-5'>
        <button
          className='cursor-pointer mt-15 w-[6em] h-[2em] bg-accent rounded-2xl hover:bg-accent-dark '
          onClick={() => Navigate("/shop")}>
          Show all
        </button>
      </div>
      <div className=' mb-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {products.slice(0, 4).map((offerItems, index) => (
          <div
            key={index}
            onClick={() => Navigate("/productsDetails")}
            className='cursor-pointer w-full  h-[23em]  rounded-3xl shadow-xl hover:shadow-2xl  overflow-hidden'>
            <div className='w-full h-[250px]'>
              <img src={offerItems.image} className=' w-[100%] h-full aspect-square' alt='' />
            </div>
            <p className='my-3 pl-3 text-xl font-medium '>
              {offerItems.name.length > 5
                ? `${offerItems.name.slice(0, 5)}...`
                : offerItems.name}
            </p>
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
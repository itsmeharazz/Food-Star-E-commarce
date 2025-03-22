import React from "react";
import { products } from "../../assets/assets";
import { Navigate } from "react-router-dom";
const Topsaleing = () => {
  return (
    <div className='container my-10'>
      <div className='w-full flex justify-between my-5'>
        <h2 className="text-2xl font-semibold">Top Selling Products</h2>
        <button
          className='cursor-pointer w-[6em] h-[2em] bg-accent rounded-2xl hover:bg-accent-dark '
          onClick={() => Navigate("/shop")}>
          Show all
        </button>
      </div>
      <div className='flex flex-wrap gap-8 justify-between items-center'>
        {products.slice(0, 4).map((offerItems, index) => (
          <div
            key={index}
            onClick={() => Navigate("/productsDetails")}
            className='cursor-pointer w-full  md:w-[22%] h-[20em] rounded-3xl shadow-xl hover:shadow-2xl  overflow-hidden block md:flex flex-col'>
            <div className='w-full h-[70%] overflow-hidden'>
              <img src={offerItems.image} className='object-cover' alt='' />
            </div>
            <p className='my-3 pl-3 text-xl font-medium '>{offerItems.name}</p>
            <div className='flex justify-between items-center px-4'>
              <div className='flex justify-between'>
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex} className='text-orange-400'>
                    ★
                  </span>
                ))}
              </div>
              <p className='font-medium p-4'>৳ {offerItems.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topsaleing;

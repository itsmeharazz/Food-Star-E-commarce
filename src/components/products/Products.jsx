import React from "react";
import { products } from "../../assets/assets";
import { Navigate } from "react-router-dom";
const Products = () => {
  return (
    <div className='container my-10'>
      <div className='w-full flex justify-between my-5'>
        <h2 className='text-2xl font-semibold'>Products</h2>
        <button
          className='cursor-pointer w-[6em] h-[2em] bg-accent rounded-2xl hover:bg-accent-dark '
          onClick={() => Navigate("/shop")}>
          Show all
        </button>
      </div>
      <div className='flex flex-wrap gap-8 justify-between items-center'>
        {products.slice(0, 8).map((offerItems, index) => (
          <div
            key={index}
            onClick={() => Navigate("/productsDetails")}
            className='cursor-pointer w-full  md:w-[22%] h-[20em] rounded-3xl shadow-xl hover:shadow-2xl  overflow-hidden block md:flex flex-col'>
            <div className='w-full h-[70%] overflow-hidden'>
              <img src={offerItems.image} className='object-cover' alt='' />
            </div>
            <p className='my-3 pl-3 text-xl font-medium '>{offerItems.name}</p>
              <p className='font-medium px-3'>৳ {offerItems.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

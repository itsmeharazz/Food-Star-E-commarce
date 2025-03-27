import React from "react";
import { products } from "../../assets/assets";
import {  useNavigate } from "react-router-dom";
const Products = () => {
  const Navigate = useNavigate();
  return (
    <div className='container my-10'>
      <div className='w-full flex justify-between mb-15'>
        <h2 className='sm:text-md md:text-2xl font-semibold'>Products</h2>
        <button
          className='cursor-pointer w-[6em] h-[2em] bg-accent rounded-2xl hover:bg-accent-dark '
          onClick={() => Navigate("/shop")}>
          Show all
        </button>
      </div>
      <div className='mb-30 grid grid-cols-1 md:grid-cols-4 gap-12'>
        {products.slice(8, 16).map((offerItems, index) => (
          <div
            key={index}
            onClick={() => Navigate("/productsDetails")}
            className='cursor-pointer w-full  h-[23em]  rounded-3xl shadow-xl hover:shadow-2xl  overflow-hidden'>
            <div className='w-full h-[75%] overflow-hidden'>
              <img
                src={offerItems.image}
                className=' w-[100%] h-full aspect-auto'
                alt=''
              />
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

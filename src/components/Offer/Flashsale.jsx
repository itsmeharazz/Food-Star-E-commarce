import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { products } from "../../assets/assets";

const Flashsale = () => {
  const navigate = useNavigate(); // Fixed naming

  return (
    <div className='container my-5'>
      <img
        src={assets.coming_soon}
        className='w-full h-[15em] md:h-[30em] mb-5'
        alt='Coming Soon'
      />
      <div className='w-full flex justify-end my-5'>
        <button
          className='cursor-pointer w-[6em] h-[2em] bg-accent rounded-2xl hover:bg-accent-dark'
          onClick={() => navigate("/shop")} // Fixed navigation
        >
          Show all
        </button>
      </div>
      <div className='mb-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {products.slice(0, 4).map((offerItems, index) => (
          <Link
            to={`/productsDetails/${offerItems.id}`} // Corrected Link navigation
            key={index}
            className='cursor-pointer w-full h-[23em] rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden'>
            <div className='w-full h-[70%] overflow-hidden'>
              <img
                src={offerItems.image}
                className='w-full h-full object-cover'
                alt={offerItems.name}
              />
            </div>
            <p className='my-3 pl-3 text-xl font-medium'>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Flashsale;

import React from "react";
import { products } from "../../assets/assets";
import { useNavigate} from "react-router-dom";
const Topsaleing = () => {
  const Navigate = useNavigate();
  return (
    <div className='container my-10'>
      <div className='w-full flex justify-between my-5'>
        <h2 className='sm:text-md md:text-2xl font-semibold'>
          Top Selling Products
        </h2>
        <button
          className='cursor-pointer w-[6em] h-[2em] bg-accent rounded-2xl hover:bg-accent-dark '
          onClick={() => Navigate("/shop")}>
          Show all
        </button>
      </div>
      <div className='mb-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {products.slice(4, 8).map((offerItems, index) => (
          <div
            key={index}
            onClick={() => Navigate("/productsDetails")}
            className='cursor-pointer w-full  h-[23em]  rounded-3xl shadow-xl hover:shadow-2xl  overflow-hidden'>
            <div className='w-full h-[70%] overflow-hidden'>
              <img
                src={offerItems.image}
                className='w-[100%] h-full aspect-square'
                alt=''
              />
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

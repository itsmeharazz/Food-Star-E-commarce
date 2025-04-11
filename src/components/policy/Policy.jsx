import React from 'react'
import { FaDollarSign } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";


const Policy = () => {
  return (
    <div className='w-full mb-10 py-10  gird place-content-center bg-[#d9d9d9]'>
      <div className='container w-full md:w-[50%] mx-auto block  md:flex justify-between items-center gap-4'>
        <div className='flex items-center gap-3'>
          <samp className='text-4xl text-[#FBAA72] font-bold'>⟳</samp>
          <p className='sm:text-sm md:text-xl'> 10 days returns</p>
        </div>
        <div className='flex items-center gap-3'>
          <FaDollarSign className='text-3xl text-[#FBAA72] font-bold' />
          <p className='sm:text-sm md:text-xl'>Cash on delivery</p>
        </div>
        <div className='flex items-center gap-3'>
          <FaGlobe className='text-3xl text-[#FBAA72] font-bold' />
          <p className='sm:text-sm md:text-xl'>Online support</p>
        </div>
      </div>
    </div>
  );
}

export default Policy
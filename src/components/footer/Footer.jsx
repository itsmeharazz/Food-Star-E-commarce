import React from 'react'
import { assets } from '../../assets/assets';
import { FaRegCopyright } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-[#eceaea]'>
      <div className='container block mx-auto gap-20 md:flex justify-around items-start'>
        <div className='w-full my-9 md:w-[40%] block gap-1'>
          <img src={assets.logo} alt='' className='w-[200px] h-[130px]' />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            magni nostrum deleniti dignissimos repellendus expedita?
            Praesentium, et consequuntur vel perspiciatis, quos est excepturi
            ullam distinctio deserunt maxime ut iste magni.
          </p>
          <div className='my-10 flex gap-4 items-center'>
            <a
              href='https://web.facebook.com/bdfoodstar'
              className='text-2xl font-medium text-[#a2a2a2] hover:text-[#f5922a]'>
              <FaFacebookF />
            </a>
            <a
              href='https://www.instagram.com/bdfoodstar'
              className='text-2xl font-medium text-[#a2a2a2] hover:text-[#f5922a]'>
              <FaInstagram />
            </a>
            <a
              href='https://www.youtube.com/@bdfoodstar'
              className='text-2xl font-medium text-[#a2a2a2] hover:text-[#f5922a]'>
              <FaYoutube />
            </a>
            <a
              href='https://www.linkedin.com/in/bdfoodstar/'
              className='text-2xl font-medium text-[#a2a2a2] hover:text-[#f5922a]'>
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className='block gap-1 mt-10'>
          <h2 className='mb-10 text-3xl font-extrabold'> COMPANY </h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='block gap-1 mt-10'>
          <h2 className='mb-10 text-3xl font-extrabold'>GET IN TOUCH</h2>
          <p>+8801234567890</p>
          <p>contact@gmail.com</p>
        </div>
      </div>
      <hr className='my-2 h-1 bg-[#d3d0d0] border-none' />
      <p className='py-5 flex items-center gap-2 justify-center '>
        <FaRegCopyright />
        Meharazul islam 2025
      </p>
    </div>
  );
}

export default Footer
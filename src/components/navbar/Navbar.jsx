import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { CgProfile } from "react-icons/cg";
import { BsBasket2 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='bg-gray-100 border-b border-gray-100 shadow-sm backdrop-blur-sm fixed left-0 right-0 top-0 z-50'>
      <div className='container flex h-16 justify-between w-full items-center lg:px-8 md:h-20 mx-auto px-4 sm:px-6'>
        {/* Logo */}
        <Link to={"/"}>
          <img
            src={assets.logo}
            alt='Food Star'
            className='cursor-pointer md:w-[13em] md:h-[8em] w-[8em] h-[6em]'
          />
        </Link>
        {/* Mobile Menu Button */}
        <button
          className='p-2 md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <HiX className='h-6 w-6' />
          ) : (
            <HiMenu className='h-6 w-6' />
          )}
        </button>
        {/* Navigation Links - Desktop */}
        <ul className='hidden justify-between items-center gap-4 cursor-pointer text-accent  md:flex'>
          <Link to='/' className='hover:text-gray-400'>
            Home
          </Link>
          <Link to='/shop' className='hover:text-gray-400'>
            Shop
          </Link>
          <Link to='/category' className='hover:text-gray-400'>
            Category
          </Link>
        </ul>
        {/* cart items icons */}
        <div className='hidden md:flex justify-between items-center gap-5 '>
          <div className='relative'>
            <input
              type='search'
              className='w-[20em] h-[2em] px-4 bg-white rounded-full border border-gray-300 outline-[#ff7016] px-3. placeholder:Search  overflow-hidden '
            />
            <button className='absolute right-0 top-0 bg-accent w-[5em] h-full rounded-r-full text-accent cursor-pointer md:text-lg md:w-[4em]'>
              Search
            </button>
          </div>
          <div className='relative'>
            <BsBasket2 className='text-4xl md:text-3xl cursor-pointer text-gray-600' />
            <span className='absolute w-7 text-center top-[-55%] right-[1%] bg-accent rounded-full text-white'>
              0
            </span>
          </div>
          <CgProfile className='text-4xl md:text-3xl cursor-pointer text-gray-600' />
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='bg-white w-[100%] mt-65 border-gray-100 border-t md:hidden py-4'>
            <div className='container mx-auto px-4 space-y-4'>
              <ul className='block justify-between items-center gap-4 cursor-pointer text-accent  md:hidden'>
                <Link to='/' className='hover:text-gray-400'>
                  Home
                </Link>
                <Link to='/shop' className='hover:text-gray-400'>
                  Shop
                </Link>
                <Link to='/category' className='hover:text-gray-400'>
                  Category
                </Link>
              </ul>
              {/* cart items icons */}
              <div className='flex justify-between mt-10 items-center gap-5 '>
                <div className='relative'>
                  <BsBasket2 className='text-4xl cursor-pointer text-gray-600' />
                  <span className='absolute w-7 text-center top-[-20px] right-1 bg-accent rounded-full text-white'>
                    0
                  </span>
                </div>
                <CgProfile className='text-4xl cursor-pointer text-gray-600' />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

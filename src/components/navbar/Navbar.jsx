import React, { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { assets } from "../../assets/assets";
import { CgProfile } from "react-icons/cg";
import { BsBasket2 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
  ];

  const { cartItems } = useContext(StoreContext);
  const itemCount = Object.values(cartItems).reduce((a, b) => a + b, 0); // total items

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

        {/* Desktop Menu */}
        <ul className='space-x-6 md:flex gap-6 text-lg hidden'>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`hover:text-orange-400 ${
                  location.pathname === item.to
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : ""
                }`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart & Profile */}
        <div className='hidden md:flex justify-between items-center gap-5'>
          <div className='relative'>
            <input
              type='search'
              className='w-[20em] h-[2em] px-4 bg-white rounded-full border border-gray-300 outline-[#ff7016]  placeholder:Search  overflow-hidden '
              placeholder='Search'
            />
            <button className='absolute right-0 top-0 bg-accent w-[5em] h-full rounded-r-full text-accent cursor-pointer md:text-lg md:w-[4em]'>
              Search
            </button>
          </div>
          <div className='relative'>
            <Link to={"/cart"}>
              <BsBasket2 className='text-4xl md:text-3xl cursor-pointer text-gray-600' />
              <span className='absolute w-7 text-center top-[-55%] right-[1%] bg-accent rounded-full text-white'>
                {itemCount}
              </span>
            </Link>
          </div>
          <CgProfile
            onClick={() => setShowLogin(true)}
            className='text-4xl md:text-3xl cursor-pointer text-gray-600'
          />
        </div>

        {/* Mobile Nav Toggle */}
        <div className='md:hidden z-50'>
          <button onClick={toggleMenu} className='cursor-pointer'>
            {isMenuOpen ? (
              <FiX className='w-5 h-5' />
            ) : (
              <FaBarsStaggered className='w-5 h-5 text-[#a2a2a2]' />
            )}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <ul
          className={`md:hidden fixed top-0 left-0 w-full h-[100vh] bg-gray-800 text-white z-40 transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform ease-out duration-300 px-4 space-y-6 flex flex-col items-center justify-center`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className='hover:text-orange-400'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

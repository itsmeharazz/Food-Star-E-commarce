import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
const CartPage = () => {
  const navigate = useNavigate();
  const {  products,
      cartItems,
      removeFromCart,
      getTotalCartAmount,} =
    useContext(StoreContext);
  return (
    <div className='container'>
      <div className='mt-[100px]'>
        <div className='grid grid-cols-6 items-center text-gray-500'>
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qunatity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {products.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id} className=''>
                <div className='grid grid-cols-6 items-center py-5'>
                  <img src={item.image} alt='' className='w-[8em] h-[8em]' />
                  <p>{item.name}</p>
                  <p> ${item.price} </p>
                  <p> {cartItems[item.id]} </p>
                  <p> ${item.price * cartItems[item.id]} </p>
                  <p className='cross' onClick={() => removeFromCart(item.id)}>
                    <RiDeleteBin6Line className='text-2xl font-bold text-red-400 hover:text-red-600 cursor-pointer' />
                  </p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none ' />
              </div>
            );
          }
        })}
      </div>

      <div className=' my-[80px] block md:flex justify-around gap-2'>
        <div className='w-full md:w-[50%] block md:flex flex-col gap-[20px] '>
          <h2>Cart Total</h2>
          <div className=''>
            <div className=' flex  justify-between text-[#555]'>
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='mt-10' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='mt-10' />
            <div className='flex justify-between text-[#555]'>
              <p>Total</p>
              <p>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
            </div>
            <hr className='mt-10' />
          </div>
          <button
            className='h-13  rounded-md w-[30%] text-[#1c205b] hover:text-white bg-[#f5922a] hover:bg-[#43bb00] transition-all ease-in-out cursor-pointer '
            onClick={() => navigate("/placeOrder")}>
            Proceed To Checkout
          </button>
        </div>
        <div className=' w-full md:w-[38%]'>
          <div className='my-5'>
            <p>If you have a promo code,Enter it here</p>
            <div className='my-10'>
              <input
                type='text'
                placeholder='Promo Code'
                className='pl-[10px] w-[60%] py-[8px] bg-[#f3eeee] rounded-l-xl outline-none'
              />
              <button className='w-[150px] py-[8px] px-[5px] border-none outline-none rounded-r-xl text-white bg-[#f5922a] cursor-pointer'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

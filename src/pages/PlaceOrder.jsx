import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form action='' className='container place-order my-30 block gap-10 md:flex'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='email' name='' placeholder='Email Address' id='' />
        <input type='text' name='' placeholder='Stree' id='' />
        <div className='multi-fields'>
          <input type='text' name='' placeholder='city' id='' />
          <input type='text' name='' placeholder='State' id='' />
        </div>
        <div className='multi-fields'>
          <input type='text' name='' placeholder='Zip Code' id='' />
          <input type='text' name='' placeholder='Country' id='' />
        </div>
        <input type='text' placeholder='Phone' />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2 className='title'>Cart Total</h2>
          <div className=''>
            <div className='cart-total-details'>
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>
            <hr />
          </div>
          <button className='h-13  rounded-md w-[30%] text-[#1c205b] hover:text-white bg-[#f5922a] hover:bg-[#43bb00] transition-all ease-in-out cursor-pointer '>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;

import React from "react";

import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev; // Ensure item exists in cart

      const updatedCart = { ...prev };
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId]; // Remove item if quantity is 1
      } else {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const itemInfo = products.find(
        (product) => String(product.id) === String(itemId)
      );
      return itemInfo ? total + itemInfo.price * quantity : total;
    }, 0);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

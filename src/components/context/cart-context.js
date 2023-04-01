import React, { useState } from "react";
//provider
//consumer

const CartContext = React.createContext();

const CartPovider =(props)=> {
  const {cartData, setCartData}=useState([]);
  const addCartData=(data)=>{
    setCartData([...cartData, data]);
  }
  const removeCartData=()=>{

  }
    return (
        <CartContext.Provider value={{cartData, addCartData}}>
          {props.children}
        </CartContext.Provider>
    )
}
export {CartContext, CartPovider};
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/cartpage.css";
import CartItem from "../Components/CartItem";
import Checkout from "../Components/Checkout";

const Cart = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  return (
  
   <div>
   <div className="cart-page" id="cart">
   <div className="cart-header">
     <div className="itemNo">
       <h1>Cart</h1>
       <span>{totalItems} items</span>
     </div>
     <div className="line"></div>
   </div>
   {cart.map((item) => (
     <CartItem key={item.id} item={item} />
   ))}


 </div>
   <Checkout/>
   
   </div>
       
  
  );
};

export default Cart;

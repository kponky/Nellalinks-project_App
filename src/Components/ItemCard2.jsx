import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../styles/itemCard2.css'

const ItemCard2 = ({ item}) => {
  const { addToCart, cartItems } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (cartItems) {
      const isItemInCart = cartItems.some(
        (cartItem) => cartItem.id === item.id
      );
      setIsInCart(isItemInCart);
    }
  }, [cartItems, item.id]);

  const handleAddToCart = () => {
    addToCart(item, item.id);
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
    setIsInCart(false);
  };

  return (
    <div className="itemcard-container" >
      <div className="content_img">
        <img src={item.image} alt={item.title} className="itemImg" />
      </div>
      <div className="content-desc">
        {item.recomm && <span>Recommended </span>}
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
        <div className="price-btn">
          <p>{item.price}</p>
          {isInCart ? (
            <button className="btn btn2" onClick={handleRemoveFromCart}>
              <FontAwesomeIcon icon={faTimes} className="icon" />
            </button>
          ) : (
            <button className="btn" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard2;















// import React from 'react'

// const ItemCard2 = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ItemCard2

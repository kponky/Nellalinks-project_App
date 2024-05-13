import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import trash from "../assets/bin.png";
import { useCart } from "../context/CartContext";
import Checkout from "./Checkout";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-container">
        <img src={item.image} alt={item.title} className="cartImg" />
        <div className="cart-contents">
          <div className="title-delete">
            <h2>{item.title}</h2>
            <img
              src={trash}
              alt=""
              className="bin"
              onClick={() => removeFromCart(item.id)}
            />
          </div>

          <p>{item.desc}</p>

          <div className="price-quantity-btn">
            <h3>{item.price}</h3>

            <div className="quantity">
              <button
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity < 2}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default CartItem;

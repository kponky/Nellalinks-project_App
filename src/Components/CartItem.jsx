import React from "react";
import { useCart } from "../context/CartContext";
import binImg from "../assets/bin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const handleIncrement = (id) => {
    increaseQuantity(id);
  };
  const handleDecrement = (id) => {
    decreaseQuantity(id);
  };
  return (
    <div className="cart-items" id="cart_items">
      <div className="heading">
        <h2>Cart</h2>
        <p>
          3<span>items</span>
        </p>
      </div>
      <div>line</div>
      <div className="cart-card">
        <div className="cart-card-img">
          <img src={item.image} alt={item.title} className="itemImg" />
        </div>
        <div className="cart-card-info">
          <div className="ham-bin">
            <h3>{item.title}</h3>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              <img src={binImg} alt="bin" />
            </button>
          </div>
          <p> {item.desc}</p>

          <div className="price-btn">
            <p>{item.price}</p>
            <div className="buttons">
              <button
                className="quantity-btn"
                onClick={() => handleIncrement(item.id)}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span> {item.quantity} </span>
              <button
                className="quantity-btn"
                onClick={() => handleDecrement(item.id)}
              >
                <FontAwesomeIcon icon={faPlus}  className="icon"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

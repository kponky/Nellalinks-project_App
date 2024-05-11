import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/cartpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Cartpage = () => {
  const { cart, total, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const totalItems = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  return (
    <div className="cart-page" id="cart">
      <div className="cart-header">
        <h1>{cart.length > 0 ? cart[0].category : ""}</h1>
        <span>{totalItems} items</span>
      </div>
      {cart.map((item) => (
        <div key="{item.id}" className="cart-item">
          <img src={item.image} alt={item.title} />

          <div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
          <div>
            <button onClick={() => decreaseQuantity(item.id)}>
              {" "}
              <FontAwesomeIcon icon={faMinus} />{" "}
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>
              {" "}
              <FontAwesomeIcon icon={faPlus} />{" "}
            </button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>
            {" "}
            <FontAwesomeIcon icon={faTrash} />{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cartpage;

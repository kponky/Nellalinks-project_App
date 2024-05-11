import React from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ItemCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="contents">
      <div className="home-content_img">
        <img src={item.image} alt={item.title} className="itemImg" />
      </div>
      <div className="home-content-desc">
        {item.recomm && <span>Recommended </span>}
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
        <div className="price-btn">
          <p>{item.price}</p>
          <button className="btn" onClick={() => addToCart(item, item.id)}>
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

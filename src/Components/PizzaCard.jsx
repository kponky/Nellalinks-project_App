import React, { useState } from "react";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/pattern-2/pizza.css";

const PizzaCard = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePizzaCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pizza-card-container">
      <div className="pcc-heading">
        <h1> Pizza</h1>
        <button onClick={togglePizzaCard}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      <div className="line"></div>

      {isOpen && (
        <div className='item-open'>
        {menuItems.map((item) =>(
          <div key={item.id} className="pizza-item">
          <img src={item.image} alt={item.title} className="pizza-img" />
          <div className="pizza-info">
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
          <div className="price-btn">
            <p>{item.price}</p>
            <button className="btn"> <FontAwesomeIcon icon={faPlus}/></button>
          </div>
          </div>
          </div>
  
        ))}
        </div>
      )}



    </div>
  );
};

export default PizzaCard;

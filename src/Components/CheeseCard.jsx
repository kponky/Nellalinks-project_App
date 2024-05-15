import React, { useState } from "react";
import "../styles/pattern-2/cheese.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";

const Cheesecard = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleCheeseCard = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="cheese-card-container">
      <div className="cheese-heading">
        <h1> Cheese</h1>
        <button onClick={toggleCheeseCard}>
          <FontAwesomeIcon icon={faChevronDown} className="icon" />{" "}
        </button>
      </div>
      <div className="line"></div>

       {isOpen && (
      <div className='item-open'>
      {menuItems.map((item) =>(
        <div key={item.id} className="donut-item">
        <img src={item.image} alt={item.title} className="donut-img" />
        <div className="donut-info">
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

export default Cheesecard;

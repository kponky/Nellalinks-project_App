import React, { useState } from "react";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/pattern-2/burgercard.css";
import data from  '../../db.json';

const Burgercard = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleBurgerCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-card-container">
      <div className="bcc-heading">
        <h1>Burger</h1>
        <button onClick={toggleBurgerCard}>
          <FontAwesomeIcon icon={faChevronDown} className="icon" />
        </button>
      </div>
      <div className="line"></div>
      {isOpen && (
        <div className="carousel">
          {data.Items.map((item) => (
            <div key={item.id} className="caurosel-item">
              <img src={item.image} alt={item.title} className="burger-img" />
              <div className="burger-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="price-btn">
                  <p>{item.price}</p>
                  <button className="btn">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Burgercard;

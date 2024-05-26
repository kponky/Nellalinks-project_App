import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/pattern-2/burito.css";

const BurritoCard = () => {
  return (
    <div className="burrito-card-container">
      <div className="bcc-heading">
        <h1> Burrito </h1>
        <button>
        
          <FontAwesomeIcon icon={faChevronDown} />{" "}
        </button>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default BurritoCard;

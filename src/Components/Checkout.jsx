import {
  faChevronDown,
  faChevronUp,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-card">

      <div className="summary-down">
        <div className=" summary-icon">
        <h3>Order Summary</h3>
        <button>
          <FontAwesomeIcon icon={faChevronDown}  className="icon"/>
        </button>
        </div>

        <div className="subtotal-vat">
          <div className="subtotal">
            <h3>Subtotal</h3>
            <p>N1000</p>
          </div>
          <div className="subtotal">
            <h3>VAT</h3>
            <p>N3000</p>
          </div>
        </div>
        <div className="orderTotal">
          <h3>Order total</h3>
          <p>N13000</p>
        </div>
      </div>
  
      <div className="checkout-close">
        <h3>Order Total </h3>
        <div className="total-icon">
          <h3>N2000</h3>
          <button>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
      </div>

      

       <div className="checkout-button">
        <button className="btn">Checkout</button>
      </div>

    
    </div>
  );
};

export default Checkout;

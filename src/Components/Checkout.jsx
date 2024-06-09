import {
  faChevronDown,
  faChevronUp,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../styles/checkout.css";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(true); // State variable to track open/closed state

  const toggleSection = (section) => {
    if (section === "summary") {
      setIsOpen(!isOpen); // Toggle for summary-down
    } else {
      setIsOpen(false); // Close summary-down if clicked from checkout-close
    }
  };

  const getSummaryText = () => {
    return isOpen ? "Order Summary" : "Order Total";
  };

  return (
    <div className="checkout-card">
      <div className="summary-down">
        <div className="summary-icon">
          <h3>{getSummaryText()}</h3> {/* Call function to get text */}
          {isOpen ? null : ( // Conditionally render order total when closed
          <span> N2000 </span>
          )}
          <button onClick={() => toggleSection("summary")}>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp} // Change icon based on state
            className="icon"
          />
        </button>
        </div>

        {isOpen && ( // Conditionally render summary content
          <>
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
          </>
        )}
      </div>

      <div className="checkout-button">
        <button className="btn">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;










// import {
//   faChevronDown,
//   faChevronUp,
//   faCircleChevronUp,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
// import "../styles/checkout.css";

// const Checkout = () => {
//   return (
    
//     <div className="checkout-card">

//       <div className="summary-down">
//         <div className=" summary-icon">
//         <h3>Order Summary</h3>
//         <button>
//           <FontAwesomeIcon icon={faChevronDown}  className="icon"/>
//         </button>
//         </div>

//         <div className="subtotal-vat">
//           <div className="subtotal">
//             <h3>Subtotal</h3>
//             <p>N1000</p>
//           </div>
//           <div className="subtotal">
//             <h3>VAT</h3>
//             <p>N3000</p>
//           </div>
//         </div>
//         <div className="orderTotal">
//           <h3>Order total</h3>
//           <p>N13000</p>
//         </div>
//       </div>
  
//       <div className="checkout-close">
//         <h3>Order Total </h3>
//         <div className="total-icon">
//           <h3>N2000</h3>
//           <button>
//           <FontAwesomeIcon icon={faChevronUp}  className="icon"/>
//           </button>
//         </div>
//       </div>
      

//        <div className="checkout-button">
//         <button className="btn">Checkout</button>
//       </div>

    
//     </div>
//   );
// };

// export default Checkout;

// import React from "react";
// import { useCart } from "../context/CartContext";
// import { formatCurrency } from "../utils/helpers";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// const Cart = ({ setOpenCart }) => {
//   const { cart, total } = useCart();

//   const handleCheckout = () => {
//     setOpenCart(false);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-card">
//         {cart.length < 1 ? (
//           <div className="cart-empty">
//             <h3>Cart Empty</h3>
//           </div>
//         ) : (
//           <>
//             <div className="cart-card-header">
//               <div className="item-count">
//                 <h3>My cart </h3> <span> {cart.length}</span>
//               </div>
//             </div>

//             <div className="cart-bottom">
//               <div className="cart-total">
//                 <p>Order Total:</p>
//                 <p>{formatCurrency(total, "NGN")}</p>
//                 <button onClick={() => setOpenCart(false)}>
//                   <FontAwesomeIcon icon={faChevronUp} />
//                 </button>
//               </div>
//               <div className="cart-checkout">
//                 <button className="btn" onClick={handleCheckout}>
//                   Checkout
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

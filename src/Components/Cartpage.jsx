// import React from "react";
// import { useCart } from "../context/CartContext";
// import "../styles/cartpage.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
// import trash from "../assets/bin.png";
// import Checkout from "./Checkout";
// import { faPager } from "@fortawesome/free-solid-svg-icons/faPager";

// const Cartpage = () => {
//   const { cart, total, increaseQuantity, decreaseQuantity, removeFromCart } =
//     useCart();
//   const totalItems = cart.reduce(
//     (accumulator, currentItem) => accumulator + currentItem.quantity,
//     0
//   );

//   return (
//     <div className="cart-page" id="cart">
//       <div className="cart-header">
//         <div className="itemNo">
//           <h1>Cart</h1>
//           <span>{totalItems} items</span>
//         </div>
//         <div className="line"></div>
//       </div>
//       {cart.map((item) => (
//         <div key="{item.id}" className="cart-item">
//           <div className="cart-container">
//             <img src={item.image} alt={item.title} className="cartImg" />
//             <div className="cart-contents">
//               <div className="title-delete">
//                 <h2>{item.title}</h2>
//                 <button onClick={() => removeFromCart(item.id)}>
//                   <img src={trash} alt="" className="bin" />
//                 </button>
//               </div>

//               <p>{item.desc}</p>

//               <div className="price-quantity-btn">
//                 <h3>{item.price}</h3>

//                 <div className="quantity">
//                   <button onClick={() => decreaseQuantity(item.id)}>
//                     <FontAwesomeIcon icon={faMinus} />
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => increaseQuantity(item.id)}>
//                     <FontAwesomeIcon icon={faPager} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//     <div>
//     <Checkout/>
//     </div>
//     </div>
//   );
// };

// export default Cartpage;
// // <h1>{cart.length > 0 ? cart[0].category : ""}</h1>

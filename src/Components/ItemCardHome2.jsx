import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/itemCard2.css";

const ItemCardHome2 = ({ item }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (cartItems) {
      const isItemInCart = cartItems.some(
        (cartItem) => cartItem.id === item.id
      );
      setIsInCart(isItemInCart);
    }
  }, [cartItems, item.id]);

  const handleToggleCart = () => {
    if (isInCart) {
      removeFromCart(item.id);
    } else {
      addToCart(item, item.id);
    }
    setIsInCart(!isInCart);
  };

  return (
    <div className="card-item__container">
      <div className="cardItem-img">
        <img src={item.image} alt={item.title} className="itemImg" />
      </div>
      <div className="cardItem-desc">
        {item.recomm && <span>Recommended </span>}
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
        <div className="itemcard-price-btn">
          <p>{item.price}</p>
          <button className={`btn ${isInCart ? 'btn2' : ''}`} onClick={handleToggleCart}>
            <FontAwesomeIcon icon={isInCart ? faTimes : faPlus} className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCardHome2;



















// import React, { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
// import "../styles/itemCard2.css";

// const ItemCardHome2 = ({ item }) => {
//   const { addToCart, cartItems } = useCart();
//   const [isInCart, setIsInCart] = useState(false);

//   useEffect(() => {
//     if (cartItems) {
//       const isItemInCart = cartItems.some(
//         (cartItem) => cartItem.id === item.id
//       );
//       setIsInCart(isItemInCart);
//     }
//   }, [cartItems, item.id]);

//   const handleAddToCart = () => {
//     addToCart(item, item.id);
//     setIsInCart(true);
//   };

//   const handleRemoveFromCart = () => {
//     removeFromCart(item.id);
//     setIsInCart(false);
//   };

//   return (
//     <div className="card-item__container">
//       <div className="cardItem-img">
//       <img src={item.image} alt={item.title} className="itemImg" />
//       </div>
//       <div clcassName="cardItem-desc">
//       {item.recomm && <span>Recommended </span>}
//       <h4>{item.title}</h4>
//       <p>{item.desc}</p>
//       <div className="itemcard-price-btn">
//         <p>{item.price}</p>
//         {isInCart ? (
//           <button className="btn btn2" onClick={handleRemoveFromCart}>
//             <FontAwesomeIcon icon={faTimes} className="icon" />
//           </button>
//         ) : (
//           <button className="btn" onClick={handleAddToCart}>
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//           </button>
//         )}
//       </div>
//     </div>
//     </div>


//   );
// };

// export default ItemCardHome2;


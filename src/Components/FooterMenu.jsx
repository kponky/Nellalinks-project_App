import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home-182.png";
import helpOtherIcon from "../assets/info icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

const FooterMenu = () => {
  const { cart } = useCart();

  return (
    <div className="footer-wrapper">
      <div className="footer-links">
        <Link to="/">
          <img src={homeIcon} alt=""  className="footerIcon"/>
          <p>Home</p>
        </Link>
      </div>
      <div className="footer-links">
        <Link to="/cart">
          <div>
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
            <p>Cart</p>
          </div>
        </Link>
      </div>
      <div className="footer-links">
        <Link to="/">
          <img src={helpOtherIcon} alt="" className="footerIcon" />
          <p>Help/Other</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterMenu;

// <button
// onClick={() => setOpenCart(!openCart)}
// className={openCart ? "active-btn" : ""}
// >
// <FontAwesomeIcon icon={faCartShopping} className="icon" />
// {cart.length > 0 && <span className="badge">{cart.length}</span>}
// <p>Cart</p>
// </button>

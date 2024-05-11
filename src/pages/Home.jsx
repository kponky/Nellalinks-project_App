import React, { useState } from "react";
import "../styles/home.css";
import Search from "../Components/Search";
import Tabs from "../Components/Tabs";
import { menuData } from "../data/menuData";
import { FaPlusCircle } from "react-icons/fa";
import plusImg from "../assets/faplus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";

const Home = () => {
  const {addToCart} = useCart()
  const {id} = useParams();
  const item = menuData.find((data) => data.id === id);
  return (
    <div className="home-container">

      <div className="menu">
        <h1>Menu</h1>
      </div>
      <Tabs />
      <Search />
      {/* items list*/}
      <div className="home-content">
        {menuData.map((item, i) => (
          <div key={i} className="contents">
            <div className="home-content_img">
              <img src={item.image} alt={item.title} className="itemImg" />
            </div>
            <div className="home-content-desc">
              {item.recomm && <span>Recommended </span>}
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <div className="price-btn">
                <p>{item.price}</p>
                <button className="btn" onClick={()=> addToCart(item, item.id)}>
                  <FontAwesomeIcon icon={faPlus} className="icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

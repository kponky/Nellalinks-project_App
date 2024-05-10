import React, { useState } from "react";
import "../styles/home.css";
import Search from "../Components/Search";
import Tabs from "../Components/Tabs";
import { menuData } from "../data/menuData";
import { FaPlusCircle } from "react-icons/fa";

const Home = () => {
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

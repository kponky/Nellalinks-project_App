import React, { useState } from "react";
import ItemCard from "../Components/ItemCard";
import Search from "../Components/Search";
import Tabs from "../Components/Tabs";
import { menuData } from "../data/menuData";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  const filteredItems = menuData.filter((item) => {
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleScrollDown = () => {
    const contentElement = document.querySelector(".home-container");
    contentElement.scrollBy({behavior: "smooth" });
  };

  return (
    <div className="home-container">
    <Link  to= '/pattern-1'>
    

      <div className="menu">
        <h1>Menu</h1>
      </div>
      <Tabs categories={categories} setSelectedCategory={setSelectedCategory} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="scroll-btns">
        <button className="btn scrol-btn" onClick={handleScrollDown}>
          <FontAwesomeIcon icon={faChevronUp} />
          {/* Use faChevronDown for scrolling down */}
        </button>
      </div>
      {/* items list*/}

      <div className="home-content">
        {Object.keys(groupedItems).map((category) => (
          <div key={category}>
            <h1>{category}</h1>
            {groupedItems[category].map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
      </Link>
    </div>
  );
};

export default Home;

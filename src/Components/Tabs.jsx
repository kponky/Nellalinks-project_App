import React from "react";
import "../styles/tabs.css"


const Tabs = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className="tabs-container">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`tab ${selectedCategory === category ? "active" : ""}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

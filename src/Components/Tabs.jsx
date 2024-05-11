import React from "react";
import "../styles/tabs.css";

const Tabs = ({categories, setSelectedCategory}) => {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="tabs-container">
      {categories.map((category, index) => (
        <button key={index} onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

import React, { useState } from "react";
import ItemCard from "../Components/ItemCard";
import Search from "../Components/Search";
import Tabs from "../Components/Tabs";
import { menuData } from "../data/menuData";
import "../styles/home.css";

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

  return (
    <div className="home-container">
      <div className="menu">
        <h1>Menu</h1>
      </div>
      <Tabs  categories={categories} setSelectedCategory={setSelectedCategory} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* items list*/}
      <div className="home-content">
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

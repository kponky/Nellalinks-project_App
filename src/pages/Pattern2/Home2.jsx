import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../db.json";
import ItemCard from "../../Components/ItemCard";
import Search from "../../Components/Search";
import pizzaImg from "../../assets/pizza.png";
import "../../styles/pattern-2/home.css";

const Home2 = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  // const {data, loading} = useFetch("https://66500997ec9b4a4a6030791d.mockapi.io/nellalinks-projects-api/items")

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error: {error}</p>

  const burgerItems = data.items.filter((item) => item.category === "Burger");
  const pizzaItems = data.items.filter((item) => item.category === "Pizza");
  const donutItems = data.items.filter((item) => item.category === "Donut");
  const cheeseItems = data.items.filter((item) => item.category === "Cheese");
  const burritoItems = data.items.filter((item) => item.category === "Burrito");

  return (
    <div className="menu2-container">
      <Link to="/pattern-2">
        <div
          className="menu2-img"
          style={{
            backgroundImage: `url(${pizzaImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1>Menu</h1>
        </div>
        <div className="menu2-content">
          <Search />

          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burgers")}>Burgers</h2>
            {openSection === "burgers" && (
              <div className="accordion-content">
                <div className="" style={{ display: "flex", width:"100%", overflowX:"auto", gap:"24px" }}>
                  {burgerItems.map((item) => (
                    <ItemCard
                      key={item?.id}
                      item={item}
                      style={{ width: "800px" }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burritos")}>Burritos</h2>
            {openSection === "burritos" && (
              <div className="accordion-content">
                <div className="" style={{ display: "flex" }}>
                  {burritoItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home2;

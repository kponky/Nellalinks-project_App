import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../db.json";
import ItemCard from "../../Components/ItemCard";
import Search from "../../Components/Search";
import pizzaImg from "../../assets/pizza.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

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
      <Link to="/pattern-2/home-b">
        <div className="menu2-header">
          <h1>Menu</h1>
        </div>

        <div className="menu2-content">
          <Search />

          <div className="scroll-btns">
            <button className="btn scrol-btn">
              <FontAwesomeIcon icon={faChevronUp} />{" "}
            </button>
          </div>

          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burgers")}>Burgers</h2>
            {openSection === "burgers" && (
              <div className="accordion-content">
                <div className="accordaion-card2">
                  {burgerItems.map((item) => (
                    <ItemCard
                      key={item?.id}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="accordion-section">
            <h2 onClick={() => toggleSection("pizzas")}>Pizza</h2>
            {openSection === "pizzas" && (
              <div className="accordion-content">
                <div className="" style={{ display: "flex" }}>
                  {pizzaItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("dougnuts")}>Doughnuts</h2>
            {openSection === "dougnuts" && (
              <div className="accordion-content">
                <div className="" style={{ display: "flex" }}>
                  {donutItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
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
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("cheese")}>Cheese</h2>
            {openSection === "cheese" && (
              <div className="accordion-content">
                <div className="" style={{ display: "flex" }}>
                  {cheeseItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burritos")}>Cake</h2>
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
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burritos")}>Yougnuts</h2>
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
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burritos")}>Sharwarma</h2>
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

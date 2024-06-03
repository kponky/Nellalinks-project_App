import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../db.json";
import ItemCard from "../../Components/ItemCard";
import Search from "../../Components/Search";
import pizzaImg from "../../assets/pizza.png";
import "../../styles/pattern-2/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Home2 = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderChevronIcon = (section) => {
    return openSection === section ? faChevronUp : faChevronDown;
  };
  // const {data, loading} = useFetch("https://66500997ec9b4a4a6030791d.mockapi.io/nellalinks-projects-api/items")

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error: {error}</p>

  const burgerItems = data.items.filter((item) => item.category === "Burger");
  const pizzaItems = data.items.filter((item) => item.category === "Pizza");
  const donutItems = data.items.filter((item) => item.category === "Donut");
  const cheeseItems = data.items.filter((item) => item.category === "Cheese");
  const burritoItems = data.items.filter((item) => item.category === "Burrito");
  const sharwamaItems = data.items.filter((item) => item.category === "Sharwama");

  return (
    <div className="menu2-container">
      <Link to="/pattern-2">
        <div
          className="menu2-img"
          style={{
            backgroundImage: `url(${pizzaImg})`,
          }}
        >
          <h1>Menu</h1>
        </div>
        <div className="menu2-content">
          <Search />

          <div className="scroll-btns">
            <button className="btn scrol-btn">
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          </div>

          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burgers")}>
              Burgers
              <span>
                <FontAwesomeIcon icon={renderChevronIcon("burgers")} />
              </span>
            </h2>
            {openSection === "burgers" && (
              <div className="accordion-content">
                <div className="accordion-card">
                  {burgerItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="accordion-section">
            <h2 onClick={() => toggleSection("pizzas")}>
              Pizza
              <span>
                <FontAwesomeIcon icon={renderChevronIcon("pizzas")} />
              </span>
            </h2>
            {openSection === "pizzas" && (
              <div className="accordion-content">
                <div className="accordion-card">
                  {pizzaItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("dougnuts")}>
              Doughnuts
              <span>
                <FontAwesomeIcon icon={renderChevronIcon("dougnuts")} />
              </span>
            </h2>
            {openSection === "dougnuts" && (
              <div className="accordion-content">
                <div className="accordion-card">
                  {donutItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burritos")}>
              Burritos{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={renderChevronIcon("burritos")} />
              </span>{" "}
            </h2>
            {openSection === "burritos" && (
              <div className="accordion-content">
                <div className="accordion-card">
                  {burritoItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("cheese")}>
              Cheese{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={renderChevronIcon("cheese")} />
              </span>{" "}
            </h2>
            {openSection === "cheese" && (
              <div className="accordion-content">
                <div className="accordion-card">
                  {cheeseItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burritos")}>
              Cake
              <span>
                
                <FontAwesomeIcon icon={renderChevronIcon("burritos")} />
              </span>
            </h2>
            {openSection === "burritos" && (
              <div className="accordion-content">
                <div className="accordion-card">
                  {burritoItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="accordion-section">
            <h2 onClick={() => toggleSection("sharwama")}>
            Sharwama
              <span>
                
                <FontAwesomeIcon icon={renderChevronIcon("sharwama")} />
              </span>
            </h2>
            {openSection === "sharwama" && (
              <div className="accordion-content">
                <div className="accordion-card">
                  {sharwamaItems.map((item) => (
                    <ItemCard key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
         

          <div className="accordion-section">
            <h2 onClick={() => toggleSection("cheese")}>
              Youghuts
              <span>
                <FontAwesomeIcon icon={renderChevronIcon("cheese")} />
              </span>
            </h2>
            {openSection === "burritos" && (
              <div className="accordion-content">
                <div className="accordion-card">
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

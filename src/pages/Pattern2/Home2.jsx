import React, { useState } from "react";
import { Link } from "react-router-dom";
// import data from "../../../db.json";
import ItemCard from "../../Components/ItemCard";
import Search from "../../Components/Search";
import pizzaImg from "../../assets/pizza.png";
import "../../styles/pattern-2/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ItemCard2 from "../../Components/ItemCard2";
import useFetch from "../../utils/useFetch";

const Home2 = () => {
  const { data, loading, error } = useFetch();
  const [openSection, setOpenSection] = useState(null);

  const items = data;
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  console.log("items>>>", items)

  const renderChevronIcon = (section) => {
    return openSection === section ? faChevronUp : faChevronDown;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const burgerItems = items.filter((item) => item.category === "Burger");
  const pizzaItems = items.filter((item) => item.category === "Pizza");
  const donutItems = items.filter((item) => item.category === "Donut");
  const cheeseItems = items.filter((item) => item.category === "Cheese");
  const burritoItems = items.filter((item) => item.category === "Burrito");
  const sharwamaItems = items.filter(
    (item) => item.category === "Sharwama"
  );

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

          {/*<div className="scroll-btns">
            <button className="btn scrol-btn">
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
        </div>*/}

          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burgers")}>
              Burger
              <span>
                <FontAwesomeIcon icon={renderChevronIcon("burgers")} />
              </span>
            </h2>
            {openSection === "burgers" && (
              <div className="accordion-content">
                <div className="accordion-card-row">
                  {burgerItems.map((item) => (
                    <ItemCard2 key={item?.id} item={item} />
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

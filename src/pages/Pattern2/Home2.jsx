import React from "react";
import pizzaImg from "../../assets/pizza.png";
import Search from "../../Components/Search";
import "../../styles/pattern-2/home.css";
import { Link } from "react-router-dom";
import Burgercard from "../../Components/Burgercard";
import PizzaCard from "../../Components/PizzaCard";
import DonutCard from "../../Components/DonutCard";
import BurritoCard from "../../Components/BurritoCard";
import CheeseCard from "../../Components/CheeseCard";
import ItemCard from "../../Components/ItemCard";
import { menuData2 } from "../../data/menuData2";
import useFetch from "../../../useFetch";

const Home2 = () => {
  const {data, loading, error} = useFetch("https://66500997ec9b4a4a6030791d.mockapi.io/nellalinks-projects-api/")

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
    
  
  const burgerItems = data.filter((items) => items.category === "Burger");
  const pizzaItems = data.filter((items) => items.category === "Pizza");
  const donutItems = data.filter((items) => items.category === "Donut");
  const cheeseItems = data.filter((items) => items.category === "Cheese");
  const burritoItems = data.filter((items) => items.category === "Burrito");

  return (
    <div className="menu2-container">
      <Link to="/pattern-2">
        <div className="menu2-img">
          <img src={pizzaImg} alt="" />
        </div>
        <div className="menu2-heading">
          <h1>Menu</h1>
        </div>
        <div className="menu2-content">
          <Search />
          <Burgercard menuItems={burgerItems} />
          <PizzaCard menuItems={pizzaItems} />
          <DonutCard menuItems={donutItems} />
          <BurritoCard menuItems={burritoItems} />
          <CheeseCard menuItems={cheeseItems} />
        </div>
      </Link>
    </div>
  );
};

export default Home2;

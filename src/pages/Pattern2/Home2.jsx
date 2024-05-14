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

const Home2 = () => {
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
          <Burgercard />
          <PizzaCard />
          <DonutCard />
          <BurritoCard />
          <CheeseCard/>
        </div>
      </Link>
    </div>
  );
};

export default Home2;

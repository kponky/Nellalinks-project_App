import React, { useState } from "react";
import { Link } from "react-router-dom";
// import UploadComponent from "./UploadComponent.jsx"; // Update the import statement to .jsx
import data from "../../../db.json";
import Search from "../../Components/Search";
import pizzaImg from "../../assets/pizza.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import UploadComponent from "../../Components/UploadComponent";
import useFetch from "../../utils/useFetch";

const Home2B = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const { data, loading } = useFetch("https://66500997ec9b4a4a6030791d.mockapi.io/nellalinks-projects-api/items");

  if (loading) return <p>Loading...</p>;

  return (
    <div className="menu2-container">
      <Link to="/pattern-2/home-b">
        <div className="menu2-header">
          <h1>Menu</h1>
        </div>

        <div className="menu2-content">
          <Search />

          <UploadComponent/> {/* Add the upload component here */}

          <div className="accordion-section">
            <h2 onClick={() => toggleSection("burgers")}>Burgers</h2>
            {openSection === "burgers" && (
              <div className="accordion-content">
                <div className="accordion-card2">
                  {data.filter((item) => item.category === "Burger").map((item) => (
                    <ItemCard3 key={item?.id} item={item} />
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
                  {data.filter((item) => item.category === "Pizza").map((item) => (
                    <ItemCard3 key={item?.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Repeat similar sections for other categories */}
          
        </div>
      </Link>
    </div>
  );
};

export default Home2B;

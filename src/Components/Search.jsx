import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/search.css";

const Search = () => {

  return (
    <div className="search-wrapper">
      <div className="input-control">
        <input type="text" placeholder="Search"/>
        <FontAwesomeIcon icon={faSearch} className="icon" />
      </div>
    </div>
  );
};

export default Search;

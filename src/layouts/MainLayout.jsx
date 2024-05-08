import React from "react";
import Header from "../Components/Header";
import FooterMenu from "../Components/FooterMenu";
import { Outlet } from "react-router-dom";
import '../styles/main.css'

const MainLayout = () => {
  return (
    <div className="main-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterMenu />
    </div>
  );
};

export default MainLayout;

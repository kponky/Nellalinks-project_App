import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import HelpOther from "./pages/HelpOther";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path = '/help-other' element={<HelpOther/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

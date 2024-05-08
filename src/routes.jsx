import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import HelpOther from "./pages/HelpOther";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path = '/help-other' element={<HelpOther/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

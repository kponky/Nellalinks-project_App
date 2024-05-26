import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pattern1Layout from "./layouts/Pattern1Layout";
import Pattern2Layout from "./layouts/Pattern2Layout";
import Home2 from "./pages/Pattern2/Home2";
import Cart from "./pages/Cart";
import HelpOther from "./pages/HelpOther";
import Home from "./pages/Home";
import CartPage2 from "./pages/Pattern2/CartPage2";
import HelpOther2 from "./pages/Pattern2/HelpOther2";
import HomeB from "./pages/home/HomeB";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pattern1Layout />}>
          <Route path="/pattern-1" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help-other" element={<HelpOther />} />
        </Route>
        <Route path="/pattern-2" element={<Pattern2Layout />}>
          <Route index element={<Home2 />} />
          <Route path="home-B" element={<HomeB/>}></Route>
          <Route path="cart-page" element={<CartPage2 />}></Route>
          <Route path="help-other2" element={<HelpOther2 />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

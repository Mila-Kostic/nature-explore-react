import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Shop from "./Shop";
import Contact from "./Contact";

function Navbar() {
  return (
    <nav className="navbar">
      <Home />
      <About />
      <Products />
      <Shop />
      <Contact />
    </nav>
  );
}

export default Navbar;

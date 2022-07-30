import React from "react";
import Home from "./Home";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="main-links-nav">
        <a
          aria-current="page"
          className="nav-link active"
          href="https://en.wikipedia.org/wiki/Nature"
        >
          Home
        </a>
        <a aria-current="page" className="nav-link active" href="/">
          About
        </a>
        <a aria-current="page" className="nav-link active" href="/">
          Products
        </a>
        <a aria-current="page" className="nav-link active" href="/">
          Shop
        </a>
        <a aria-current="page" className="nav-link active" href="/">
          Contact
        </a>
      </div>
      <Home />
    </nav>
  );
}

export default Navbar;

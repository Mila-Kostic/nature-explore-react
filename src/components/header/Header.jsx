import React from "react";
import Logo from "./Logo";
import Navbar from "./navbar/Navbar";

function Header() {
  return (
    <div className="header-container">
      {/* <h1>Picture from header</h1> */}
      <div className="header-content">
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}

export default Header;

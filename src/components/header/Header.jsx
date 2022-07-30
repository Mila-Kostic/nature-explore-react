import React from "react";
import Logo from "./Logo";
import Navbar from "./navbar/Navbar";

function Header() {
  return (
    <div className="header-container">
      {/* <h1>Picture from header</h1> */}
      <div className="img-container">yyy</div>
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;

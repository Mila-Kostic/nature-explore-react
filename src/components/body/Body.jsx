import React from "react";
import Welcome from "./welcome/Welcome";
import Works from "./works/Works";

function Body() {
  return (
    <div className="body-container">
      <Welcome />
      <Works />
    </div>
  );
}

export default Body;

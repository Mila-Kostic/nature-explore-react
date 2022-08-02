import React from "react";
import Welcome from "./welcome/Welcome";
import Works from "./works/Works";

function Body() {
  return (
    <div className="body">
      <Welcome />
      <div className="body-container">
      <Works />
      </div>
    </div>
  );
}

export default Body;

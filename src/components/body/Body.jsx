import React from "react";
import Welcome from "./welcome/Welcome";
import Works from "./works/Works";
import Projects from "./projects/Projects";

function Body() {
  return (
    <div className="body">
      <Welcome />
      <div className="body-container">
        <Works />
        <Projects />
      </div>
    </div>
  );
}

export default Body;

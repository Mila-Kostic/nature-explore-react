import React from "react";
import Project_1 from "./Project_1";
import Project_2 from "./Project_2";
import Project_3 from "./Project_3";
import Project_4 from "./Project_4";

function Projects() {
  return (
    <div className="projects">
      <div className="u-padding-large">
        <h2>My projects </h2>
      </div>
      <div className="projects-container">
        {/* <div className="project-img."></div> */}
        <Project_1 />
        <Project_2 />
        <Project_3 />
        <Project_4 />
      </div>
    </div>
  );
}

export default Projects;

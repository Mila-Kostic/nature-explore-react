import React from "react";
import Works_1 from "./Works_1";
import Works_2 from "./Works_2";
import Works_3 from "./Works_3";

function Works() {
  return (
    <div>
      <div className="u-padding-large">
        <h2>What can I do for you</h2>
      </div>
      <div className="works-container">
        <Works_1 />
        <Works_2 />
        <Works_3 />
      </div>
    </div>
  );
}

export default Works;

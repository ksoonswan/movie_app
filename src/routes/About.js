import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about_container">
      <span>"나를 죽이지 못하는 고통은 나를 더 강하게 만든다."</span>
      <span>- Soonswan</span>
    </div>
  );
}

export default About;

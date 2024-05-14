import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
                I'm a FullStack developer. I love to solve
                problems, develop new features. My work is mainly focused on
                backend-development and some of frontend-developement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

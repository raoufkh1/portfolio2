import React from "react";
import "./Jsprojects.css";
import ProjectData from "../Data/Jsprojects.json";
import githubImg from "../assets/img/github.png";
import pf1 from "../assets/img/project1.png";
import pf2 from "../assets/img/project2.png";
import pf3 from "../assets/img/project3.png";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Projects</h2>
            <br />
            <div className="row">

                <div className="col-sm-6" style={{border: "2px solid "}}>
                  <img src={pf1} style={{width: "450px", marginBottom:"12px",marginTop:"12px"}}/>
                  <br />
                  <a
                    href={"https://github.com/raoufkh1/Gaming"}
                    className="btn btn-default github"
                    style={{marginRight: "15px"}}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt={"i"} />
                  </a>
                  <a
                    href={"https://gaming-mu-seven.vercel.app/"}
                    className="btn btn-default github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Preview <img src={githubImg} alt={"i"} />
                  </a>
                </div>

            </div>
            <br />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;

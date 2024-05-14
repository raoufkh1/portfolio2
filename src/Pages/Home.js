import React from "react";
import "./Home.css";
import profileimg from "../assets/img/profileimg.png";
import Pdf from "../assets/pdf/poojagarva.pdf";
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Instagramicon from "../assets/img/socialicons/instagram.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={profileimg}
                data-aos="flip-right"
                style={{filter: "grayscale(100%)"}}
                alt="Pooja Garva"
                className="img-fluid"
              />
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/raouf-kh-6b8603263/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                  />
                </a>
                <a
                  href="https://github.com/raoufkh1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Instagramicon}
                    alt="instagram"
                  />
                </a>
                <a
                  href="mailto:raoufg716@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                  />
                </a>
              </div>
              <div className="bgblack" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Raouf Dev</h1>
              <h2>FullStack Developer</h2>
              <br />
              <div className="row">
                
                <div className="col-sm-5 col-6">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

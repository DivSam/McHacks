import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <body>
        <div className="nav-bar">
          <ul>
            <Link to="about" className="nav-links">
              About Us{" "}
            </Link>
            <Link to="mchacks" className="nav-links">
              McHacks{" "}
            </Link>
          </ul>
        </div>
        <div className="TitlePage"></div>
        <div className="modes">
          <ul>
            <Link to="prompt" className="nav-links">
              Game1{" "}
            </Link>
            <Link to="cards" className="nav-links">
              Create Quizlets{" "}
            </Link>
          </ul>
        </div>
        <div className="bottom">
          <ul>
            <a href="" className="nav-links">
              Here wit the gang
            </a>
          </ul>
        </div>
      </body>
    );
  }
}

export default Home;

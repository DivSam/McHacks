import React, { Component } from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import Navbar from "../home-page/Navbar";
export default class AboutUs extends Component {
  render() {
    return (
      <body>
        <div className="nav-bar">
          <Navbar/>
        </div>
        <div className="BigBody">
          <div className="flex-container">
            <div className="peeps">
              <h4>Brandon Fook Chong</h4>
              <h6 className="role">U2 McGill CS and Stats</h6>
              <p className="fancyShit">
                Currently interning at Desjardins, Brandon has been a Kumon tutor for as long as we have known him and loves to share his knowledge with others. 
              </p>
            </div>
            <div className="peeps">
              <h4>Johan</h4>
              <h6 className="role">U2 McGill CS and Stats</h6>
              <p>
                Currently interning at plotly, Johan is our resident Python expert and data scientist. He loves using his skills to solve interesting problems.
              </p>
            </div>
            <div className="peeps">
              <h4>Thomas Jiralerspong</h4>
              <h6 className="role">U2 McGill CS W/ Math Minor</h6>
              <p>
                Currently a full time student, Thomas is interested in machine learning and game development.
              </p>
            </div>
            <div className="peeps">
              <h4>Sam Mojaverian</h4>
              <h6 className="role">U2 ConU CS</h6>
              <p>
                Currently interning at Morgan Stanley, Sam is interested in FinTech and NLP.
              </p>
            </div>
          </div>
        </div>

      </body>
    );
  }
}

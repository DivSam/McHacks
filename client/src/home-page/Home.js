import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
class Home extends Component {
  state = {};
  render() {
    return (
      <body>
        <div className="nav-bar">
          <Navbar/>
        </div>
        <div className="TitlePage">
          <p className="Descrip">
            For McHacks9, our team decided to build a comfy react/nodejs web app
            designed for some fun studying or party games. We were mostly
            inspired by websites like typeracer and quizlet!
            <br></br>
            Instructions:
            <br />
            Step 1: Create/Import some prompts and answers
            <br />
            Step 2: Try to answer the prompts as fast as possible before the
            words fall on your head!
          </p>
        </div>

      </body>
    );
  }
}

export default Home;

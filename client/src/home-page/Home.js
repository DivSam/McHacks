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
            For McHacks9, our team decided to build a comfy React web app
            so you can study while also having fun! We were inspired by all the times that we were supposed to study but ended up playing TypeRacer instead. Now, we can do both at the same time!
            <br></br>
            <br></br>
            Instructions:
            <br />
            Step 1: Create/Import some prompts and answers
            <br />
            Step 2: Try to answer the prompts as fast as possible before the
            words fall below your browser.
          </p>
        </div>

      </body>
    );
  }
}

export default Home;

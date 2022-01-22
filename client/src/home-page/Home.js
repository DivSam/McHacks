import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css"

class Home extends Component {
  state = {};
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Title">THE TYPING GAME</h1>
        <ul>
          <Link to="about">About</Link>
          <Link to="prompt">Game1</Link>
        </ul>
      </nav>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavigationBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavigationBar extends Component {
  state = { clicked: false };

  handleClck = () => {
    window.open("../hidden.js");
  };

  render() {
    return (
      <Router>
        <nav className="NavbarItems">
          <h1 className="Title">THE TYPING GAME</h1>
          <ul>
            <Link to="/hidden">hidden</Link>
          </ul>
        </nav>
      </Router>
    );
  }
}

export default NavigationBar;
function hidden() {
  return <h2>Home</h2>;
}

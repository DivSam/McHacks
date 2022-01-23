import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
        <div>
        <div className="our-title">
              StuType
          </div>
      <div className="nav-bar">
          
        <ul>
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About Us</Link>
          <Link to="/cards" className="link">Play Game</Link>
        </ul>
      </div>
      </div>
    );
  }
}

export default Navbar;
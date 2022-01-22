import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavigationBar.css";


class NavigationBar extends Component {
  state = { clicked: false };

  handleClck = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Title">THE TYPING GAME</h1>
        
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="item.url">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}



export default NavigationBar;

import React, { Component } from "react";
import "./AboutUs.css";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="BigBody">
        <div className="flex-container">
          <div className="peeps">
            <h4>Brandon Fook Chong</h4>
            <h6 className="role">McGill CS and Stats</h6>
            <p className="fancyShit">
              Brandon is a real gee no cap, goat brimstone player. Currently has
              big boi gpa and interning as Project Control Engineer at
              Desjardins
            </p>
          </div>
          <div className="peeps">
            <h4>Johan</h4>
            <h6 className="role">McGill CS and Stats</h6>
            <p>
              Johan "Joho the Goat" Song is a high elo tft player. When he feels
              like gracing us with his presence, he is a "Python or bust" typa
              developer. He is Currently interning at Dash Plotly!
            </p>
          </div>
          <div className="peeps">
            <h4>Thomas Jiralerspong</h4>
            <h6 className="role">McGill CS W/ Math Minor</h6>
            <p>
              Thomas is a certified gifted child. Incoming intern at Amazon.
              Pretty smart guy no cap.
            </p>
          </div>
          <div className="peeps">
            <h4>Sam Mojaverian</h4>
            <h6 className="role">ConU CS</h6>
            <p>
              The Conco Pleb of the squad, pretty dumb ngl but thats conco for
              you, can't help it. Currently interning at Morgan Stanley as a
              Technology Analyst
            </p>
          </div>
        </div>
      </div>
    );
  }
}

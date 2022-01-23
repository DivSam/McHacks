import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../home-page/Navbar';
export default class WinScreen extends React.Component {
    constructor(props) {
      super(props);
      this.clickHandler = this.clickHandler.bind(this);
        }

    clickHandler()
    {
        this.props.setWon();
        this.props.reset();
    }
    render() {
      return (
          <div className='main-body'>
              <div>
            <Navbar/>
            </div>
              <h1>CONGRATULATIONS! YOU WON IN {this.props.time}S</h1>
        <div><button className="button-45" onClick = {this.clickHandler}>Play Again With Same Cards</button></div>
        </div>
        
      );
    }
  }
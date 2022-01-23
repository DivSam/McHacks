import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
export default class WinScreen extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
          <div>
        <div><Link to="/cards" className='back-to-cards'>Play again</Link></div>
        <div><Link to="/" className='back-to-home'>Home</Link></div>
        </div>
        
      );
    }
  }
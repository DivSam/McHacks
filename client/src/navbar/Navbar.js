import React, { Component, createContext } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div><Link to="/" className='back-to-home'>Home</Link></div>
        
        
      );
    }
  }
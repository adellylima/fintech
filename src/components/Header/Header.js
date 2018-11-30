
import React, { Component } from 'react';
// style 
import { Link } from 'react-router-dom';
import "./Header.css";

// Icons
import fintech from './icons/fintech.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"}>
            <img src={fintech} alt="logo" />
          </Link>
          <h2>Fintech</h2>
        </nav> <br />
      </div>

    );
  }
}

export default Header;

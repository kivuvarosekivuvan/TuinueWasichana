import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="nav">
      <div className="link">
        <div className="enlight">CHARITY</div>
      </div>
      <Link to="/signup">
        <button className="welcome-button">Register</button>
      </Link>
      <button className='list-item-link-home'>
        <Link to="/">Home</Link>
      </button>
      <button className='list-item-link-about'>
        <Link to="/about">About Us</Link>
      </button>
      <button className='list-item-link'>
        <Link to="/charities">Charities</Link>
      </button>
      <div className={`list-item-link dropdown ${showDropdown ? 'active' : ''}`}>
        <span onClick={toggleDropdown}>Pages</span>
        <div className="dropdown-content">
          <Link to="/signup">Sign in</Link>
          <Link to="/donate">Donate</Link>
        </div>
      </div>
      <div className="div-wrapper">
        <Link to="/donate" className="text-wrapper">Donate</Link>
      </div>
    </div>
  );
};

export default Navbar;

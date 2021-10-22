import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import logo from './logo.svg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img 
          className='header__icon'
          src={logo}
          alt="logo"
        /> 
        <h1>ÝYLDYZ <br></br>HOTEL</h1>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

      <ul className='midd'>
        <li>
          <p>   Booking: <br></br>
          +993 12 39-09-00</p>
        </li>
      </ul>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/rooms'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Rooms     
          </Link>
        </li>
        <li
          className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to='/services'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Services   <i className='fas fa-caret-down' />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className='nav-item'>
          <Link
            to='/gallery'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/news'   
            className='nav-links'
            onClick={closeMobileMenu}
          >
            News
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Contacts
          </Link>
        </li>
        <li>
          <Link
            to='/book-now'
            className='nav-links-mobile'
            onClick={closeMobileMenu}
          >
            Book now
          </Link>
        </li>
      </ul>
      <Button />          
    </div>
  );
}

export default Navbar;

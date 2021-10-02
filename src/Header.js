import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Toggle from "./Toggle";
import Drop from "./Drop"


function Header() {
  const [selected, setSelected] = useState("Services");
  return (
    <div className="header">
      <Link to='/'>
        <img 
          className='header__icon'
          src={logo}
          alt="logo"
        />        
      </Link>  

      <div className='header_left'>          
        <h1>ÝYLDYZ <br></br>HOTEL</h1>
      </div>     

      <div className='header_midd'>
        <p>   Booking: <br></br>
          +993 12 39-09-00</p>
      </div>

      <div className='header_right'>        
        <ul>
          <li>About Us</li>
          <li><a href="#">Rooms</a></li>

          <li>
            <Drop selected={selected} setSelected={setSelected}/>
          </li>
          
          <li>Gallery</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
        <Button variant='outlined'>Book now</Button>
        <ul>
          <li><a href="#">Eng<ArrowDropDownIcon /></a></li>
        </ul>
        {/* <Toggle /> */}
      </div>

      
      
    </div>
  )
}

export default Header

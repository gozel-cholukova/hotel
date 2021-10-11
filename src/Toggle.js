import React, {useState} from 'react';
import './Toggle.css';
import {Switch} from 'antd';

const Toggle = () => {

  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <div className="toggle">
      <Switch onClick={toggler}/>
      {toggle ? <span> рус</span> : <span> eng</span>}
    </div> 
  )
  
}

export default Toggle;
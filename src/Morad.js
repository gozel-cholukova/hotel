import React from 'react';
import './Morad.css';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import WifiIcon from '@material-ui/icons/Wifi';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SecurityIcon from '@material-ui/icons/Security';
import HotelIcon from '@material-ui/icons/Hotel';
import PoolIcon from '@material-ui/icons/Pool';
import SpaIcon from '@material-ui/icons/Spa';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import LocalBarIcon from '@material-ui/icons/LocalBar';

function Morad() {
  return (
    <div className="morad">
      <h1 style={{display: "flex", justifyContent: "center"}}>Our Advantages</h1>
      <h3 style={{display: "flex", justifyContent: "center"}}>Everything is here right where you need it</h3>
      
      <div className="upper" style={{display: "flex", justifyContent: "center"}}>
        <div className="icons" style={{width: "60%"}}>
          <div className="icon1">
            <HotelIcon className="emoji0" fontSize='large'/>
            <h3>First Class Rooms</h3>
          </div>

          <div className="icon2">
            <LocalBarIcon className="emoji1" fontSize='large'/>
            <h3>Bar</h3>
          </div>

          <div className="icon3">
            <RestaurantIcon className="emoji2" fontSize='large'/>
            <h3>Delicous Food</h3>
          </div>

          <div className="icon4">
            <FreeBreakfastIcon className="emoji3" fontSize='large'/>
            <h3>Restaurant</h3>
          </div> 

          <div className="icon5">
            <RoomServiceIcon className="emoji4" fontSize='large'/>
            <h3>Room Services</h3>
          </div> 

        </div>
      </div>

      <div className="lower" style={{display: "flex", justifyContent: "center"}}>
        <div className="icons" style={{width: "60%"}}>
          <div className="icon6">
            <SpaIcon className="emoji5" fontSize='large'/>
            <h3>SPA Center</h3>
          </div>

          <div className="icon7">
            <PoolIcon className="emoji6" fontSize='large' style={{ alignItems: "center"}}/>
            <h3>Swimming Pools</h3>
          </div>

          <div className="icon8">
            <WifiIcon className="emoji7" fontSize='large'/>
            <h3>Free Wifi</h3>
          </div>

          <div className="icon9">
            <DriveEtaIcon className="emoji8" fontSize='large'/>
            <h3>Pickup</h3>
          </div>

          <div className="icon10">
            <SecurityIcon className="emoji9" fontSize='large'/>
            <h3>Security Services</h3>            
          </div>   
          
        </div>
      </div>
      
    </div>
  );
};

export default Morad;

import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';

function Banner() {
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>WELCOME TO ÝYLDYZ HOTEL</h1>        
      </div>

      <div className="midd">
        <h3>――――――   Luxury Hotel with Panoramic View   ―――――――</h3>
        {/* <h3>Ýyldyz hotel – one of the best hotels in Turkmenistan. Located in the foothills of the Kopetdag <br></br>mountains, its apartments offer the best panorama of the city of Ashgabat.</h3> */}
      </div>
      

      <div className="button">
        <Button onClick={() => history.push('/search')}
        variant='outlined'
        color='disabled'>Explore now </Button>
      </div>
    </div>
  )
}

export default Banner;

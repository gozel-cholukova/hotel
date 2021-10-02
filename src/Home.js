import React from 'react';
import './Home.css';
import Banner from './Banner';
// import Gallery from './Gallery';
import Card from './Card';
import gallery3 from './lobby/gallery3.jpg';
import gallery4 from './lobby/gallery4.jpg';
import gallery6 from './lobby/gallery6.jpg';
import gallery7 from './lobby/gallery7.jpg';


function Home() {
  return (
    <div className="home">
      <Banner />

      <h1 style={{display: "flex", justifyContent: "center"}}>About Us</h1>
      <div className="home__section">
        <div className="homeleft">
          <p>Yyldyz hotel – one of the best hotels in Turkmenistan. Located in the foothills of the Kopetdag mountains, its apartments offer the best panorama of the city of Ashgabat. In Turkmen, "Ýyldyz" translates as "Star", which is visible practically from any part of Ashgabat.<br></br>
             For every visitor of the Ýyldyz hotel, we offer a warm welcome, comfortable and cozy apartments, quality service, as well as a full range of opportunities for work and leisure. In our hotel you will find restaurants with tasty food, conference hall and banquet hall for business and informal events. Each visitor of our hotel can use the services of the SPA center, fitness room and pools.<br></br>
             Our main values are oriental hospitality and responsibility to every visitor to our hotel.<br></br>
             Our main goal is to do everything possible so that every guest of our hotel could feel caring and respect.</p>
        </div>

        {/* <Gallery /> */}
        <div className="homeright">
          <div className="one">
            <Card
              src={gallery3}       
            />
            <Card 
              src={gallery4}        
            />
          </div>

          <div className="two">
            <Card 
              src={gallery6}          
            />
            <Card 
              src={gallery7}           
            />
          </div>      
        </div>
      </div>

    </div>
  )
}

export default Home;

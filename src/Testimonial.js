import React from 'react';
import './Testimonial.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white", fontSize: "40px"}} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white", fontSize: "40px"}} />
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="testi">
      <h1 style={{display: "flex", justifyContent: "center"}}>Testimonials</h1>   

      <div className="testimonial" style={{display: "flex", justifyContent: "center"}}>
        <div className="testimo__section" style={{width: "70%"}}>
          <Slider
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
          >
            <Kart1 />
            <Kart2 />
            <Kart3 />
            <Kart4 />
            <Kart5 />
          </Slider> 
        </div>    
      </div>
    </div>
  );
};

const Kart1 = () => {
  return (
    <div className="kart" style={{display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center"}}>
      <AccountCircleIcon className="avatar" style={{width: 70, height: 70, padding: 7, color: "gray"}}/>

      <p>Amazing Hotel! 
        I recently spent a couple of days at this hotel on a short visit to Ashgabat. The hotel is very beautiful,amazing spa,restaurant on the top floor with a nice city view. Standart room was larger,comfortable,beautifully decorated and clean.The staff were very helpful and always willing to offer advice and help with information etc. I liked this hotel. </p>

      <p style={{fontStyle: "Italic"}}><span style={{fontWeight: 500, color: "black"}}>ADDLER K,</span> Germany</p>
    </div>
    )
  }

const Kart2 = () => {
  return (
    <div className="kart" style={{display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center"}}>
      <AccountCircleIcon className="avatar" style={{width: 70, height: 70, padding: 7, color: "gray"}}/>

      <p>Пожалуй,лучший отель в Ашхабаде.
        Без преувеличения - шедевр современной архитектуры Туркменистана. В нём действительно стоит остановиться. Номера очень просторны и удобны, прекраснейший вид из окон. Персонал улыбается , дружелюбны и гостеприимны. Пожалуй один из лучших отелей за свою цены, где я когда либо останавливался.</p>

      <p style={{fontStyle: "Italic"}}><span style={{fontWeight: 500, color: "black"}}>ELVIS,</span> Москва (Russian Federation)</p>
    </div>
  )
}

const Kart3 = () => {
  return (
    <div className="kart" style={{display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center"}}>
      <AccountCircleIcon className="avatar" style={{width: 70, height: 70, padding: 7, color: "gray"}}/>

      <p>Расслабляющая музыка, приглушенный свет, благоухание масел.И, конечно же сам–массаж!Комфортно и профессионально, с использованием горячих компрессов и других секретов для полного расслабления! Каждая из процедур обладает выраженным эстетическим и косметологическим эффектом,а также несет в себе физическое оздоровление и моральное расслабление.Процедуры проводятся на высококлассном уровне!Вокруг витает аромат кремов-цветов-свечей и чего-то необыкновенного. Cпасибо!</p>

      <p style={{fontStyle: "Italic"}}><span style={{fontWeight: 500, color: "black"}}>Юлия,</span> Ashgabat (Turkmenistan)</p>
    </div>
  )
}
   
const Kart4 = () => {
  return (
    <div className="kart" style={{display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center"}}>
      <AccountCircleIcon className="avatar" style={{width: 70, height: 70, padding: 7, color: "gray"}}/>

      <p>Лучшее качество за умеренную плату. Идеальное обслуживание,изумительные номера,изысканная кухня , уникальный оздоровительный центр -это те слова которые я слышу от своих гостей ,которых мне посчастливилось разместить в этом отеле. Думаю что такая масса людей не может ошибаться относительно качества предоставляемых услуг . Спасибо Вам огромное !</p>

      <p style={{fontStyle: "Italic"}}><span style={{fontWeight: 500, color: "black"}}>Соколов Виктор,</span> Turkmenistan</p>
    </div>
  )
}

const Kart5 = () => {
  return (
    <div className="kart" style={{display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center"}}>
      <AccountCircleIcon className="avatar" style={{width: 70, height: 70, padding: 7, color: "gray"}}/>

      <p>Mне понравилось! Oтель просто супер, особенно спа центр. Спасибо за качественный сервиз. </p>

      <p style={{fontStyle: "Italic"}}><span style={{fontWeight: 500, color: "black"}}>Mekan Yoldashov,</span> Ashgabat (Turkmenistan)</p>
    </div>
  )
}


export default Testimonial;
import React, {Component}from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  gamja from './images/gamja.jpg';
import  gamja_02 from './images/gamja_02.jpg';
import  gamja_22 from './images/gamja_22.jpg';
import  gamja_31 from './images/gamja_31.jpg';
import  gamja_32_second from './images/gamja_32_second.jpg';
import  gamja_35 from './images/gamja_35.jpg';
import  gamja_33 from './images/gamja_33.jpg';





const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;
const Gam_photo = () => {
 
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
   
 
  };

  return (

      <div className="content">
       
        <StyledSlider {...settings}>
          
          <div className="image1">
            <div className="content_text">
            <h1>Welcome to 감자's world</h1>
            </div>
            <img src={gamja_32_second}/>
          </div>

          <div className="image2">
          <div className="content_text">
          <h1>Welcome to 감자's world</h1>
          </div>
          <img src={gamja_02}/>
            
          </div>

          <div className="image3">
          <div className="content_text">
          <h1>Welcome to 감자's world</h1>
          </div>
          <img src={gamja}/>
          </div>
          
          
        
        </StyledSlider>
       
       
    </div>
  );
};

export default Gam_photo;
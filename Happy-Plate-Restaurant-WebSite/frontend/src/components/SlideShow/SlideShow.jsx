import React from 'react';
import { Slide } from 'react-slideshow-image';
import { slideShowImg } from '../../assets/assets'; 
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';

const SlideShow = () => {
  return (
    <div className="slideContainer">

   
  
      <Slide duration={400} transitionDuration={400} indicators={false} arrows={false}>
        {slideShowImg.map((image, index) => (
          <div key={index} className="slides">
            <div className="image-container" style={{ backgroundImage: `url(${image})` }}>
          
              
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;

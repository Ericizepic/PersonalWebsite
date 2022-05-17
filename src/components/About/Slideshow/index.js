import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './index.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import slide1 from '../../../assets/rpg_gif1.gif';
import slide2 from '../../../assets/modelinfo.PNG';
import slide3 from '../../../assets/discordfs.PNG';

const Slideshow = () => {
  const mystyle1 = {
    backgroundImage: `url(${slide1})`,
    backgroundPosition: '50% 50%'
  };
  const mystyle2 = {
    backgroundImage: `url(${slide2})`,
    backgroundPosition: '50% 50%'
  };
  const mystyle3 = {
    backgroundImage: `url(${slide3})`,
    backgroundPosition: '50% 50%'
  };
  
    return (
      <div>
        <Carousel>
          <div className="each-slide">
          
            <div style={mystyle1}>
              <span>2-D dungeon crawler developed in Java Swing</span>
            </div>
          </div>
          <div className="each-slide">
          <div style={mystyle2}>
              <span>Sequential machine-learning model made with TensorFlow and Keras to predict the outcome of games based solely on the final box-score stats of the home team. Current iteration has 54% accuracy.</span>
            </div>
          </div>
          <div className="each-slide">
          <div style={mystyle3}>
              <span>Haystackfs (previously known as discordfs) is a discord file searching bot that seeks to improve on discord's search capabilities.</span>
            </div>
          </div>
        </Carousel>
      </div>
    )
};

export default Slideshow;
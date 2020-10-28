import React from 'react'
import { Fade } from 'react-slideshow-image';
import './styles/banner.scss';
import winepic from '../../assets/images/winepic.png';
import wine from '../../assets/images/wine.png';
import groceries from '../../assets/images/groceries.png';
import Family from '../../assets/images/Family.png';
import CleaningAgent from '../../assets/images/CleaningAgent.png';
// import {history} from '../../store/index'

  const fadeImages = [
    winepic,
    Family,
    groceries,
    CleaningAgent
  ];
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true
  }
const Banner = () => {
    return (
        <>
          <div className="slide-container" id='mySlider'>
            <Fade {...properties}>
           
              <div className="each-fadeone">
                    <img className='topleft' src={fadeImages[1]} alt="Snow" />
                    <h2 className='center' >Stay Home, Proctect your Self!</h2>
                    <img className='topright' src={fadeImages[3]} alt="Snow" />
              </div>
    
              <div className="each-fadeone-a">
                <div className="container">
                    <img src={wine} alt="Snow" className="drink1"/>
                    <button className="slide-btn">
                       {/* onClick={() =>history.push('/shop')}> */}
                      SHOP NOW</button>
                </div>
                <img src={fadeImages[0]} alt="slide" className="drink2" />
              </div>
            </Fade>
          </div>
          </>
      );
}
    
export default (Banner);
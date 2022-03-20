import React from 'react'
import C1 from "../../images/HeroCarousel/C1.gif"
import C2 from "../../images/HeroCarousel/C2.gif"
import C3 from "../../images/HeroCarousel/C3.gif"
import C4 from "../../images/HeroCarousel/C4.gif"
import C5 from "../../images/HeroCarousel/C5.gif"
import './contactimagetop.css'

const Contactimagetop = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 10000,
      behavior: "smooth"
    });
  };


  return (
    <div className='containerContactImageTop'>
      <div>
      <img src={C1} className='c1'/>
      </div>
      <div className='contactSkipButtonContainer'>
        <button onClick={scrollToBottom}>Click here to skip to contact!</button>
      </div>
      <div className='containerContactSmall'>
        <img src={C2} className='c2'/>
        <img src={C3} className='c3'/>
        <img src={C4} className='c4'/>
        <img src={C5} className='c5'/>      
      </div>
    </div>
  )
}

export default Contactimagetop

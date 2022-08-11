import React from 'react'
import C1 from "../../images/HeroCarousel/c1.webp"
import C2 from "../../images/HeroCarousel/c2.webp"
import C3 from "../../images/HeroCarousel/c3.webp"
import C4 from "../../images/HeroCarousel/c4.webp"
import C5 from "../../images/HeroCarousel/c5.webp"
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
      <img src={C1} className='c1'loading="lazy"/>
      </div>
      <div className='contactSkipButtonContainer'>
        <button onClick={scrollToBottom}>Click here to skip to contact!</button>
      </div>
      <div className='containerContactSmall'>
        <img src={C2} className='c2' loading="lazy"/>
        <img src={C3} className='c3' loading="lazy"/>
        <img src={C4} className='c4' loading="lazy"/>
        <img src={C5} className='c5' loading="lazy"/>      
      </div>
    </div>
  )
}

export default Contactimagetop

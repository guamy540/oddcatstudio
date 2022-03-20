import React from 'react'
import logo from "../../images/Booya_.gif"
import logotest from "../../images/HeroCarousel/C1.gif"
import './herotopimage.css'

const HeroTopImage = () => {
  return (
    <div className='container-big-logo'>
      <img src={logo} className='big-logo' alt="logo"/>
    </div>
  )
}

export default HeroTopImage

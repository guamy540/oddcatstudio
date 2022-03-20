import React from "react";
import Commisions from "../../components/Herocard/Commissions"
import Personalwork from "../../components/Herocard/Personalwork"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import HeroTopImage from "../../components/Herocard/HeroTopImage";

import './Hero.css'


export default function Hero(){

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return(
        <div>
            <Navbar/>
            <div className="heroPageContainer">
                <HeroTopImage/>
                

                <h1>Personal Work</h1>
                <Personalwork/>
        
                <h1>Commissions</h1>
                <Commisions/>

                <div className="backToTopButtonContainer">
                    <button onClick={scrollToTop}>Back to top</button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
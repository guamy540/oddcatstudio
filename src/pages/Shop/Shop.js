import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import shopData from "../../shopdata";
import Shopcard from "../../components/Shopcard";
import './Shop.css'
import inquiryGif from '../../images/HeroCarousel/c6.webp'
import { useNavigate } from "react-router-dom";

export default function Shop(){
    let navigate = useNavigate();

    const cardElements = shopData.map(card => {
        return <Shopcard
            image={card.image}
            title={card.title}
            price={card.price}
        />
    })



    return(
        <div>
            <Navbar/>
            <div className="shopPageContainer">
                <div className="shopPageTextContainer">
                <h1>Shop coming soon!</h1>
                <p>We are excited to announce our shop is coming on March 31st!</p>
                <p>While you wait for our limited collection of clothing, prints, and buttons, you can 
                    reach out to Odd Cat Studio for your commission fix!</p> 
                </div>
                <div className="shopPageContainerButton">                
                <button onClick={()=>{navigate("/contact");}}>Contact Us!</button>    
                
                </div>
                
                <div className="inquiryContainer">
                    <img src={inquiryGif} className="inquiryGif"></img>
                </div>
            </div>
            <Footer/>
        </div>
    )

}
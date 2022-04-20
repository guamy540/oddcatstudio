import React from "react";
import './About.css'
import BWTheo from "../../images/webp/theo.webp"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import { useNavigate } from "react-router-dom";


export default function About(){
    let navigate = useNavigate();

    return(
        <div className="aboutPage">
        <Navbar/>
        <div className="aboutPageViewHeightContainer">
        <div className="aboutPageContainer">

        <div className="aboutPageContainerColumns">
        <div className="infoContainer">
            <h4>Email:</h4>
            <p>theodorehearon@gmail.com</p>
            <br></br>
            <h4>Specialties:</h4>
            <ul>
                <li>Illustration</li>
                <li>Digital Art</li>
                <li>Chalk Art</li>
                <li>Graphics</li>
            </ul>
            <br></br>
            <br></br>
            <p>Founder of Odd Cat Studio</p>
            <br></br>
            <p> Shop coming soon!
            </p>
            <br></br>
            <p>Custom clothing commissions available upon request</p>
            <br></br>
            <p className="aboutContactLink" onClick={()=>{navigate("/contact");}}>
                Contact them today!</p>
        </div>
        
        <div className="aboutInfo">
            <p>Theo Hearon is the founder of Odd Cat Studio and is an illustrator, graphic artist, and 
                designer. They specialize in illustration, digital art, and chalk art, as well as 
                customized clothing.</p>
            <p>Theo takes inspiration from the natural world, Western and Japanese animation, and streetwear. 
                They are known for their character design, lettering, and custom clothing. </p>
            <p>They were recognized for their work by Masashi Kishimoto, Young Trunkz, and We Love Fine.</p>
            <p>They have done work for clients both large and small, from private commissions, 
                local businesses, and major artists.Some of these clients include Color Pop Tulsa, 
                Tokyo in Tulsa, and Carrie Underwood.</p>
            <p>For inquiries, requests, or other questions you can send an email to theodorehearon@gmail.com 
               or DM Theo at their Instagram or Tik-Tok.</p>
        </div>

        <div className="aboutImageContainer">
            <img src={BWTheo} className="BWTheo"/>
        </div>

        </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
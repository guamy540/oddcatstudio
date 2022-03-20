import React, {useState} from "react";
import logo from "../../images/Booya_.gif"
import './Navbar.css'
import cart from "../../images/shopping-cart.png"
import {useNavigate} from "react-router-dom"
import biglogo from "../Herocard/HeroTopImage.js"
import HeroTopImage from "../Herocard/HeroTopImage.js";

/*<img src = {logo} className="navLogo" alt = "oddcatstudios"
               onClick={()=>{navigate("/");}}
               />*/

const Navbar = () => {
    let navigate = useNavigate();

    const[isMobile, setIsMobile] = useState(false);

    return(
        <nav className="navbar">
           
            <ul className={isMobile ? "nav-links-mobile" : "navLinks"}
            onClick={() => setIsMobile(false)}>
            
                <li className="navHome" onClick={()=>{navigate("/");}}
                    >Home</li>
                <li className="navAbout" onClick={()=>{navigate("/about");}}
                    >About</li>
                <li className="navShop" onClick={()=>{navigate("/shop");}}>
                    Shop</li>
                <li className="navToS" onClick={()=>{navigate("/ToS");}}>
                    Terms of Service
                </li>
                <li className="navContact" onClick={()=>{navigate("/contact");}}>
                    Contact</li>
            </ul>
            <button className="mobile-menu-icon"
            onClick={()=>setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    )
}

export default Navbar;
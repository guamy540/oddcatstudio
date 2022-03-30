import React, {useState} from "react";
import logo from "../../images/Booya_.gif"
import './Navbar.css'
import cart from "../../images/shopping-cart.png"
import {useNavigate} from "react-router-dom"
import biglogo from "../Herocard/HeroTopImage.js"
import HeroTopImage from "../Herocard/HeroTopImage.js";
import oclogo from "../../images/oclogo.gif"

/*<img src = {oclogo} className="navLogo" alt = "oddcatstudios"
               onClick={()=>{navigate("/");}}
               />*/

const Navbar = () => {
    let navigate = useNavigate();

    const[isMobile, setIsMobile] = useState(false);

    return(
        <nav className="navbar">
           <img src = {oclogo} className="navLogo" alt = "oddcatstudios"
               onClick={()=>{navigate("/");}}/>
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
            <button className="mobile-menu-icon" aria-label="Menu button"
            onClick={()=>setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times orangeincolor"></i> : <i className="fas fa-bars orangeincolor"></i>}
            </button>
        </nav>
    )
}

export default Navbar;
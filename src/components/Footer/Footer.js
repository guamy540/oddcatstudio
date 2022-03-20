import React from "react";
import './footer.css'
import instagram from "../../images/instagram.png"
import tiktok from "../../images/tiktok-512.png"
import patreon from "../../images/whitepatreon.png"

export default function Footer(){
    return(
    <div className="footer">
        <div className="footerLinks">
            <a href="https://instagram.com/theosunbee?r=nametag" target="_blank">
                <img src={instagram} className="footerLogos"/></a>
            <a href="https://vm.tiktok.com/ZTdD2Bs6K/" target="_blank">
                <img src={tiktok} className="footerLogos"/></a>
            <a href="https://www.patreon.com/oddcatstudio?fan_landing=true" target="_blank">
                <img src={patreon} className="footerLogos"/></a>
        </div>
        <div className="footerCopyright">
            <p>©Theo Hearon, 2022 <br/>
               All Rights Reserved</p>
        </div>
    </div>
    )
}
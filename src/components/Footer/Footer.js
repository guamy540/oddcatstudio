import React from "react";
import './footer.css'
import instagram from "../../images/webp/instagram.webp"
import tiktok from "../../images/webp/tiktok-512.webp"
import patreon from "../../images/webp/whitepatreon.webp"

export default function Footer(){
    return(
    <div className="footer">
        <div className="footerLinks">
            <a href="https://instagram.com/theosunbee?r=nametag" target="_blank">
                <img src={instagram} className="footerLogos" alt="instagram link"/></a>
            <a href="https://vm.tiktok.com/ZTdD2Bs6K/" target="_blank">
                <img src={tiktok} className="footerLogos" alt="tiktok link"/></a>
            <a href="https://www.patreon.com/oddcatstudio?fan_landing=true" target="_blank">
                <img src={patreon} className="footerLogos" alt="patreon link"/></a>
        </div>
        <div className="footerCopyright">
            <p>©Theo Hearon, 2022 <br/>
               All Rights Reserved</p>
        </div>
    </div>
    )
}
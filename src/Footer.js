import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.webp";
import whatsapp from "./images/whatsapp.webp";
import React from "react";

function Footer() {
    return (
        <div className="footer-container">
            
            <img src={facebook} alt="facebook" className="footer-img" />
            <img src={instagram} alt="instagram" className="footer-img" />
            <img src={twitter} alt="twitter" className="footer-img" />
            <img src={whatsapp} alt="whatsapp" className="footer-img" />
        </div>
    );
}

export default Footer;
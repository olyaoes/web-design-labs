import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () => {
    const logo = process.env.PUBLIC_URL + '/img/logo1.png';
    return (
        <footer>
            <div className="footer">
                <div className="footer-description">
                    <p className="logo">World of Flowers</p>
                    <p className="footer-txt">
                    Our Flower Guide helps you discover the connection between your<br /> 
                    unique preferences and different types of flowers.<br /> 
                    Find the blooms that perfectly reflect your style and personality.<br /> 
                    </p>
                </div>
                
                <img className="logo" src={logo} alt="Brand Logo" />
                <div className="footer-icons">
                    <FaFacebookF className="icons" />
                    <FaInstagram className="icons" />
                    <FaLinkedinIn className="icons" />
                    <FaTwitter className="icons" />
                </div>
            </div>
            <hr className="footer-hr" />
            <p className="txt-p">2020 IoT © Copyright all rights reserved</p>
        </footer>
    );
}

export default Footer;

import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa"
 
export default function Footer(){
    return (
        <div className="footer">
            <p>
                Made by Teyo @2024
            </p>
            <a href="https://github.com/PatoTey" target="_blank" rel="noreferrer" className="srclink" aria-label="Go to Patricio's Github page"> 
                <FaGithub className="footer-link"/>
            </a>
            <a href="https://www.linkedin.com/in/patricio-tudela-chavera/" target="_blank" rel="noreferrer" className="srclink" aria-label="Go to Patricio's Linkedin page">
                <FaLinkedin className="footer-link"/>
            </a>
        </div>
    )
}
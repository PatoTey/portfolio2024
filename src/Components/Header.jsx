import React from "react";
import logogit from "../images/github-mark-white.png"
import logolkdin from "../images/LI-In-Bug.png"
import logoreact from "../images/logoreact.svg"
import logojs from "../images/logojs.webp"
import logonode from "../images/logonode.jpg"
import logoexpress from "../images/logoexpress.png"
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaCopy } from "react-icons/fa";


export default function Content(){
    const styles = {
        textDecoration: "underline",
        backgroundColor: "#a2afd5",
        padding: "0em 0.5em",
        borderRadius: "1em",
        color: "#293d76"
    }

    function copyToClipboard(){
        const text = document.getElementById("email").innerHTML
        navigator.clipboard.writeText(text)
    }
     
    return (
        <div className="intro">
            <h1 className="nameTitle">Patricio Tudela</h1>
            <small className="nickname">Teyo</small>
            <h2 className="subtitle">Full-Stack Developer</h2>
            <section className="tecnologies-section">
                <img src={logojs} alt="logo React" className="logo"/>
                <img src={logoreact} alt="logo React" className="logo"/>
                <img src={logonode} alt="logo React" className="logo"/>
                <img src={logoexpress} alt="logo React" className="logo"/>
            </section>
            <section className="socialslinks">
                <a href="https://github.com/PatoTey" target="_blank" rel="noreferrer" className="srclink">
                    <img className="sociallink" src={logogit} alt="a programing cat"/>
                </a>
                <a href="https://www.linkedin.com/in/patricio-tudela-chavera/" target="_blank" rel="noreferrer" className="srclink">
                    <img className="sociallink" src={logolkdin} alt="initials of linkedin"/>
                </a> 
            </section>
            <div className="email-container"> 
                <MdEmail className="email-icon"/> 
                <p id="email" className="email" value="ptudelach@hotmail.com">ptudelach@hotmail.com</p> 
                <FaCopy className="copyClipboard" onClick={()=>copyToClipboard()}/>
            </div>
            <div className="cv-container">
                <a href="/resources/Resume_Patricio_Tudela.pdf" download className="cvbtn"> Download CV English</a>
                <a href="/resources/Curriculum_Patricio_Tudela.pdf" download className="cvbtn">Descargar CV Español</a>
            </div>
            <section className="nav-section">
                <div className="nav">
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav nav-link" to="/aboutme"><h3>About Me</h3></NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav nav-link" to="/"><h3>Web Developer</h3></NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav nav-link" to="/formation"><h3>Formation</h3></NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav nav-link" to="/experience"><h3>Experience</h3></NavLink>
                </div>
            </section>
        </div>
    )
}
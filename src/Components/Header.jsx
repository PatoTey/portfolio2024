import React from "react";
import logoreact from "../images/logoreact.svg"
import logojs from "../images/logojs.webp"
import logonode from "../images/logonode.webp"
import logoexpress from "../images/logoexpress.png"
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaCopy, FaGithub, FaLinkedin, FaCircle } from "react-icons/fa";
import "../styles/header.css"


export default function Content(){
    const styles = {
        textDecoration: "underline",
        padding: "0em 0.5em",
        borderRadius: "0.5em",
        color: "#212738",
        border: "1px solid rgb(255, 206, 115)",
        fontWeight: "bold",
        backgroundImage: "linear-gradient(145deg, var(--orange), var(--pink))",
    }

    function copyToClipboard(){
        const text = document.getElementById("email").innerHTML
        navigator.clipboard.writeText(text)
    }
     
    return (
        <section className="intro">
            <section className="intro-container">
                <div className="intro-data">
                    <h1 className="nameTitle">Patricio Tudela</h1> 
                    <small className="nickname">Teyo</small>
                    <h2 className="subtitle">Full-Stack Web Developer</h2>
                    <p className="intro-data-description">
                        I am a <span className="description-detail">Software Engineer with 3 years of experience in Front-End and Back-End Web development</span>. 
                        My focus is to transform ideas into interactive, user-centered digital solutions.
                    </p>
                    <NavLink className="intro-data-learnmore" to="/aboutme" aria-label="Move to About me section"><h3>Learn more</h3></NavLink>
                    <section className="available-container">
                        <FaCircle className="available"/> <p className="available-text">Available to work</p>
                    </section>
                </div>
                <div className="intro-links">
                    <section className="tecnologies-section">
                        <img src={logojs} alt="logo React" className="logo"/>
                        <img src={logoreact} alt="logo React" className="logo"/>
                        <img src={logonode} alt="logo React" className="logo"/>
                        <img src={logoexpress} alt="logo React" className="logo"/>
                    </section>  
                    <section className="socialslinks">
                        <a href="https://github.com/PatoTey" target="_blank" rel="noreferrer" className="srclink" aria-label="Go to Patricio's Github page">
                            <FaGithub className="sociallink"/>
                        </a>
                        <a href="https://www.linkedin.com/in/patricio-tudela-chavera/" target="_blank" rel="noreferrer" className="srclink" aria-label="Go to Patricio's Linkedin page">
                            <FaLinkedin className="sociallink"/>
                        </a> 
                    </section>
                   {/* <div className="email-container"> 
                        <MdEmail className="email-icon"/> 
                        <p id="email" className="email" value="ptudelach@hotmail.com">ptudelach@hotmail.com</p> 
                        <FaCopy className="copyClipboard" onClick={()=>copyToClipboard()}/>
                    </div>*/}
                    <div className="cv-container">
                        <a href="/resources/Resume_Patricio_Tudela.pdf" download className="cvbtn" aria-label="Dowloand english CV"> Download CV English</a>
                        <a href="/resources/Curriculum_Patricio_Tudela.pdf" download className="cvbtn" aria-label="Download spanish CV">Descargar CV Español</a>
                    </div>
                </div>  
                
            </section>

            <section className="nav-section">
                <div className="nav">
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav nav-link" to="/aboutme" aria-label="Move to About me section"><h3>About Me</h3></NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav nav-link" to="/" aria-label="Move to Developer section"><h3>Web Developer</h3></NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav nav-link" to="/formation" aria-label="Move to academic formation section"><h3>Formation</h3></NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav nav-link" to="/experience" aria-label="Move experience section"><h3>Experience</h3></NavLink>
                </div>
            </section>

        </section>
    )
}
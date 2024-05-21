import React from "react";
import logogit from "../images/github-mark-white.png"
import logolkdin from "../images/LI-In-Bug.png"
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";


export default function Content(){
    const styles = {
        textDecoration: "underline",
        backgroundColor: "#a2afd5",
        padding: "0em 0.5em",
        borderRadius: "1em",
        color: "#293d76"
    }
    return (
        <div className="intro">
            <h1 className="nameTitle">Patricio Tudela</h1>
            <small className="nickname">Teyo</small>
            <h2 className="subtitle">Full-Stack Developer</h2>
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
                <p className="email">ptudelach@hotmail.com</p> 
            </div>
            <div className="cv-container">
                <a href="/resources/Resume_Patricio_Tudela.pdf" download className="cvbtn"> Download CV English</a>
                <a href="/resources/Curriculum_Patricio_Tudela.pdf" download className="cvbtn">Descargar CV Español</a>
            </div>
            <section className="nav-section">
                <div className="nav">
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/aboutme"><h3>About Me</h3></NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/"><h3>Web Developer</h3></NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/formation"><h3>Formation</h3></NavLink>
                    <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/experience"><h3>Experience</h3></NavLink>
                </div>
            </section>
        </div>
    )
}
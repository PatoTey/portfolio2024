import React from "react";
import logogit from "../images/github-mark-white.png"
import logolkdin from "../images/LI-In-Bug.png"
import { NavLink } from "react-router-dom";


export default function Content(){
    const styles = {
        textDecoration: "underline",
    }
    return (
        <div className="intro">
            <h1 className="nameTitle">Patricio Tudela</h1>
            <small className="nickname">Teyo</small>
            <h2 className="subtitle">Full-Stack Developer</h2>
            <div className="socialslinks">
                <a href="https://github.com/PatoTey" target="_blank" rel="noreferrer" className="srclink">
                    <img className="sociallink" src={logogit} alt="a programing cat"/>
                </a>
                <a href="https://www.linkedin.com/in/patricio-tudela-chavera/" target="_blank" rel="noreferrer" className="srclink">
                    <img className="sociallink" src={logolkdin} alt="initials of linkedin"/>
                </a>
            </div>
            <div className="nav">
                <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/"><h3>Overview</h3></NavLink>
                <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/about"><h3>About me</h3></NavLink>
            </div>
        </div>
    )
}
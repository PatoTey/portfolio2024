import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function About(){
    const styles = {
        textDecoration: "underline",
    }
    return (
        <div>
            <div className="nav">
                <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/"><h3>Overview</h3></NavLink>
                <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/about"><h3>About me</h3></NavLink>
            </div>
            <div className="aboutnav">
                <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" end to="/about"><h3>English</h3></NavLink>
                <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/about/spanish"><h3>Español</h3></NavLink>
            </div>
            <Outlet/>
        </div>
    )
}
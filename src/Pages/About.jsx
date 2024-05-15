import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function About(){
    const styles = {
        textDecoration: "underline",
    }
    return (
        <div>
            <div className="aboutnav">
                <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" end to="/aboutme"><h3>English</h3></NavLink>
                <NavLink style={({isActive})=>isActive ? styles : null} className="unlinknav" to="/aboutme/spanish"><h3>Español</h3></NavLink>
            </div>
            <Outlet/>
        </div>
    )
}
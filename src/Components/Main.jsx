import React from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom"
import Extra from "./Extra";

export default function Main(){
    return (
        <div>
            <Header/>
            <Outlet/>
            <Extra/>
        </div>
    )
}
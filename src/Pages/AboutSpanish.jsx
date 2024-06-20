import React from "react";
import useTitleChanger from "../CustomHooks/useTitleChanger";
import card from "../images/CardTeyo.webp"

export default function AboutSpanish(){
    useTitleChanger("Teyo's Portfolio - Sobre Teyo")
    return (
        <div className="introduction-section"> 
            <div className="introduction">
                <p>
                Hola, soy Patricio, mi apodo es "Teyo" soy un Ingeniero Civil en Computación e Informática titulado de la Universidad de 
                Tarapacá en Chile
                </p>
                <p>
                    Soy un <span className="shine">Desarrollador Web Full-Stack </span>, me encanta usar <span className="react">React </span> 
                    para el Front-End y <span className="express">Node Express</span> para el Back-end, tambien me gusta trabajar con bases de datos
                    MySQL.
                </p>
                <p>
                    He trabajado con algunos lenguajes de programacion como lo son C, C++, C#, Python, Java y PHP, desarrollando pequeños 
                    proyectos personales.
                </p>
                <p>
                    Me encantan los patos 🦆, algunos amigos me llaman "Pato"🦆. Amo los 🎮Videojuegos🕹️, la Pizza 🍕 y la Pasta 🍜.
                </p>
                <p>
                    Tambien soy un desarrollador de videojuegos 😎, He realizado pequeños juegos en Unity, Unreal Engine y Godot! en 2D y 3D! 
                    He modelado todos mis assets. ¿Ya mencioné que amo el pixelart?
                </p>    
            </div>
            <img src={card} className="cardteyo"/>
        </div>
       
    )
}
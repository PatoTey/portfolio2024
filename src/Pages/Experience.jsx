import React from "react";
import useTitleChanger from "../CustomHooks/useTitleChanger";
import "../styles/experience.css"

export default function Experience(){
    useTitleChanger("Teyo's Portfolio - My Experience")
    return (
        <main >
            <section className="experience-section">
                <h2 className="experience-date">-Now-</h2>
                <p className="experience-text">
                    Currently I'm freelancing and making personal projects to learn more of React tecnologies. Especifically developing a Kanban Web App that can help organize projects.
                </p>
                <h2 className="experience-date">-2023-</h2>
                <p className="experience-text">
                    In 2023-2024 I developed a web site showcasing the enterprise's services provided by a Cleaning Company in Santiago, Chile. 
                    <span className="madewith-text"> My work consisted in analisis, design and implementation of the front-end usings Javascript and React</span>.
                </p>
                <h2 className="experience-date">-2021-</h2>
                <p className="experience-text">
                    In 2021 I developed a E-commerce, forum/comunity web system for a hardware shop in Arica Chile. Worked on front-end and back-end, 
                    also designed and implemented a SQL database for the project. Worked close with ilustrators. 
                    <span className="madewith-text"> Was made using Laravel, PHP and SQL</span>.
                </p>
                <h2 className="experience-date">-2020-</h2>
                <p className="experience-text">
                    In 2020 I developed a E-commerce web system for a Donuts and Cake Shop in Arica Chile.
                    <span className="madewith-text"> Worked on front-end and back-end , 
                    also designed and implemented a SQL database for the project. Was made using Laravel, PHP and SQL</span>.
                </p>
            </section>
        </main>
    )
}
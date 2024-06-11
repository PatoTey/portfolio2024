import React from "react";
import useTitleChanger from "../CustomHooks/useTitleChanger";
import data from "../Data/SkillsData";
import "../styles/formation.css"

export default function Formation(){
    useTitleChanger("Teyo's Portfolio - My academic formation")
    const skills = data.map(subject=>{
        return( 
            <section className="subject-section" key={subject.id}>
                <h1>{subject.name}</h1>
                <div className="skills-container">
                    {subject.tecskills.map(skill=>{
                        return (
                            <div className="skill" key={skill.id}>
                                {skill.skill}
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }) 
    return (
        <main >
            <section className="formation-section">
                <p className="formation-text">
                    Im a certified "Civil engineer in Computing and Informatics" graduated from the Tarapaca University in Arica, Chile. Learnt a lot from the topics of Computer Science,
                    sofware development and more. Now I specialize in Web development.
                </p>
                <p className="formation-text">
                    In 2023 i completed and certified a course named Front-End Career Path, a 72 hour course developing multiple project using Javascript, CSS, Firebase and React following
                    the principles of Responsive Design and Mobile First.
                </p>
                <p className="formation-text">
                    In 2023 i completed and certified a course named Advanced React, is a 26 hour course developing multiple project using React and React Router 6.
                </p>
                <p className="formation-text">
                    Im certified C2 proficient in English by the EFSET Test
                </p>
            </section>
            <section className="skills">
                <h1>Technical Skills</h1>
                {skills}
            </section>
        </main>
    )
}
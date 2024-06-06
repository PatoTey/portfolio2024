import React from "react";
import data from "../Data/PagesData"
import logogit from "../images/github-mark-white.webp"
import logodemo from "../images/logodemo.webp"
import useTitleChanger from "../CustomHooks/useTitleChanger";
import {FaStar} from "react-icons/fa"

export default function Pages(){
    useTitleChanger("Teyo's Portfolio - Web Developer")
    const pages = data.map(page => {
        return (              
                <article key={page.id} className="page">
                    <div className="page-data">
                        <a target="_blank" rel="noreferrer" href={page.appurl} className="unlink">
                            <h1 className="pagetitle">{page.appname}</h1>
                        </a>
                        <h2 className="pagedescription">
                            {page.description}
                        </h2>
                        <div className="pagemade">
                            {page.madewith.map(tecnology=>{
                                return(
                                    <p className="tecnologies" key={tecnology}>{tecnology}</p>
                                )
                            })} 
                        </div>
                        <span className="srclinks">
                            {page.hascode && 
                                <a href={page.githuburl} target="_blank" rel="noreferrer" className="srclink">
                                    <img className="logogit" alt="logo of a programing cat"  loading="lazy" src={logogit} /> 
                                    See code
                                </a>
                            }

                            {page.hasdemo && 
                                <a href={page.appurl} target="_blank" rel="noreferrer" className="srclink">
                                    <img className="logodemo" src={logodemo} loading="lazy" alt="html tags logo" /> 
                                    Demo here
                                </a>
                            }
                        </span>
                        {page.work && 
                            <p className="work-text"> <FaStar className="work-star"/> Work experience!</p>

                        }
                    </div>    
                    <a href={page.appurl} target="_blank" rel="noreferrer" className="image-container">
                        <img className="pageimagedesk" src={page.imagedesk} loading="lazy" alt={page.imagealt}/>
                    </a>
                    {/**<a href={page.appurl} target="_blank" rel="noreferrer" className="srclink"><img className="pageimagemob" src={page.imagemob} alt=""/></a>**/}
                </article>
        )
    })

    return (       
        <main className="pages-section">
            <h1 className="pages-title">
                Here are some of my works, projects and products, take a look!
            </h1>
            <div className="pages">
                {pages}
            </div>
        </main>
    )
}
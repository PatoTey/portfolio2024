import React from "react";
import data from "../Data/PagesData"
import useTitleChanger from "../CustomHooks/useTitleChanger";
import {FaStar, FaGithub, FaCode} from "react-icons/fa"
import "../styles/projects.css"

export default function Pages(){
    useTitleChanger("Teyo's Portfolio - Web Developer")

    const PageStyleNoIMG = {
        height: "auto",
    }
    const DatastyleNoIMG = {
        maxWidth: "100%",
    }
    const pages = data.map(page => {
        return (              
                <article key={page.id} className="page" style={page.imagedesk ? {} : PageStyleNoIMG}>
                    <div className="page-data" style={page.imagedesk ? {} : DatastyleNoIMG}>
                        
                        { page.imagedesk ? (
                             <a target="_blank" rel="noreferrer" href={page.appurl} className="unlink">
                                <h1 className="pagetitle">{page.appname}</h1>
                            </a>
                        ) :
                            <h1 className="pagetitle">{page.appname}</h1>
                        }
                       
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
                                    <FaGithub className="logossrc"/>
                                    <p className="codetext">See code</p> 
                                </a>
                            }

                            {page.hasdemo && 
                                <a href={page.appurl} target="_blank" rel="noreferrer" className="srclink">
                                    <FaCode className="logossrc"/>
                                    <p className="codetext">Demo here</p>
                                </a>
                            }
                        </span>
                        {page.work && (
                            <>
                                <p className="work-text"> <FaStar className="work-star"/> Work experience!</p>
                                <p>{page.time}</p>
                            </>
                        )
                            
                      
                        }
                    </div>

                    {   page.imagedesk && (
                            <a href={page.appurl} target="_blank" rel="noreferrer" className="image-container">
                                <img className="pageimagedesk" src={page.imagedesk} loading="lazy" alt={page.imagealt}/>
                            </a>
                        )

                    }    
                    
                </article>
        )
    })

    return (       
        <main className="pages-section">
            <h1 className="pages-title">
                Works and projects
            </h1>
            <div className="pages">
                {pages}
            </div>
        </main>
    )
}
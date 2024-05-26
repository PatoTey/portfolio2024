import React from "react";
import data from "../Data/PagesData"
import logogit from "../images/github-mark-white.png"
import logodemo from "../images/logodemo.png"
import useTitleChanger from "../CustomHooks/useTitleChanger";

export default function Pages(){
    useTitleChanger("Teyo's Portfolio - Web Developer")
    const pages = data.map(page => {
        return (              
                <div key={page.id} className="page">
                    <a target="_blank" rel="noreferrer" href={page.appurl} className="unlink"><h1 className="pagetitle">{page.appname}</h1></a>
                    <h2 className="pagedescription">{page.description}</h2>
                    <div className="pageimages">
                        {page.imagedesk && <a href={page.appurl} target="_blank" rel="noreferrer" className="srclink"><img className="pageimagedesk"  src={page.imagedesk} alt=""/></a>}
                        <a href={page.appurl} target="_blank" rel="noreferrer" className="srclink"><img className="pageimagemob" src={page.imagemob} alt=""/></a>
                    </div>
                    <div className="pagemade">Made with: {page.madewith.map(tecnology=>{
                        return(
                            <p className="tecnologies" key={tecnology}>{tecnology}</p>
                        )
                    })} 
                    </div>
                    <span className="srclinks">
                        {page.hascode && <a href={page.githuburl} target="_blank" rel="noreferrer" className="srclink">
                            <img className="logogit" alt="logo of a programing cat" src={logogit} /> 
                            See code
                        </a>}
                        {page.hasdemo && <a href={page.appurl} target="_blank" rel="noreferrer" className="srclink">
                            <img className="logodemo" src={logodemo} alt="html tags" /> 
                            Demo here
                        </a>}
                    </span>
                </div>
        )
    })

    return (       
        <main className="pages-section">
            <h1 className="pages-title">
                Here are some of my projects, take a look!
            </h1>
            <div className="pages">
                {pages}
            </div>
        </main>
    )
}
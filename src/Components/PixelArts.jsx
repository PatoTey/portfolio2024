import React from "react";
import data from "../Data/PixelArtsData";

export default function PixelArts(){
    const pixelarts = data.map(px => {
        return (
            <article key={px.id}>
                <img className="px-image" src={px.image}/>
            </article>
        )
    })
    return (
        <section className="px-artcontainer">
            {pixelarts}
        </section>
    )
}
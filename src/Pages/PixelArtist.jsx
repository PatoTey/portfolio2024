import React from "react";
import useTitleChanger from "../CustomHooks/useTitleChanger";
import PixelArts from "../Components/PixelArts";

export default function PixelArtist(){
    useTitleChanger("Teyo's Portfolio - Pixel Artist")
    return (
        <main>
            <section className="px-section">
                <h1 className="px-title">Hey there! My pixel artsit nickname goes by NLTEY. Here is some of my work.</h1>
            </section>
            <PixelArts/>
        </main>
    )
}
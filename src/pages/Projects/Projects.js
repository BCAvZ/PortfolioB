import React from 'react';
import MixB from '../../assets/pictures/Preview_image_MixB.PNG'


export function Projects() {


    return (
        <section className="flex flex-col justify-center ">
            <article className="flex justify-center">
                <p>Welkom op mijn projectpagina! Hier kan je makkelijk de door mijn gemaakte applicaties vinden met een korte beschrijving van de gebruikte technieken en zelfs de applicaties bezoeken met een druk op de knop.
                </p>
            </article>

            <div className="flex justify-center">
                <img src={MixB} alt="MixB" />
            </div>
        </section>
    );
}
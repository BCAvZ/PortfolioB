import React, {useState} from 'react';
import MixB from '../../assets/pictures/Preview_image_MixB.PNG'
import portfolio from '../../assets/pictures/portfolio_background_Dutch.png'
import {ProjectPreviewer} from "../../components/ProjectPreviewer/ProjectPreviewer";


export function Projects() {

    const [selectedProject, setSelectedProject] = useState(1);


    return (
        <section className="flex flex-col justify-center">
            <article className="flex justify-center p-2 ">
                <p className="text-slate-700 max-w-2xl">Welkom op mijn projectpagina! Hier kan je makkelijk de door mijn gemaakte applicaties vinden met een korte beschrijving van de gebruikte technieken. Klik op het plaatje om naar een applicatie te gaan!
                </p>
            </article>

            {selectedProject <= 1 ? <ProjectPreviewer
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                title="MixB!"
                link="https://deft-narwhal-4151f0.netlify.app"
                picture={MixB}
                description="is een cocktail recepten database, ontwikkeld via React, gestyled met gebruik van CSS-modules en navigeerbaar door React-Router-Dom. De recepten zelf worden opgevraagd via GET requests met behulp van Axios naar de CocktailDb API en de inlog- en accountpagina werken dankzij React-Hook-Form."
            ></ProjectPreviewer> :
                <ProjectPreviewer
                 selectedProject={selectedProject}
                 setSelectedProject={setSelectedProject}
                 title="Portfolio Bart"
                 link=""
                 picture={portfolio}
                 description="is een portfolio van een jonge enthousiaste Frontend developer, ontwikkeld via React, gestyled met behulp van Tailwind CSS en navigeerbaar via React-Router Dom. Het contactformulier op de Contact pagina werkt via React-Hook-Form en mailt direct naar het mailadres van de developer via mailjs."
                >
                </ProjectPreviewer>
            }
        </section>
    );
}
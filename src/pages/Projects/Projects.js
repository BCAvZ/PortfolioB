import React, {useState} from 'react';
import {ProjectPreviewer} from "../../components/ProjectPreviewer/ProjectPreviewer";
import ProjectsInfoNL from "../../assets/projectsinfo/ProjectsInfoNL.json"

export function Projects() {

    const [selectedProject, setSelectedProject] = useState(0);


    return (
        <section className="flex flex-col justify-center">
            <article className="flex justify-center p-2 ">
                <p className="text-slate-700 max-w-2xl">Welkom op mijn projectpagina! Hier kan je makkelijk de door mijn gemaakte applicaties vinden met een korte beschrijving van de gebruikte technieken. Klik op het plaatje om naar een applicatie te gaan!
                </p>
            </article>
            <ProjectPreviewer
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                title={ProjectsInfoNL[selectedProject].title}
                link={ProjectsInfoNL[selectedProject].link}
                picture={ProjectsInfoNL[selectedProject].picture}
                description={ProjectsInfoNL[selectedProject].description}
            ></ProjectPreviewer>
        </section>
    );
}
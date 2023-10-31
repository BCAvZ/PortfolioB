import React, {useContext, useState} from 'react';
import {ProjectPreviewer} from "../../components/ProjectPreviewer/ProjectPreviewer";
import ProjectsInfoNL from "../../assets/projectsinfo/ProjectsInfoNL.json"
import ProjectsInfoENG from "../../assets/projectsinfo/ProjectsInfoENG.json"
import {Context} from "../../context/context";

export function Projects() {

    const [selectedProject, setSelectedProject] = useState(0);

    const {dutch} = useContext(Context);

    function languageSetting() {
        if(dutch) {
            return ProjectsInfoNL[selectedProject]
        } else {
            return ProjectsInfoENG[selectedProject]
        }
    }

    return (
        <section className="flex flex-col justify-center">
            <ProjectPreviewer
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                title={ProjectsInfoNL[selectedProject].title}
                link={ProjectsInfoNL[selectedProject].link}
                picture={languageSetting().picture}
                description={languageSetting().description}
            ></ProjectPreviewer>
        </section>
    );
}
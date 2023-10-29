import React from 'react';
import MixB from '../../assets/pictures/Preview_image_MixB.PNG'
import portfolio from '../../assets/pictures/portfolio_background_Dutch.png'


export function ProjectPreviewer({selectedProject, setSelectedProject, title, link, picture, description}) {

    return (
            <article className="bg-amber-100 rounded-2xl p-2 grow-0">
                <h1 className="font-bold flex justify-center">{title}</h1>
                <div className="flex flex-row justify-evenly items-center">
                    <button onClick={(e) => setSelectedProject(1)} className="bg-amber-400 w-auto max-h-8 font-bold rounded-3xl p-1 ">Vorige</button>
                    <div className="flex justify-center sm:h-96 sm:w-96 h-2/4 w-2/4 ">
                        <a href={link} className=" ">
                            <img src={picture} alt="MixB" className="w-full h-full object-fill"/>
                        </a>
                    </div>
                    <button onClick={(e) => setSelectedProject(2)} className="bg-amber-400 w-auto max-h-8 font-bold rounded-3xl p-1 ">Volgende</button>
                </div>
                <p className=" max-w-2xl italic">
                    <a href={link} className="underline">{title}</a> {description}
                </p>
            </article>
    );
}
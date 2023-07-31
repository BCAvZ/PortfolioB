import React from 'react';

export function ProjectInfo({selectedProject, setSelectedProject, title, link, picture, description}) {

    return (
            <article className="bg-amber-100 rounded-2xl p-2">
                <h1 className="font-bold flex justify-center">{title}</h1>
                <div className="flex flex-row justify-center items-center">
                    <button onClick={(e) => setSelectedProject(1)} className="bg-amber-400 w-auto max-h-8 font-bold rounded-3xl p-1 ">Vorige</button>
                    <div className="flex justify-center">
                        <a href={link} className="w-3/5 h-auto">
                            <img src={picture} alt="MixB"/>
                        </a>
                    </div>
                    <button onClick={(e) => setSelectedProject(2)} className="bg-amber-400 w-auto max-h-8 font-bold rounded-3xl p-1 ">Volgende</button>
                </div>
                <p className=" max-w-2xl italic">
                    <a href={link} className="underline">{title}</a> {description}
                </p>
            </article>
    );
};
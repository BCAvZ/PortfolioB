import React from 'react';
import MixB from '../../assets/pictures/MixB.PNG'
import portfolio_background_Dutch from '../../assets/pictures/portfolio_background_Dutch.png'
import Bflix from '../../assets/pictures/Bflix.PNG'

export function ProjectPreviewer({selectedProject, setSelectedProject, title, link, picture, description}) {

    function imageSelector() {
        if (selectedProject === 0){
            return Bflix
        } else if(selectedProject === 1) {
            return MixB
        } else {
            return portfolio_background_Dutch
        }
    }

    function addOrReduce(amount){
        if(selectedProject + amount <= 2 && selectedProject + amount >= 0) {
            setSelectedProject(selectedProject + amount)
        }
    }

    return (
            <article className="bg-amber-100 rounded-2xl p-2 grow-0">
                <h1 className="font-bold flex justify-center">{title}</h1>
                <div className="flex flex-row justify-evenly items-center">
                    <button onClick={(e) => addOrReduce(-1)} className="bg-amber-400 w-auto max-h-8 font-bold rounded-3xl p-1 ">Vorige</button>
                    <div className="flex justify-center sm:h-96 sm:w-96 h-2/4 w-2/4 ">
                        <a href={link} className=" ">
                            <img src={imageSelector()} alt="ApplicationPreview" className="w-full h-full object-fill" />
                        </a>
                    </div>
                    <button onClick={(e) => addOrReduce(1)} className="bg-amber-400 w-auto max-h-8 font-bold rounded-3xl p-1 ">Volgende</button>
                </div>
                <p className=" max-w-2xl italic">
                    <a href={link} className="underline">{title}</a> {description}
                </p>
            </article>
    );
}
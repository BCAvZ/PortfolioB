import React, {useState} from 'react';
import MixB from '../../assets/pictures/Preview_image_MixB.PNG'


export function Projects() {

    const [selectedProject, setSelectedProject] = useState(1);

    return (
        <section className="flex flex-col justify-center">
            <article className="flex justify-center p-2 ">
                <p className="text-slate-700 max-w-2xl">Welkom op mijn projectpagina! Hier kan je makkelijk de door mijn gemaakte applicaties vinden met een korte beschrijving van de gebruikte technieken. Klik op het plaatje om naar een applicatie te gaan!
                </p>
            </article>
            <article className="bg-amber-100 rounded-2xl p-2">
                <h1 className="font-bold flex justify-center">MixB!</h1>
                    <div className="flex flex-row justify-center">
                        <button onClick={(e) => setSelectedProject(selectedProject - 1)}>Vorige</button>
                        <div className="flex justify-center">
                            <a href="https://deft-narwhal-4151f0.netlify.app" className="w-3/5 h-auto">
                                <img src={MixB} alt="MixB"/>
                            </a>
                        </div>
                        <button onClick={(e) => setSelectedProject(selectedProject + 1)}>Volgende</button>
                    </div>
                <p className=" max-w-2xl italic">
                    MixB is een Cocktail recepten database, ontwikkeld via React, gestyled met gebruik van CSS-modules en navigeerbaar door React-Router-Dom. De recepten zelf worden opgevraagd via GET requests met behulp van Axios naar de
                    <a href="https://www.thecocktaildb.com/api.php" className="underline"> CocktailDb API </a> en de inlog en account functionaliteit werkt via React-Hook-Form.
                </p>
            </article>
        </section>
    );
}
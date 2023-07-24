import React from 'react';
import portfolio from '../../assets/pictures/portfolio_background_clean.png'

export function Home() {
    return (
            <section className="flex flex-col gap-2 text-gray-300">

                <article className="introduction-box flex justify-center">
                    <img src={portfolio}/>
                    <h1>Introduction
                        <p className="text-2xl">My name is Bart van Zanen. A 27 year old excited about software development. Why? Because it's digital creative crafting!</p>
                    </h1>
                </article>

                <article className="projects-info">
                    <p>projects info</p>
                </article>
            </section>
    );
};
import React, {useState} from 'react';
import portfolio from '../../assets/pictures/portfolio_background_Dutch.png'
import activeDoor from '../../assets/pictures/active_door.png'
import {useNavigate} from "react-router-dom";

export function Home() {

    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
            setIsVisible(!isVisible);

            setTimeout(() => {
                navigate("/Projects");
            }, 1000)
    };

    return (
            <section className="flex flex-col gap-2 ">

                <article className="introduction-box flex justify-center">
                    <div className="relative">
                        <img src={portfolio} alt="background"/>
                            <div onClick={() => handleClick()}  className="flex absolute bottom-44 left-16 h-80 w-1/4">
                                {isVisible &&  <img src={activeDoor} alt="lit up door"/>}
                            </div>
                    </div>
                </article>

            </section>
    );
}
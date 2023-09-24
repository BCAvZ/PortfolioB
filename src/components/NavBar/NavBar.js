import React, {useEffect, useState, useContext} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {Context} from "../../context/context";
import dutchFlag from "../../assets/pictures/92240_netherlands_icon.png"
import englishFlag from "../../assets/pictures/16014_england_english_flag_great britain_inghilterra_icon.png"

export function NavBar() {

    const [isActive, setIsActive] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        const currentPathInString = location.pathname;
        setIsActive(currentPathInString);
    },[location])

    const {dutch, setLanguage } = useContext(Context);

    return (
        <nav>
            <ul className="flex w-72 right-96 justify-between flex-row text-black font-bold text-xl">
                <li>
                        <NavLink to="/" end className={isActive === "/" ? "underline" : "italic"}>
                            <p>Home</p>
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/Projects" end className={isActive === "/Projects" ? "underline" : "italic"}>
                        <p>Projecten</p>
                    </NavLink>

                </li>

                <li>
                    <NavLink to="/Contact" className={isActive === "/Contact" ? "underline" : "italic"}>
                        <p>Contact</p>
                    </NavLink>
                </li>

                <li>
                    { dutch ?
                        <div>
                            <img src={dutchFlag} alt="dutch flag" onClick={setLanguage} className={"cursor-pointer"}/>
                        </div>
                        :
                        <div>
                            <img src ={englishFlag} alt="english flag" onClick={setLanguage} className={"cursor-pointer"}/>
                        </div>    }
                </li>
            </ul>
        </nav>
    );
}
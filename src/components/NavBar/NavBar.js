import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

export function NavBar() {

    const [isActive, setIsActive] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        const currentPathInString = location.pathname;
        setIsActive(currentPathInString);
    },[location])


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
            </ul>
        </nav>
    );
}
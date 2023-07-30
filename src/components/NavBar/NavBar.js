import React from 'react';
import {NavLink} from 'react-router-dom';

export function NavBar() {
    return (
        <nav>
            <ul className="flex w-72 right-96 justify-between flex-row text-black font-bold text-xl">
                <li>
                        <NavLink to="/" end>
                            <p>Home</p>
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/Projects" end>
                        <p>Projecten</p>
                    </NavLink>

                </li>

                <li>
                    <NavLink to="/Contact">
                        <p>Contact</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
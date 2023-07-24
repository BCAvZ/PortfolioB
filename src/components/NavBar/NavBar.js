import React from 'react';
import {NavLink} from 'react-router-dom';

export function NavBar() {
    return (
        <nav>
            <ul className="flex space-x-10 flex-row-auto justify-end">
                <li>
                        <NavLink to="/" end>
                            <p className="text-xl font-bold text-gray-500">Home</p>
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">
                        <p className="text-xl font-bold text-gray-500">Contact</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
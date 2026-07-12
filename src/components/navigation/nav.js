import React from 'react';
import nav from './nav.scss';
import { NavLink } from "react-router-dom";
function Nav(props) {
    return (
        <div>
            <ul>     
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>       
        </div>
    );
}

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import classes from "../../../styles/navbar.module.css";

function Navbar() {
    const pathname = useLocation().pathname
    return (
        <nav>
            <ul className={classes.navbar_style}>
                <li>
                    <Link
                        className={`${pathname === '/' ? classes.active : classes.notActive}`}
                        to="/">Accueil</Link>
                </li>
                <li>
                    <Link
                        className={`${pathname === '/About' ? classes.active : classes.notActive}`}
                        to="/About" >À propos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;




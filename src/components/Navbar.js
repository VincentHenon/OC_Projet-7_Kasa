import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <NavLink
                activeClassName="active"
                to="/" exact>
                Accueil
            </NavLink>
            <NavLink
                activeClassName="active"
                to="/about">
                À propos
            </NavLink>
        </nav>
    );
}

export default Navbar;




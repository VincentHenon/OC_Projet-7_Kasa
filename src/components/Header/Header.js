import React from "react";
import Logo from "./Logo/Logo"
import Navbar from "./Navbar/Navbar"
import classes from "../../styles/Header.module.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classes.header_cntnr_style}>
            <Link to="/">
                <Logo className={classes.logo_style} />
            </Link>
            <Navbar />
        </header>
    );
}

export default Header;
import React from "react";
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-cntnr">
            <Link to="/">
                <Logo />
            </Link>
            <Navbar />
        </header>
    );
}

export default Header;
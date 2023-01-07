import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Footer/Logo.webp";
import classes from "../../styles/Footer.module.css";

const Footer = (props) => {
    const currentYear = new Date().getFullYear();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer className={classes.cntnr_style}>
            <Link to="/" >
                <img className={classes.logo_style}
                    src={Logo}
                    alt="logo blanc sur fond noir"
                    onClick={scrollToTop} />
            </Link>
            <div className={classes.credits_style}>© {currentYear} Kasa. All rights reserved</div>
        </footer>
    )
};

export default Footer;
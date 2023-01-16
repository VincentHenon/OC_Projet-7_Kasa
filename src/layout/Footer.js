import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Footer/Logo.webp";

const Footer = (props) => {
    const currentYear = new Date().getFullYear();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer className="footer-cntnr">
            <Link to="/" >
                <img className="footer-logo"
                    src={Logo}
                    alt="logo blanc sur fond noir"
                    onClick={scrollToTop} />
            </Link>
            <div className="credits">© {currentYear} Kasa. All rights reserved</div>
        </footer>
    )
};

export default Footer;
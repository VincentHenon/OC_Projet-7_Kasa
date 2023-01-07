import React from "react";
import { Link } from "react-router-dom"
import classes from "../styles/404.module.css"


const page404 = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="classes.cntnr_style">
            <p className={classes.bigTitle_style}>404</p>
            <p className={classes.p_style}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" >
                <p className={classes.link_style} onClick={scrollToTop} >Retourner sur la page d'accueil</p>
            </Link>
        </div>
    )
};

export default page404;
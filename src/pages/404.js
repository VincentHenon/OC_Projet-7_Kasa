import React from "react"
import { Link } from "react-router-dom"

const page404 = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="classes.cntnr_style">
            <h1 className="title-404">404</h1>
            <p className="sub-404">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" >
                <p className="link-404" onClick={scrollToTop} >Retourner sur la page d'accueil</p>
            </Link>
        </div>
    )
};

export default page404;
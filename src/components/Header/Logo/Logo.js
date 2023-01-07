import React from "react";
import Logo from "../../../assets/images/Header/Logo.png"
import classes from "../../../styles/Logo.module.css"


const logo = (props) => (
    <img src={Logo} alt="logo Kasa" className={classes.logo_style} />
);

export default logo;

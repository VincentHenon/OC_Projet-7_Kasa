import React from "react";
import classes from "../../../../styles/Thumb.module.css"

const thumb = (props) => (
    <>
        <img src={props.cover} alt="logement cover" className={classes.img_style} />
        <div className={classes.gradient_style}></div>
        <h2 className={classes.title_style}>{props.title}</h2>
    </>
);

export default thumb;
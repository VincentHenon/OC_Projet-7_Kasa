import React from "react";
import classes from "../../../styles/Banner.module.css"

const banner = (props) => (
    <>
        <section className={classes.banner_style}>
            <img src={props.imageUrl} alt="banner pic" className={classes.image_style} />
            <h1 className={classes.Title_style}>{props.title}</h1>
        </section>
    </>
);

export default banner;
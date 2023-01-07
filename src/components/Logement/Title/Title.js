import React from "react";
import classes from "../../../styles/Title.module.css";

const Title = (props) => (
    <div>
        <h2 className={classes.h2_style}>{props.title}</h2>
        <h3 className={classes.h3_style}>{props.location}</h3>
    </div>
);

export default Title;
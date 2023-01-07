import React from "react";
import classes from "../../../styles/Host.module.css"

const Host = (props) => (
    <>
        <div className={classes.name_style}>{props.host.name}</div>
        {<img className={classes.face_style} src={props.host.picture} alt="host pics" />}
    </>
);

export default Host;
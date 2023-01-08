import React from "react";
import classes from "../../../styles/Host.module.css";
import "../../../styles/styles.css";

const Host = (props) => (
    <>
        <div className={` ${classes.name} fw_500 fs_18 fc_primary txt_norm txt_height `}>{props.host.name}</div>
        {<img className={classes.face} src={props.host.picture} alt="host pics" />}
    </>
);

export default Host;
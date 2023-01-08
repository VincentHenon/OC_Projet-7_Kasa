import React from "react";
import classes from "../../../styles/Title.module.css";

const Title = (props) => (
    <div>
        <h1 className={` ${classes.title} fc_primary fs_36 fw_500 txt_norm txt_height `}>{props.title}</h1>
        <p className={` ${classes.local} fc_primary fs_18 fw_500 txt_norm txt_height `}>{props.location}</p>
    </div>
);

export default Title;
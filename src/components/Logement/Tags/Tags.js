import React from "react";
import classes from "../../../styles/Tags.module.css"

const Tags = ({ tag }) => (
    <div className={` ${classes.tags} fc_light fs_14 fw_500 bgc_primary txt_height txt_norm `} >
        <p>{tag}</p>
    </div >
);

export default Tags;
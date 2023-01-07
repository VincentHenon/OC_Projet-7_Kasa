import React from "react";
import classes from "../../../styles/Tags.module.css"

const Tags = ({ tag }) => (
    <div className={classes.tags_style}>
        <p>{tag}</p>
    </div>
);

export default Tags;
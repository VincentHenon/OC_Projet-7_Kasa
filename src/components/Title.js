import React from "react";

const Title = (props) => (
    <div>
        <h1 className="h1-title">{props.title}</h1>
        <p className="location">{props.location}</p>
    </div>
);

export default Title;
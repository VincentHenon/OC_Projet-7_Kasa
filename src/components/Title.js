import React from "react";

const Title = ({ title, location }) => (
    <div>
        <h1 className="h1-title">{title}</h1>
        <p className="location">{location}</p>
    </div>
);

export default Title;
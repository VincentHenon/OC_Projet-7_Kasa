import React from "react";

const Host = (props) => (
    <div className="cntnr-name-img">
        <div className="name">{props.host.name}</div>
        <img className="img" src={props.host.picture} alt="host pics" />
    </div>
);

export default Host;
import React from "react";

const Host = ({ host }) => (
    <div className="cntnr-name-img">
        <div className="name">{host.name}</div>
        <img className="img" src={host.picture} alt="host pics" />
    </div>
);

export default Host;
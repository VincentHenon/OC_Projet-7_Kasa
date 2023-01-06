import React from "react";

const Host = (props) => (
    <>
        <div>Name: {props.host.name}</div>
        {<img src={props.host.picture} alt="host pics" />}
    </>
);

export default Host;
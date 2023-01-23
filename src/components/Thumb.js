import React from "react";

const thumb = ({ cover, title }) => (
    <>
        <img src={cover} alt="logement cover" className="thumb-img" />
        <div className="thumb-gradient"></div>
        <h2 className="thumb-title">{title}</h2>
    </>
);

export default thumb;
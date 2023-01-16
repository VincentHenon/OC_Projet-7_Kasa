import React from "react";

const thumb = (thumb) => (
    <>
        <img src={thumb.cover} alt="logement cover" className="thumb-img" />
        <div className="thumb-gradient"></div>
        <h2 className="thumb-title">{thumb.title}</h2>
    </>
);

export default thumb;
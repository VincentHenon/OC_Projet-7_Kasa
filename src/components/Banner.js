import React from "react";

const banner = ({ imageUrl, title }) => (
    <>
        <section className="banner-cntnr">
            <img src={imageUrl} alt="banner pic" className="banner-img" />
            <h1 className="banner-title">{title}</h1>
        </section>
    </>
);

export default banner;
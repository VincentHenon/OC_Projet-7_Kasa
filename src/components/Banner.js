import React from "react";

const banner = (props) => (
    <>
        <section className="banner-cntnr">
            <img src={props.imageUrl} alt="banner pic" className="banner-img" />
            <h1 className="banner-title">{props.title}</h1>
        </section>
    </>
);

export default banner;
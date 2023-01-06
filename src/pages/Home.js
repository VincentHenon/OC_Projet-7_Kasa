import React from "react";
import Banner from "../components/Home/Banner/Banner"
import Gallery from "../components/Home/Gallery/Gallery"
import classes from "../styles/Home.module.css"
import bannerImage from "../assets/images/Banner/Banner_1.webp"

const home = () => (

    <>
        <Banner imageUrl={bannerImage}
            title="Chez vous, partout et ailleurs" />
        <Gallery className={classes.gallery_style} />
    </>
);

export default home;
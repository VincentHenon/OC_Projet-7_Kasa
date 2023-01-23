import React from "react";
import Banner from "../components/Banner"
import Gallery from "../components/Gallery"
import bannerImage from "../assets/images/Banner/Banner_1.webp"

const home = () => (
    <>
        <Banner imageUrl={bannerImage}
            title="Chez vous, partout et ailleurs"
        />
        <Gallery className="gallery" />
    </>
);

export default home;
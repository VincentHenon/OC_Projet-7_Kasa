import React, { Component } from "react";
import { Link } from "react-router-dom"
import Thumb from "./Thumb/Thumb"
import classes from "../../../styles/Gallery.module.css"
import logements from "../../../assets/Json/logements.json"
//import classes from "../../Logement/"
//import axios from "axios"


class Gallery extends Component {
    render() {
        return (
            <section>
                <div className={classes.gallery_style}>
                    {logements.map(loc => (
                        <div key={loc.id} className={classes.thumb_style}>
                            <Link to={`../../Logement/${loc.id}`}>
                                <Thumb
                                    cover={loc.cover}
                                    title={loc.title}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
};

export default Gallery;
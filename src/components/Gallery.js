//import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Thumb from "./Thumb"
import logements from "../assets/json/logements.json"
//import fetch from "file-fetch" 
//NE MARCHE PAS 
//import axios from "axios" 
//N'ARRIVE PAS TROUVER LE FICHIER JSON????



function Gallery() {
    return (
        <section>
            <div className="gallery-cntnr">
                {logements.map(loc => (
                    <div className="thumb" key={loc.id} >
                        <Link to={`../../logements/${loc.id}`}>
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

export default Gallery;
import React from 'react';
import { useParams } from "react-router-dom"
import Carroussel from '../components/Logement/Carroussel/Carroussel';
import Title from '../components/Logement/Title/Title';
import Host from '../components/Logement/Host/Host';
import Ratings from '../components/Logement/Ratings/Ratings';
import Tags from '../components/Logement/Tags/Tags';
import Dropdown from '../components/Logement/Dropdown/Dropdown';
import logements from '../assets/Json/logements.json';
import classes from "../styles/Logements.module.css";

function Logement() {
    const { id } = useParams();
    const loc = logements.find(loc => loc.id === id);

    return (
        <div>
            <Carroussel pics={loc.pictures.map(pic => {
                return (
                    <img src={pic} alt="alt" />
                )
            })} />
            <div className={classes.cntnr_title_style}>
                <Title title={loc.title} location={loc.location} />

                <div className={classes.ctnr_ratings_style}>
                    <div className={classes.cntnr_host_style}>
                        <Host host={loc.host} />
                    </div>
                    <Ratings rating={loc.rating} />
                </div>

            </div>
            <div className={classes.ctnr_tags_style}>
                {loc.tags.map((tag, index) => (
                    <Tags key={index} tag={tag} />
                ))}
                <div />
            </div>
            <div className="container-flex">
                <Dropdown
                    title="Description"
                    content={loc.description}
                />
                <Dropdown
                    title="Équipements"
                    content={loc.equipments.map(line => {
                        return (
                            <li className="">{line}</li>
                        )
                    })}
                />
            </div>

        </div>
    );
}

export default Logement;

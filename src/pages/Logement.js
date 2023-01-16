import React from 'react';
import { useParams, Link } from "react-router-dom"
import Carroussel from '../components/Carroussel';
import Title from '../components/Title';
import Host from '../components/Host';
import Ratings from '../components/Ratings';
import Tags from '../components/Tags';
import Dropdown from '../components/Dropdown';
import logements from '../assets/json/logements.json';

function Logement() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);
    if (!logement) {
        console.log("la recherche de l'ID n'a pas abouti car logement est = " + logement)
        return <Link to="/404" />;
    } else {
        return (
            <div>
                <Carroussel pics={logement.pictures} />
                <div className="cntnr-title-location-tags-host-ratings">
                    <div className="cntr-title-location-tags">
                        <Title
                            className="title"
                            title={logement.title}
                            location={logement.location}
                        />
                        <div className="cntnr-tags">
                            {logement.tags.map(tag => (
                                <Tags key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="cntnr-host-ratings">
                        <Host
                            className="host"
                            host={logement.host}
                        />
                        <Ratings
                            className="ratings"
                            rating={logement.rating}
                        />
                    </div>

                </div>
                <div className="container-flex">
                    <Dropdown
                        title="Description"
                        content={logement.description}
                        titleClass={"logement-title"}
                        contentClass={"logement-content"}

                    />
                    <Dropdown
                        title="Équipements"
                        content={logement.equipments.map(line => {
                            return (
                                <li key={line} className="">{line}</li>
                            )
                        })}
                        titleClass={"logement-title"}
                        contentClass={"logement-content"}
                    />
                </div>

            </div>
        );
    }
}

export default Logement;

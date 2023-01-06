import React from 'react';
import { useParams } from "react-router-dom"
import Carroussel from '../components/Logement/Carroussel/Carroussel';
import Title from '../components/Logement/Title/Title';
import Host from '../components/Logement/Host/Host';
import Ratings from '../components/Logement/Ratings/Ratings';
import Tags from '../components/Logement/Tags/Tags';
import Dropdown from '../components/Logement/Dropdown/Dropdown';
import logements from '../assets/Json/logements.json';

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
            <div>
                <Title title={loc.title} location={loc.location} />
                <Host host={loc.host} />
            </div>
            <div>
                <Ratings rating={loc.rating} />
                <Tags tags={loc.tags.map(tag => {
                    return (
                        <span>{tag}</span>
                    )
                })} />
            </div>
            <div className="container-flex">
                <Dropdown
                    title="description"
                    content={loc.description}
                />
                <Dropdown
                    title="equipements"
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

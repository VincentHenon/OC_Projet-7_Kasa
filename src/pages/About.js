import React from "react";
import bannerImage from "../assets/images/Banner/Banner_3.webp";
import Banner from "../components/Home/Banner/Banner";
import classes from "../styles/About.module.css";
import Dropdown from "../components/Logement/Dropdown/Dropdown";

const fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const sécurité = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

const About = () => (
    <div>
        <Banner imageUrl={bannerImage} title="" className={classes.style} />
        <Dropdown title="Fiabilité" content={fiabilité} />
        <Dropdown title="Respect" content={respect} />
        <Dropdown title="Service" content={service} />
        <Dropdown title="Sécurité" content={sécurité} />
    </div>
);

export default About;
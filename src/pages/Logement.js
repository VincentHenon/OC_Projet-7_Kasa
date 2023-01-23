import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import Carroussel from '../components/Carroussel'
import Title from '../components/Title'
import Host from '../components/Host'
import Ratings from '../components/Ratings'
import Tags from '../components/Tags'
import Dropdown from '../components/Dropdown'

function Logement() {
    const { id } = useParams()
    const [logement, setLogement] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch("/json/logements.json")
                const logements = await response.json()
                const logement = logements.find((logement) => logement.id === id)
                if (!logement) {
                    navigate("/404")
                }
                setLogement(logement)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [id, navigate])

    if (loading) return (
        <div style={{ textAlign: "center", fontSize: "24px", color: "#FF6060", margin: "auto" }}>
            <p>Chargement des données...</p>
            <p>Veuillez patientez</p>
        </div>
    )
    if (logement)
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
                        titleClass={"logement-title"}
                        contentClass={"logement-content"}
                    >
                        {logement.description}
                    </Dropdown>
                    <Dropdown
                        title="Équipements"
                        titleClass={"logement-title"}
                        contentClass={"logement-content"}
                    >
                        {logement.equipments.map(line => {
                            return (
                                <li key={line} className="">{line}</li>
                            )
                        })}
                    </Dropdown>
                </div>
            </div>
        );
    else return (
        <div style={{ textAlign: "center", fontSize: "24px", color: "#FF6060", margin: "auto" }}>
            <p>Le chargement des données a échoué... 😕 </p>
            <p>Veuillez recharger cette page plus tard.</p>
        </div>
    )
}

export default Logement
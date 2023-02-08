import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Thumb from "./Thumb"

function Gallery() {
    const [logements, setLogements] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {

        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch('/json/logements.json')
                const data = await response.json()
                setLogements(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) return (
        <div style={{ textAlign: "center", fontSize: "24px", color: "#FF6060", margin: "auto" }}>
            <p>Chargement des données...</p>
            <p>Veuillez patientez</p>
        </div>
    )

    return (
        <section>
            <div className="gallery-cntnr">
                {
                    logements ?
                        logements.map(loc => (
                            <div className="thumb" key={loc.id} >
                                <Link to={`/logements/${loc.id}`}>
                                    <Thumb
                                        cover={loc.cover}
                                        title={loc.title}
                                    />
                                </Link>
                            </div>
                        ))

                        :

                        <div style={{ textAlign: "center", fontSize: "24px", color: "#FF6060", margin: "auto" }}>
                            <p>Le chargement des données a échoué... 😕 </p>
                            <p>Veuillez recharger cette page plus tard.</p>
                        </div>
                }
            </div>
        </section>
    )
}

export default Gallery
import React from "react"
import { Link } from "react-router-dom";
import "../../App.css"
import "../LandingPage/LandingPage.css"

const LandingPage = () => {


    return (
        <>
        <div className="backgroundImg " >
            <h1>NOVACLIMB</h1>
            <h2>INNOVACIÓN EN ALTURA</h2>
            <h2>Diseño, técnica y seguridad</h2>
            <Link to = {'/nosotros'}><button className="primaryButton">Conocenos</button></Link>
        </div>
        
        </>
    )
}

export default LandingPage
import React from "react";
import { Link } from "react-router-dom";

function Haas() {
    return (
        <>
            <div>
                <h1>Haas</h1>
                <label><Link to="/team">Regresar a Escuderias</Link></label>
            </div>
        </>
    );
}
export default Haas;
import React from "react";
import { Link } from "react-router-dom";

function RedBull() {
    return (
        <>
            <div>
                <h1>Red Bull</h1>
                <label><Link to="/team">Regresar a Escuderias</Link></label>
            </div>
        </>
    );
}
export default RedBull;
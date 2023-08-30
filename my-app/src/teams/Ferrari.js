import React from "react";
import { Link } from "react-router-dom";

function Ferrari() {
    return (
        <>
            <div>
                <h1>Ferrari</h1>
                <label><Link to="/team">Regresar a Escuderias</Link></label>
            </div>
        </>
    );
}
export default Ferrari;
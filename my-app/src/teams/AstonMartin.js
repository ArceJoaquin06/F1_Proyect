import React from "react";
import { Link } from "react-router-dom";

function AstonMartin() {
    return (
        <>
            <div>
                <h1>Aston Martin</h1>
                <label><Link to="/team">Regresar a Escuderias</Link></label>
            </div>
        </>
    );
}
export default AstonMartin;
import React from "react";
import { Link } from "react-router-dom";

function AlphaTauri() {
    return (
        <>
            <div>
                <h1>AlphaTauri</h1>
                <label><Link to="/team">Regresar a Escuderias</Link></label>
            </div>
        </>
    );
}
export default AlphaTauri;
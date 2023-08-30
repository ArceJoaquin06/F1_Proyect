import React from "react";
import { Link } from "react-router-dom";

function Alpine() {
    return (
        <>
            <div>
                <h1>Alpine</h1>
                <label><Link to="/team">Regresar a Escuderias</Link></label>
            </div>
        </>
    );
}
export default Alpine;
import React from "react";
import { Link } from "react-router-dom";

function McLaren() {
    return (
        <>
            <div>
                <h1>McLaren</h1>
                <label><Link to="/team">Regresar a Escuderias</Link></label>
            </div>
        </>
    );
}
export default McLaren;
import React from "react";
import { Link } from "react-router-dom";


function AlfaRomeo() {
    return (
        <>
            <div>
                <h1>Alfa Romeo</h1>
                <label><Link to="/team">Regresar a Escuderias</Link></label>
            </div>
        </>
    );
}
export default AlfaRomeo;
import React from "react";
import { Link } from "react-router-dom";

function Mercedes() {
    return (
        <>
            <div>
                <h1>Mercedes</h1>
                <label><Link to="/team">Regresar a Escuderias</Link></label>
            </div>
        </>
    );
}
export default Mercedes;
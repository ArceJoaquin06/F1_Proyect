import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import './css/Pilotos.css';


function Pilotos() {
    const [pilotList, setPilotList] = useState([]);

    function agregarUsuario() {
        axios.get("https://ergast.com/api/f1/2023/drivers.json")
            .then((response) => setPilotList(response.data.MRData.DriverTable.Drivers))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        agregarUsuario();
        console.log(pilotList);
    })
    return (
        <>
            <div className="container">
                <h1>F1 Page</h1>
                <h2>Pilotos</h2>
                {pilotList.map((usuario) =>
                    <div className="pilotos-container">
                        <label>{usuario.givenName} {usuario.familyName}</label>
                    </div>)}
            </div>
            
        </>
    );

}

export default Pilotos;
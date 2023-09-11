import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import './css/Pilotos.css';
import Drivers from "./UserPilots";


function Pilotos() {
    const [pilotList, setPilotList] = useState([]);
    
    function agregarUsuario() {
        axios.get("https://ergast.com/api/f1/2023/drivers.json")
            .then((response) => setPilotList(response.data.MRData.DriverTable.Drivers))
            .catch((error) => console.log(error))
    }
//29 
    useEffect(() => {
        agregarUsuario();
        console.log(pilotList);
    })

    return (
        <>
            <div className="fondo-pil">
                <h1 className="titulo-pil">F1 Page</h1>
                <h2 className="titulo-pil">Pilotos</h2>
                {pilotList.map((usuario) => <Drivers data={usuario}/>)}
                    
            </div>
        </>
    );

}

export default Pilotos;
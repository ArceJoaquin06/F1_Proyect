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
                <h1 className="titulo-pil">Bienvenidos amigos de América</h1>
                <h4 className="textPil"><i>Esta es nuestra página de Formula 1, nuestra pasión por esta competición se refleja en cada link de este sitio web, y estamos emocionados de compartir esta pasión contigo. Únete a nosotros en este viaje emocionante por el mundo de la Fórmula 1 y sé parte de la comunidad de entusiastas más apasionados del automovilismo.</i></h4>
                <h2 className="titulo-pil1">Pilotos</h2>
                <div className="contacard">
                    {pilotList.map((usuario) => <Drivers data={usuario}/>)}
                </div>

                    
            </div>
        </>
    );

}

export default Pilotos;
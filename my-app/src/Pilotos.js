import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';


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
            <div>
                <h1>F1 page</h1>
                {pilotList.map((usuario) =>
                    <div>
                        <label>{usuario.givenName}</label>
                        <label>{usuario.familyName}</label>
                    </div>)}
            </div>
            
        </>
    );

}

export default Pilotos;
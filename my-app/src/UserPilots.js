import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

function Drivers(props){

    const [fotopilot, setfotopilot] = useState([]);

    async function ImagenesPilots() {
        axios.get("https://en.wikipedia.org/w/api.php", {params: {
            "action": "query",
            "titles": "Fernando_Alonso",
            "prop":"pageimages",
            "format":"json",
            "pithumbsize":"200",
        }}
        )
            .then((response) => {setfotopilot(response.pages.thumbnail.source); console.log(response.pages.thumbnail.source)})
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        ImagenesPilots();

    })
    
    return(
        <>
      <ul>
        <div>Nombre: {props.data.givenName}</div>
        <div>Apellido: {props.data.familyName}</div>
        <div>Numero: {props.data.permanentNumber}</div>
        <div>Nacionalidad: {props.data.nationality}</div>
        <div>Fecha: {props.data.dateOfBirth}</div>
        {/* <img src={fotopilot}></img> */}
      </ul>
      </>
    );
}


export default Drivers;
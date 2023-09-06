import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

function Drivers(props){
    const [fotopilot, setfotopilot] = useState([]);

    function obtenerPagina(){
      
    }

    async function ImagenesPilots() {
        axios.get("https://en.wikipedia.org/w/api.php", {params: {
            "action": "query",
            "origin": "*",
            "titles": obtenerPagina(props.data.url),
            "prop":"pageimages",
            "format":"json",
            "pithumbsize":"200",
        }}
        )
            .then((response) => {setfotopilot(response.data.query.pages[240390].thumbnail.source)})
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
        <img src={fotopilot}></img> 
      </ul>
      </>
    );
}


export default Drivers;
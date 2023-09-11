import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import './css/UserPilots.css';

function Drivers(props){
    const [fotopilot, setfotopilot] = useState([]);
    
    function obtenerPagina(){
        const urlCompleta = props.data.url;
        const urlRecortada = urlCompleta.substring(29);

        return urlRecortada;
    }

    async function ImagenesPilots() {
        axios.get("https://en.wikipedia.org/w/api.php", {params: {
            "action": "query",
            "origin": "*",
            "titles": obtenerPagina(),
            "prop":"pageimages",
            "format":"json",
            "pithumbsize":"200",
        }}
        )
        .then((response) => {
            const pages = response.data.query.pages;
            const imageSources = [];
      
            // Itera a través de todas las páginas y recopila las fuentes de las imágenes
            for (const pageId in pages) {
              const page = pages[pageId];
              if (page.thumbnail && page.thumbnail.source) {
                imageSources.push(page.thumbnail.source);
              }
            }
      
            // Establece las fuentes de las imágenes en el estado
            setfotopilot(imageSources);
          })
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        ImagenesPilots();
        obtenerPagina();

    })
    
    return(
        <>
      <div className="card">
      <div>
        <img src={fotopilot}></img>
        </div> 
        <div>Nombre: {props.data.givenName} {props.data.familyName}</div>
        <div>Numero: {props.data.permanentNumber}</div>
        <div>Nacionalidad: {props.data.nationality}</div>
        <div>Fecha: {props.data.dateOfBirth}</div>
        
      </div>
      </>
    );
}


export default Drivers;
import React from "react";
import { useEffect } from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './teams-css/AlphaTauri.css';
import 'animate.css';

const Botonregresar = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

function AlphaTauri() {

    const [AlphaList, SetAlphaList] = useState([]);

    function agregarCircuito() {
        axios.get("http://ergast.com/api/f1/2023/circuits.json")
            .then((response) => SetAlphaList(response.data.MRData.CircuitTable.Circuits))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        agregarCircuito();
        console.log(AlphaList);

    })

    return (
        <>
        <div className="fondo">
            <div>
                <h1 className="titulo">Alpha Tauri</h1>
                <h3 className="texto">Esta escuderia fue comprada por Red Bull en 2005 como equipo secundario, para jovenes 
                pilotos promesas, su nombre original era "Toro Rosso". En esta escuderia han competido
                Sebastian Vettel, Max Verstappen, Carlos Sainz, Daniel Ricciardo, entre muchos otros pilotos. 
                </h3>
                <h1 className="subtitulo">Monoplaza</h1>
                <h3 className="texto">El monoplaza Actual de esta escuderia es el AT04</h3>
                <div className="imagen-centar">
                    <img className="imagen-AT04" src="https://scuderia.alphatauri.com/wp-content/uploads/2023/02/photo-hotspot-horizontal-2023_KrbRsyk5Vf27.png" alt=""></img>
                </div>
                <h3 className="subtitulo0"> Los pilotos actules son:</h3>
                <div className="contaPilot">
                    <img className="imagen-yuki" class="animate__animated animate__slideInLeft" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5652.png&w=350&h=254" alt=""></img>
                    <img className="imagen-liam" class="animate__animated animate__slideInRight"  src="https://i.ibb.co/6vbH8M5/Liam-Lawsinropa2.png" alt=""></img>
                </div>
                <div>
                    <div className="contaTitle">
                        <h4 className="titulo-yuki">Yuki Tsunoda</h4>
                        <h4 className="titulo-liam">Liam Lawson</h4>
                    </div>
                    <div className="contaText">
                        <div className="texto-yuki">
                            <h4>Podios: 0</h4>
                            <br></br>
                            <h4>Debut: 2021</h4>
                            <br></br>
                            <h4>Carreras: 58</h4>
                            <br></br>
                            <h4>Mejor puesto: 4°</h4>
                        </div>
                        <div className="texto-liam">
                            <h4>Podios: 0</h4>
                            <br></br>
                            <h4>Debut: 2023</h4>
                            <br></br>
                            <h4>Carreras: 2</h4>
                            <br></br>
                            <h4>Mejor puesto: 13°</h4>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <div className="xd">
                <label><Link className="boton-return" style={Botonregresar} to="/team">Regresar a Escuderias</Link></label>
                </div>
            </div>
        </div>
        </>
    );
}
export default AlphaTauri;
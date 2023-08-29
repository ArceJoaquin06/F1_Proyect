import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import './css/Circuito.css';

function Circuito() {
    const [circuitList, SetCircuitList] = useState([]);

    function agregarCircuito() {
        axios.get("http://ergast.com/api/f1/2023/circuits.json")
            .then((response) => SetCircuitList(response.data.MRData.CircuitTable.Circuits))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        agregarCircuito();
        console.log(circuitList);

    })
    return (
        <div className="container">
            <h1 className="titulo">Circuitos de 2023</h1>
            <div className="texto-container">
                {circuitList.map((usuario) =>
                <div className="texto" key={usuario.id}>   
                    <label>{usuario.circuitName}</label>
                    <br></br>
                </div>)}
            </div>
        </div>
    );
}

export default Circuito;
import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

function Campeonatos() {
    /*[season, setSeason] = useState({
        2010:[],
        2011:[],
        2012:[],
        2013:[],
        2014:[],
        2015:[],
        2016:[],
        2017:[],
        2018:[],
        2019:[],
        2020:[],
        2021:[],
        2022:[],
    });
    setSeason(...Season, [<año>]:[<datos>]);
    */

    const [championshipList, setChampionshipList] = useState([]);

    function agregarCampeonato() {
        axios.get("http://ergast.com/api/f1/2010/driverStandings.json")
            .then((response) => console.log(response.data.MRData.StandingsTable.StandingsLists[0]))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        agregarCampeonato();
        console.log(championshipList);
    })
    
    return (
        <>
            <div>
                <h1>F1 campeonatos</h1>
                {championshipList.map((usuario) =>
                <div>
                    <label>{usuario.driverId}</label>
                </div>)}
            </div>
        </>
    );

}

export default Campeonatos;
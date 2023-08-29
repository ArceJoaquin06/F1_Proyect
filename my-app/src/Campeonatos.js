import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

function Campeonatos() {
    
    const [championship2010List, SetChampionship2010List] = useState([]);
    const [championship2011List, SetChampionship2011List] = useState([]);
    const [championship2012List, SetChampionship2012List] = useState([]);
    const [championship2013List, SetChampionship2013List] = useState([]);
    const [championship2014List, SetChampionship2014List] = useState([]);
    const [championship2015List, SetChampionship2015List] = useState([]);
    const [championship2016List, SetChampionship2016List] = useState([]);
    const [championship2017List, SetChampionship2017List] = useState([]);
    const [championship2018List, SetChampionship2018List] = useState([]);
    const [championship2019List, SetChampionship2019List] = useState([]);
    const [championship2020List, SetChampionship2020List] = useState([]);
    const [championship2021List, SetChampionship2021List] = useState([]);
    const [championship2022List, SetChampionship2022List] = useState([]);

    function agregarCampeonato() {
        axios.get("http://ergast.com/api/f1/2010/driverStandings.json")
            .then((response) => SetChampionship2010List(response.data.MRData.StandingsTable.StandingsLists.DriverStandings.Driver))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        agregarCampeonato();
        console.log(championship2010List);
    })
    
    return (
        <>
            <div>
                <h1>F1 campeonatos</h1>
                {championship2010List.map((usuario) =>
                <div>
                    <label>{usuario.driverId}</label>
                </div>)}
            </div>
        </>
    );

}

export default Campeonatos;
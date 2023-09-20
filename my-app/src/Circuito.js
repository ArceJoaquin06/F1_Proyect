import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Annotation, ZoomableGroup } from "react-simple-maps"
import './css/Circuito.css';
import { Tooltip as ReactTooltip } from "react-tooltip";

function Circuito() {
    const carreras = [
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/243.svg"),
      circuitName: {circuitName},
      circuitNumber: 1,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/7104.svg"),
      circuitName: {circuitName},
      circuitNumber: 2,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/241.svg"),
      circuitName: {circuitName},
      circuitNumber: 3,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/402.svg"),
      circuitName: {circuitName},
      circuitNumber: 4,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/7105.svg"),
      circuitName: {circuitName},
      circuitNumber: 5,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/255.svg"),
      circuitName: {circuitName},
      circuitNumber: 6,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/238.svg"),
      circuitName: {circuitName},
      circuitNumber: 7,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/51.svg"),
      circuitName: {circuitName},
      circuitNumber: 8,
     },     
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/275.svg"),
      circuitName: {circuitName},
      circuitNumber: 9,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/254.svg"),
      circuitName: {circuitName},
      circuitNumber: 10,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/234.svg"),
      circuitName: {circuitName},
      circuitNumber: 11,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/257.svg"),
      circuitName: {circuitName},
      circuitNumber: 12,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/404.svg"),
      circuitName: {circuitName},
      circuitNumber: 13,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/259.svg"),
      circuitName: {circuitName},
      circuitNumber: 14,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/247.svg"),
      circuitName: {circuitName},
      circuitNumber: 15,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/408.svg"),
      circuitName: {circuitName},
      circuitNumber: 16,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/253.svg"),
      circuitName: {circuitName},
      circuitNumber: 17,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/50.svg"),
      circuitName: {circuitName},
      circuitNumber: 18,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/278.svg"),
      circuitName: {circuitName},
      circuitNumber: 19,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/7109.svg"),
      circuitName: {circuitName},
      circuitNumber: 20,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/248.svg"),
      circuitName: {circuitName},
      circuitNumber: 21,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/293.svg"),
      circuitName: {circuitName},
      circuitNumber: 22,
     },
     {
      circuitId: url("https://a.espncdn.com/i/venues/f1/circuit-info/293.svg"),
      circuitName: {circuitName},
      circuitNumber: 23,
     },
    ]
   
    const [circuitList, SetCircuitList] = useState([]);
    const [content, setcontent] = useState([]);
    const [imagenes, setimagenes] = useState([]);

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

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
      <>
        <ComposableMap>
        
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo}/>
              ))
            }
          </Geographies>
          {circuitList.map((circuit) => (
            <Marker 
                    key={circuit.circuitId} 
                    coordinates={[circuit.Location.long, circuit.Location.lat,]}
                    data-tooltip-id="circuit"
                    onMouseEnter={() => {
                     setcontent(circuit);
                     setimagenes(carreras);
                    }}
                    onMouseLeave={() => {
                      setcontent("");
                      setimagenes("");
                    }}
                    style={{
                       hover: {
                             fill: "#F53",
                             outline: 'none',
                         },
                    }}
             >
                <circle  

                r={5}
                fill="#F00" 
                stroke="#fff" 
                strokeWidth={1} 
                />
                
                

            </Marker>
            
          ))}
        </ComposableMap>
        <ReactTooltip
        id="circuit"
        content={content.carrears.circuitName}
        
        place="bottom"
      />
      </>
      )
    }

export default Circuito;
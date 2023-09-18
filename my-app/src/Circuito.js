import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Annotation, ZoomableGroup } from "react-simple-maps"
import './css/Circuito.css';
import ReactTooltip from "react-tooltip";

function Circuito() {

    const Markers = [
      {
        markerOffset: -15,
        name: "Sau Paulo",
        coordinates: [-58.3816, -34.6037],
      },
      {
        markerOffset: 25,
        name: "San Francisco",
        coordinates: [-122.419418, 37.774929],
      },
    ]

    const [circuitList, SetCircuitList] = useState([]);
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
        //<ReactTooltip>{content}</ReactTooltip>
        <ComposableMap>
        
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo}/>
              ))
            }
          </Geographies>
          {circuitList.map((circuit) => (
            <Marker key={circuit.circuitId} 
                    coordinates={[circuit.Location.long, circuit.Location.lat,]} 
                    onMouseEnter={() => {
                        setcontent(circuit.circuitName)
                    }}
                    onMouseLeave={() => {
                        setcontent("");
                    }}
                    style={{
                        hover: {
                            fill: "#F53",
                            outline: none,
                        },
                    }}
             >
                <circle r={5} fill="#F00" stroke="#fff" strokeWidth={1} />
            </Marker>
          ))}
        </ComposableMap>
      )
    }

export default Circuito;
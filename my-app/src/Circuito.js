import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Annotation, ZoomableGroup } from "react-simple-maps"
import './css/Circuito.css';
import { Tooltip as ReactTooltip } from "react-tooltip";

function Circuito() {
    const carreras = {
      albert_park: "https://a.espncdn.com/i/venues/f1/circuit-info/241.svg",
      americas: "https://a.espncdn.com/i/venues/f1/circuit-info/253.svg",
      bahrain: "https://a.espncdn.com/i/venues/f1/circuit-info/243.svg",
      baku: "https://a.espncdn.com/i/venues/f1/circuit-info/402.svg",
      catalunya: "https://a.espncdn.com/i/venues/f1/circuit-info/238.svg",
      hungaroring: "https://a.espncdn.com/i/venues/f1/circuit-info/234.svg",
      interlagos: "https://a.espncdn.com/i/venues/f1/circuit-info/278.svg",
      jeddah: "https://a.espncdn.com/i/venues/f1/circuit-info/7104.svg",
      losail: "https://a.espncdn.com/i/venues/f1/circuit-info/408.svg",
      marina_bay: "https://a.espncdn.com/i/venues/f1/circuit-info/247.svg",
      miami: "https://a.espncdn.com/i/venues/f1/circuit-info/7105.svg",
      monaco: "https://a.espncdn.com/i/venues/f1/circuit-info/255.svg",
      monza: "https://a.espncdn.com/i/venues/f1/circuit-info/259.svg",
      red_bull_ring: "https://a.espncdn.com/i/venues/f1/circuit-info/275.svg",
      rodriguez: "https://a.espncdn.com/i/venues/f1/circuit-info/50.svg",
      silverstone: "https://a.espncdn.com/i/venues/f1/circuit-info/254.svg",
      spa: "https://a.espncdn.com/i/venues/f1/circuit-info/257.svg",
      suzuka: "https://a.espncdn.com/i/venues/f1/circuit-info/235.svg",
      vegas: "https://a.espncdn.com/i/venues/f1/circuit-info/7109.svg",
      villeneuve: "https://a.espncdn.com/i/venues/f1/circuit-info/51.svg",
      yas_marina: "https://a.espncdn.com/i/venues/f1/circuit-info/248.svg",
      zandvoort: "https://a.espncdn.com/i/venues/f1/circuit-info/404.svg"
    }

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
        <ComposableMap className="container1">
        
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
                             fill: "#000000",
                             outline: 'none',
                         },
                    }}
             >
                <circle
                  r={5}
                  fill="#ff8000" 
                  stroke="#fff" 
                  strokeWidth={1} 
                />
            </Marker>
          ))}
        </ComposableMap>
        <ReactTooltip
          id="circuit"
          place="bottom"
        >
          {content && (
            <div>
              <img src={carreras[content.circuitId]} alt={`Circuito ${content.circuitName}`} />
              <p>{content.circuitName}</p>
            </div>
          )}
        </ReactTooltip>
      </>
      )
    }

export default Circuito;

//timelap de los circuitos en el tiempo
//https://codepen.io/GreenSock/pen/YzxpXXM
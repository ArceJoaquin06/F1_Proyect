import React from "react";
import { Link } from "react-router-dom";
import './teams-css/Haas.css';

function Haas() {
  
    const Botonregresar5 = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      };
  
      
    return (
        <>
          <div className="fondo5">
            <div>
                <h1 className="titulo5">Haas</h1>
                <h3 className="texto5">La escuderia americana comenzaria su camino en este deporte en 2016 de mano de Romain Grosjean y Esteban
                Gutierrez, esta joven escuderia, no cuenta con ninguna victoria, ni podio en su corta trayecoria, lo mas importante que han
                conseguido fue la pole de Magnussen en brazil. No ha tenido pilotos de mucho renombre. en ella a debutado el hijo de Michael Schumacher
                , Mick Schumacher.
                </h3>
                <h1 className="subtitulo5">Monoplaza</h1>
                <h3 className="texto5">El monoplaza Actual de esta escuderia es el VF</h3>
                <div className="imagen-centar5">
                    <img className="imagen-VF" src="https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/haas-vf-23-f1-2023-soymotor_0.png?h=31f20df5&itok=YJzgpIwc" alt=""></img>
                </div>
                <h3 className="subtitulo5"> Los pilotos actules son:</h3>
                <div>
                    <img className="imagen-hulk" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4396.png&w=350&h=254" alt=""></img>
                    <img className="imagen-magn" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4623.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div>
                        <h4 className="titulo-hulk">Nico Hulkenberg</h4>
                        <h4 className="titulo-magn">Kevin Magnussen</h4>
                    </div>
                    <h4 className="texto-hulk">Podios: 0</h4>
                    <h4 className="texto-magn">Podios: 1</h4>
               
                    <h4 className="texto-hulk">Debut: 2010</h4>
                    <h4 className="texto-magn">Debut: 2014</h4>
                
                    <h4 className="texto-hulk">Carreras: 198</h4>
                    <h4 className="texto-magn">Carreras: 158</h4>
                
                    <h4 className="texto-hulk">Mejor puesto: 4°</h4>
                    <h4 className="texto-magn">Mejor puesto: 2°</h4>
                </div>

                <br></br>
                <br></br>
                <label><Link style={Botonregresar5} to="/team">Regresar a Escuderias</Link></label>
            </div>
        </div>
        </>
    );
}
export default Haas;
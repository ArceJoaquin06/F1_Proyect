import React from "react";
import { Link } from "react-router-dom";
import './teams-css/Mercedes.css';
import 'animate.css';

function Mercedes() {

    const Botonregresar7 = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      };
  
      
    return (
        <>
          <div className="fondo7">
            <div>
                <h1 className="titulo7">Mercedes</h1>
                <h3 className="texto7">Que no se puede decir de mercedes, ha dominado practicamente todos los años de los 2010 en adelante, con algunas excepciones, 
                obteniendo 7 campeonatos de pilotos (1 de Nico Rosberg y 6 de Lewis Hamilton) desde 2014 hasta 2020.
                </h3>
                <h1 className="subtitulo7">Monoplaza</h1>
                <h3 className="texto7">El monoplaza Actual de esta escuderia es el W14</h3>
                <div className="imagen-centar7">
                    <img className="imagen-W14" src="https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/mercedes-w14-f1-2023-soymotor.png?h=31f20df5&itok=ZbfSsEJL" alt=""></img>
                </div>
                <h3 className="subtitulo6"> Los pilotos actules son:</h3>
                <div className="contaPilot">
                    <img className="imagen-ham" class="animate__animated animate__slideInLeft" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/868.png&w=350&h=254" alt=""></img>
                    <img className="imagen-rus" class="animate__animated animate__slideInRight" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5503.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div>
                        <h4 className="titulo-ham">Lewis Hamilton</h4>
                        <h4 className="titulo-rus">George Russell</h4>
                    </div>
                    <h4 className="texto-ham">Podios: 195</h4>
                    <h4 className="texto-rus">Podios: 10</h4>
               
                    <h4 className="texto1-ham">Debut: 2007</h4>
                    <h4 className="texto1-rus">Debut: 2019</h4>
                
                    <h4 className="texto2-ham">Carreras: 324</h4>
                    <h4 className="texto2-rus">Carreras: 96</h4>
                
                    <h4 className="texto3-ham">Mejor puesto: 1°</h4>
                    <h4 className="texto3-rus">Mejor puesto: 1°</h4>
                </div>

                <br></br>
                <br></br>
                <label><Link style={Botonregresar7} to="/team">Regresar a Escuderias</Link></label>
            </div>
        </div>
        </>
    );
}
export default Mercedes;
import React from "react";
import { Link } from "react-router-dom";
import './teams-css/AstonMartin.css';
import 'animate.css';

function AstonMartin() {
    const Botonregresar3 = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      };
  
      
    return (
        <>
          <div className="fondo3">
            <div>
                <h1 className="titulo3">Aston Martin</h1>
                <h3 className="texto3">Aston Martin es un frabricante britanico que inicio su camino en la durmula uno en 1951, debido a 2 malas
                temporadas, abandonaron la maxima categoria, en 2021 regresaron de mano de Lawrence Stroll padre del actual piloto, 
                por esta escuderia han pasado dos de los pilotos mas importantes de la f1 Sebastian Vettel y Fernando Alonso, actual primer piloto. 
                </h3>
                <h1 className="subtitulo3">Monoplaza</h1>
                <h3 className="texto3">El monoplaza Actual de esta escuderia es el AMR23</h3>
                <div className="imagen-centar3">
                    <img className="imagen-AMR23" src="https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/aston-martin-amr23-f1-2023-soymotor.png?h=31f20df5&itok=3G4eUsdl" alt=""></img>
                </div>
                <h3 className="subtitulo2"> Los pilotos actules son:</h3>
                <div className="contaPilot">
                    <img className="imagen-alonso" class="animate__animated animate__slideInLeft" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/348.png&w=350&h=254" alt=""></img>
                    <img className="imagen-stroll" class="animate__animated animate__slideInRight" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4775.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div className="contaTitle">
                        <h4 className="titulo-alonso">Fernando Alonso</h4>
                        <h4 className="titulo-stroll">Lance Stroll</h4>
                    </div>
                    <div className="contaText">
                        <div className="texto-alonso">
                            <h4>Podios: 105</h4>
                            <br></br>
                            <h4>Debut: 2001</h4>
                            <br></br>
                            <h4>Carreras: 370</h4>
                            <br></br>
                            <h4>Mejor puesto: 1°</h4>
                        </div>
                        <div className="texto-stroll">
                            <h4>Podios: 3</h4>
                            <br></br>
                            <h4>Debut: 2017</h4>
                            <br></br>
                            <h4>Carreras: 137</h4>
                            <br></br>
                            <h4>Mejor puesto: 3°</h4>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <label><Link style={Botonregresar3} to="/team">Regresar a Escuderias</Link></label>
            </div>
        </div>
        </>
    );
}
export default AstonMartin;
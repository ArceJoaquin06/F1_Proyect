import React from "react";
import { Link } from "react-router-dom";
import './teams-css/AstonMartin.css';

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
                <div>
                    <img className="imagen-alonso" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/348.png&w=350&h=254" alt=""></img>
                    <img className="imagen-stroll" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4775.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div>
                        <h4 className="titulo-alonso">Fernando Alonso</h4>
                        <h4 className="titulo-stroll">Lance Stroll</h4>
                    </div>
                    <h4 className="texto-alonso">Podios: 105</h4>
                    <h4 className="texto-stroll">Podios: 3</h4>
               
                    <h4 className="texto1-alonso">Debut: 2001</h4>
                    <h4 className="texto1-stroll">Debut: 2017</h4>
                
                    <h4 className="texto2-alonso">Carreras: 370</h4>
                    <h4 className="texto2-stroll">Carreras: 137</h4>
                
                    <h4 className="texto3-alonso">Mejor puesto: 1°</h4>
                    <h4 className="texto3-stroll">Mejor puesto: 3°</h4>
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
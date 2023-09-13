import React from "react";
import { Link } from "react-router-dom";
import './teams-css/McLaren.css';

function McLaren() {

    const Botonregresar6 = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      };
  
      
    return (
        <>
          <div className="fondo6">
            <div>
                <h1 className="titulo6">McLaren</h1>
                <h3 className="texto6">En esta escuderia han corrido pilotos muy importantes como Fittipaldi, James Hunt, el mismo McLaren, Fernando Alonso,
                Lewis Hamilnton, Ayrton Senna, entre muchos otros, es junto a Ferrari una de las escuedias de mayor historia, su epoca dorada fue en los 80, su 
                ultima victoria viene de manos de Daniel Ricciardo.
                </h3>
                <h1 className="subtitulo6">Monoplaza</h1>
                <h3 className="texto6">El monoplaza Actual de esta escuderia es el MCL60</h3>
                <div className="imagen-centar5">
                    <img className="imagen-MCL60" src="https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/mclaren-mcl60-f1-2023-soymotor.png?h=31f20df5&itok=4aW22-2L" alt=""></img>
                </div>
                <h3 className="subtitulo6"> Los pilotos actules son:</h3>
                <div>
                    <img className="imagen-norris" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5579.png&w=350&h=254" alt=""></img>
                    <img className="imagen-piastri" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5752.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div>
                        <h4 className="titulo-norris">Lando Norris</h4>
                        <h4 className="titulo-piastri">Oscar Piastri</h4>
                    </div>
                    <h4 className="texto-norris">Podios: 8</h4>
                    <h4 className="texto-piastri">Podios: 0</h4>
               
                    <h4 className="texto1-norris">Debut: 2019</h4>
                    <h4 className="texto1-piastri">Debut: 2023</h4>
                
                    <h4 className="texto2-norris">Carreras: 96</h4>
                    <h4 className="texto2-piastri">Carreras: 14</h4>
                
                    <h4 className="texto3-norris">Mejor puesto: 2°</h4>
                    <h4 className="texto3-piastri">Mejor puesto: 4°</h4>
                </div>

                <br></br>
                <br></br>
                <label><Link style={Botonregresar6} to="/team">Regresar a Escuderias</Link></label>
            </div>
        </div>
        </>
    );
}
export default McLaren;
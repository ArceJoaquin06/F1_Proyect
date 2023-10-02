import React from "react";
import { Link } from "react-router-dom";
import './teams-css/McLaren.css';
import 'animate.css';

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
                <div className="contaPilot">
                    <img className="imagen-norris" class="animate__animated animate__slideInLeft" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5579.png&w=350&h=254" alt=""></img>
                    <img className="imagen-piastri" class="animate__animated animate__slideInRight" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5752.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div className="contaTitle">
                        <h4 className="titulo-norris">Lando Norris</h4>
                        <h4 className="titulo-piastri">Oscar Piastri</h4>
                    </div>
                    <div className="contaText">
                        <div className="texto-norris">
                            <h4>Podios: 9</h4>
                            <br></br>
                            <h4>Debut: 2019</h4>
                            <br></br>
                            <h4>Carreras: 99</h4>
                            <br></br>
                            <h4>Mejor puesto: 2°</h4>
                        </div>
                        <div className="texto-piastri">
                            <h4>Podios: 1</h4>
                            <br></br>
                            <h4>Debut: 2023</h4>
                            <br></br>
                            <h4>Carreras: 17</h4>
                            <br></br>
                            <h4>Mejor puesto: 4°</h4>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <div className="xd">
                <label><Link className="boton-return" style={Botonregresar6} to="/team">Regresar a Escuderias</Link></label>
                </div>
            </div>
        </div>
        </>
    );
}
export default McLaren;
import React from "react";
import { Link } from "react-router-dom";
import './teams-css/Alpine.css';
import 'animate.css';

function Alpine() {

    const Botonregresar2 = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      };
  
      
    return (
        <>
          <div className="fondo2">
            <div>
                <h1 className="titulo2">ALPINE</h1>
                <h3 className="texto2">Escuderia francesa nacida de Renault su primera aparacion fue en 2021, su 
                piloto mas reconocido fue Fernando Alonso, actualmente esta escuderia es odiada por muchos,
                debido al mal trato y diferencias de trato que recibia el español con respecto a su compañero de equipo.
                Ademas de ciertos problemas con Oscar Piastri, actual piloto de McLaren.
                </h3>
                <h1 className="subtitulo2">Monoplaza</h1>
                <h3 className="texto2">El monoplaza Actual de esta escuderia es el A523</h3>
                <div className="imagen-centar2">
                    <img className="imagen-A523" src="https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/alpine-a523-f1-2023-soymotor.png?h=31f20df5&itok=-ZREBcCe" alt=""></img>
                </div>
                <h3 className="subtitulo2"> Los pilotos actules son:</h3>
                <div className="contaPilot">
                    <img className="imagen-gasly" class="animate__animated animate__slideInLeft" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5501.png&w=350&h=254" alt=""></img>
                    <img className="imagen-ocon" class="animate__animated animate__slideInRight" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4678.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div className="contaTitle">
                        <h4 className="titulo-ocon">Pierre Gasly</h4>
                        <h4 className="titulo-gasly">Esteban Ocon</h4>
                    </div>
                    <div className="contaText">
                        <div className="texto-ocon">
                            <h4>Podios: 3</h4>
                            <br></br>
                            <h4>Debut: 2016</h4>
                            <br></br>
                            <h4>Carreras: 127</h4>
                            <br></br>
                            <h4>Mejor puesto: 1°</h4>
                        </div>
                        <div className="texto-gasly">
                            <h4>Podios: 4</h4>
                            <br></br>
                            <h4>Debut: 2017</h4>
                            <br></br>
                            <h4>Carreras: 124</h4>
                            <br></br>
                            <h4>Mejor puesto: 1°</h4>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <div className="xd">
                <label><Link className="boton-return" style={Botonregresar2} to="/team">Regresar a Escuderias</Link></label>
                </div>
            </div>
        </div>
        </>
    );
}
export default Alpine;
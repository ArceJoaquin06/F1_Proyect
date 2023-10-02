import React from "react";
import { Link } from "react-router-dom";
import './teams-css/Ferrari.css';
import 'animate.css';

function Ferrari() {

    const Botonregresar4 = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      };
  
      
    return (
        <>
          <div className="fondo4">
            <div>
                <h1 className="titulo4">Ferrari</h1>
                <h3 className="texto4">La escuderia italiana es una por no decir de las mejores escuderias de este deporte, tanto historicamente, como 
                a nivel de pilotos, como de liverys o de auto. Por esta escuderia han pasado pilotos como Michael Schumacher, Juan Manuel Fangio,
                Fernando Alonso, entre muchos otros, con los cuales ha conseguido 16 mundiales de constructoras y 15 de pilotos.
            
                </h3>
                <h1 className="subtitulo4">Monoplaza</h1>
                <h3 className="texto4">El monoplaza Actual de esta escuderia es el SF 23</h3>
                <div className="imagen-centar4">
                    <img className="imagen-SF-23" src="https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/ferrari-sf23-f1-2023-soymotor.png?h=31f20df5&itok=l43EvEKXl" alt=""></img>
                </div>
                <h3 className="subtitulo4"> Los pilotos actules son:</h3>
                <div className="contaPilot">
                    <img className="imagen-leclerc" class="animate__animated animate__slideInLeft" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5498.png&w=350&h=254" alt=""></img>
                    <img className="imagen-stroll" class="animate__animated animate__slideInRight" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4686.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div className="contaTitle">
                        <h4 className="titulo-leclerc">Charles Leclerc</h4>
                        <h4 className="titulo-sainz">Carlos Sainz</h4>
                    </div>
                    <div className="contaText">
                        <div className="texto-leclerc">
                            <h4>Podios: 27</h4>
                            <br></br>
                            <h4>Debut: 2018</h4>
                            <br></br>
                            <h4>Carreras: 117</h4>
                            <br></br>
                            <h4>Mejor puesto: 1°</h4>
                        </div>
                        <div className="texto-sainz">
                            <h4>Podios: 16</h4>
                            <br></br>
                            <h4>Debut: 2015</h4>
                            <br></br>
                            <h4>Carreras: 177</h4>
                            <br></br>
                            <h4>Mejor puesto: 1°</h4>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <div className="xd">
                <label><Link className="boton-return" style={Botonregresar4} to="/team">Regresar a Escuderias</Link></label>
                </div>
                </div>
        </div>
        </>
    );
}
export default Ferrari;
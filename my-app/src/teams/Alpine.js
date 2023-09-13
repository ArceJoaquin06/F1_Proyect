import React from "react";
import { Link } from "react-router-dom";
import './teams-css/Alpine.css';


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
                <div>
                     <img className="imagen-gasly" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5501.png&w=350&h=254" alt=""></img>
                    <img className="imagen-ocon" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4678.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div>
                        <h4 className="titulo-ocon">Pierre Gasly</h4>
                        <h4 className="titulo-gasly">Esteban Ocon</h4>
                    </div>
                    <h4 className="texto-ocon">Podios: 0</h4>
                    <h4 className="texto-gasly">Podios: 4</h4>
               
                    <h4 className="texto-ocon">Debut: 2021</h4>
                    <h4 className="texto-gasly">Debut: 2023</h4>
                
                    <h4 className="texto-ocon">Carreras: 58</h4>
                    <h4 className="texto-gasly">Carreras: 2</h4>
                
                    <h4 className="texto-ocon">Mejor puesto: 1°</h4>
                    <h4 className="texto-gasly">Mejor puesto: 1°</h4>
                </div>

                <br></br>
                <br></br>
                <label><Link style={Botonregresar2} to="/team">Regresar a Escuderias</Link></label>
            </div>
        </div>
        </>
    );
}
export default Alpine;
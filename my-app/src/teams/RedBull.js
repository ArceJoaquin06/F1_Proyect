import React from "react";
import { Link } from "react-router-dom";
import './teams-css/RedBull.css';
import 'animate.css';

function RedBull() {

    const Botonregresar8 = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      };
  
      
    return (
        <>
          <div className="fondo8">
            <div>
                <h1 className="titulo8">Red Bull</h1>
                <h3 className="texto8">Esta escuderia austriaca es la mas fuerte actualmente de la formula 1,
                a lo largo de su historia ha logrado 6 campeonatos de pilotos, 4 de Vettel y 2 de Max.
                Hace muy poco alcanzaron sus 100 victorias, superando Max Verstappen la cantidad de victorias del piloto brasileño 
                Ayrton Senna.
                </h3>
                <h1 className="subtitulo8">Monoplaza</h1>
                <h3 className="texto8">El monoplaza Actual de esta escuderia es el RB19</h3>
                <div className="imagen-centar8">
                    <img className="imagen-RB19" src="https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/red-bull-rb19-f1-2023-soymotor.png?h=31f20df5&itok=KLcER5uK" alt=""></img>
                </div>
                <h3 className="subtitulo8"> Los pilotos actules son:</h3>
                <div className="contaPilot">
                    <img className="imagen-max" class="animate__animated animate__slideInLeft" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4665.png&w=350&h=254" alt=""></img>
                    <img className="imagen-checo" class="animate__animated animate__slideInRight" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4472.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div className="contaTitle">
                        <h4 className="titulo-max">Max Verstappen</h4>
                        <h4 className="titulo-checo">Sergio Perez</h4>
                    </div>
                    <div className="contaText">
                        <div className="texto-max">
                            <h4>Podios: 91</h4>
                            <br></br>
                            <h4>Debut: 2015</h4>
                            <br></br>
                            <h4>Carreras: 177</h4>
                            <br></br>
                            <h4>Mejor puesto: 1°</h4>
                        </div>
                        <div className="texto-checo">
                            <h4>Podios: 33</h4>
                            <br></br>
                            <h4>Debut: 2011</h4>
                            <br></br>
                            <h4>Carreras: 253</h4>
                            <br></br>
                            <h4>Mejor puesto: 1°</h4>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <label><Link style={Botonregresar8} to="/team">Regresar a Escuderias</Link></label>
            </div>
        </div>
        </>
    );
}
export default RedBull;
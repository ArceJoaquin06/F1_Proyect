import React from "react";
import { Link } from "react-router-dom";
import './teams-css/Williams.css';
import 'animate.css';

function Williams() {
    const Botonregresar9 = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      };
  
      
    return (
        <>
          <div className="fondo9">
            <div>
                <h1 className="titulo9">Williams</h1>
                <h3 className="texto9">Esta escudereia britanica es de las mas historicas de la maxima categoria del automovilismo, sin 
                embargo actualmente, es una de las mas resagadas, debido al poco desarollo que han llevado a cabo en su monoplaza
                corriendo para esta escuderia Ayrton Senna sufrio el accidente fatal que lo llevo a su muerte.
                </h3>
                <h1 className="subtitulo9">Monoplaza</h1>
                <h3 className="texto9">El monoplaza Actual de esta escuderia es el FW23</h3>
                <div className="imagen-centar9">
                    <img className="imagen-FW23" src="https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/williams-FW45-f1-2023-soymotor.png?h=31f20df5&itok=jkZQ0qtX" alt=""></img>
                </div>
                <h3 className="subtitulo9"> Los pilotos actules son:</h3>
                <div className="contaPilot">
                    <img className="imagen-alb" class="animate__animated animate__slideInLeft" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5592.png&w=350&h=254" alt=""></img>
                    <img className="imagen-sar" class="animate__animated animate__slideInRight" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5745.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div className="contaTitle">
                        <h4 className="titulo-alb">Alexander Albon</h4>
                        <h4 className="titulo-sar">Logan Sargeant</h4>
                    </div>
                    <div className="contaText">
                        <div className="texto-alb">
                            <h4>Podios: 2</h4>
                            <br></br>
                            <h4>Debut: 2019</h4>
                            <br></br>
                            <h4>Carreras: 74</h4>
                            <br></br>
                            <h4>Mejor puesto: 3°</h4>
                        </div>
                        <div className="texto-sar">
                            <h4>Podios: 0</h4>
                            <br></br>
                            <h4>Debut: 2023</h4>
                            <br></br>
                            <h4>Carreras: 14</h4>
                            <br></br>
                            <h4>Mejor puesto: 11°</h4>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <label><Link style={Botonregresar9} to="/team">Regresar a Escuderias</Link></label>
            </div>
        </div>
        </>
    );
}
export default Williams;
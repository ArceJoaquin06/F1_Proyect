import React from "react";
import { Link } from "react-router-dom";
import './teams-css/Williams.css';

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
                <div>
                    <img className="imagen-alb" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5592.png&w=350&h=254" alt=""></img>
                    <img className="imagen-sar" src="https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5745.png&w=350&h=254" alt=""></img>
                </div>
                <div>
                    <div>
                        <h4 className="titulo-alb">Alexander Albon</h4>
                        <h4 className="titulo-sar">Logan Sargeant</h4>
                    </div>
                    <h4 className="texto-alb">Podios: 2</h4>
                    <h4 className="texto-sar">Podios: 0</h4>
               
                    <h4 className="texto-alb">Debut: 2019</h4>
                    <h4 className="texto-sar">Debut: 2023</h4>
                
                    <h4 className="texto-alb">Carreras: 74</h4>
                    <h4 className="texto-sar">Carreras: 14</h4>
                
                    <h4 className="texto-alb">Mejor puesto: 3°</h4>
                    <h4 className="texto-sar">Mejor puesto: 11°</h4>
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
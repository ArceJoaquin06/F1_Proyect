import React from "react";
import { Link } from "react-router-dom";
import './teams-css/AlfaRomeo.css'
import 'animate.css';

const Botonregresar1 = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
};

function AlfaRomeo() {
    return (
        <>
            <div className="fondo1">
                <div>
                    <h1 className="titulo1">Alfa Romeo</h1>
                    <h3 className="texto1">Alfa Romeo tiene una larga trayectoria en los deportes de motor. 
                    En 1950 y 1951, la marca italiana acogió a los dos primeros campeones del mundo de Fórmula 1. 
                    Pero, al igual que con Mercedes, ese Alfa Corse de los años 50 tiene poco que ver con el equipo actual de F1.
                    </h3>
                    <h1 className="subtitulo1">Monoplaza</h1>
                    <h3 className="texto1">El monoplaza Actual de esta escuderia es el C43</h3>
                    <div className="imagen-centra1">
                        <img className="imagen-C43" src="https://soymotor.com/sites/default/files/styles/team_desk/public/2023-02/alfa-romeo-c43-f1-2023-soymotor_5.png?h=31f20df5&itok=npULU-2l" alt=""></img>
                    </div>
                    <h3 className="subtitulo1"> Los pilotos actules son:</h3>
                    <div className="contaPilot">
                        <img className="imagen-bottas" class="animate__animated animate__slideInLeft" src="https://sportsbase.io/images/gpfans/copy_380x388/bdcddb7c11c9895ac2e74a6a1327835de9a01bf7.png" alt=""></img>
                        <img className="imagen-zhou" class="animate__animated animate__slideInRight" src="https://sportsbase.io/images/gpfans/copy_380x388/c3d34ab3cb4148cc8b94259945233d7c2b20b509.png" alt=""></img>
                    </div>
                    <div>
                        <div className="contaTitle">
                            <h4 className="titulo-bottas">Valtteri Bottas</h4>
                            <h4 className="titulo-zhou">Guanyu Zhou</h4>
                        </div>
                        <div className="contaText">
                            <div className="texto-bottas">
                                <h4>Podios: 67</h4>
                                <br></br>
                                <h4>Debut: 2013</h4>
                                <br></br>
                                <h4>Carreras: 214</h4>
                                <br></br>
                                <h4>Mejor puesto: 1°</h4>
                            </div>
                            <div className="texto-zhou">
                                <h4>Podios: 0</h4>
                                <br></br>
                                <h4>Debut: 2022</h4>
                                <br></br>
                                <h4>Carreras: 36</h4>
                                <br></br>
                                <h4>Mejor puesto: 8°</h4>
                            </div>
                        </div>
                    </div>

                    <label><Link style={Botonregresar1} to="/team">Regresar a Escuderias</Link></label>
                </div>

            </div>
        </>
    );
}
export default AlfaRomeo;
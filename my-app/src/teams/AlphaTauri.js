import React from "react";
import { Link } from "react-router-dom";
import './teams-css/AlphaTauri.css';

const Botonregresar = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };
  

function AlphaTauri() {
    return (
        <>
        <div className="fondo">
            <div>
                <h1 className="titulo">Alpha Tauri</h1>
                <h3 className="texto">Esta escuderia fue comprada por Red Bull en 2005 como equipo secundario, para jovenes 
                pilotos promesas, su nombre original era "Toro Rosso". En esta escuderia han competido
                Sebastian Vettel, Max Verstappen, Carlos Sainz, Daniel Ricciardo, entre muchos otros pilotos. 
                </h3>
                <h1 className="subtitulo">Monoplaza</h1>
                <h3 className="texto">El monoplaza Actual de esta escuderia es el AT04</h3>
                <div className="imagen-centar">
                    <img className="imagen-AT04" src="https://scuderia.alphatauri.com/wp-content/uploads/2023/02/photo-hotspot-horizontal-2023_KrbRsyk5Vf27.png" alt=""></img>
                </div>
                <h3 className="subtitulo0"> Los pilotos actules son:</h3>
                <div>
                    <img className="imagen-yuki" src="https://cdn.racingnews365.com/Riders/Tsunoda/_570x570_crop_center-center_none/f1_2023_yt_alp_lg.png?v=1677516211" alt=""></img>
                    <img className="imagen-liam" src="https://sportsbase.io/images/gpfans/copy_380x388/1ab1e66a5dafb250675bf5d08f54c3cbd41c4319.png" alt=""></img>
                </div>
                <div>
                    <div>
                        <h4 className="titulo-yuki">Yuki Tsunoda</h4>
                        <h4 className="titulo-liam">Liam Lawson</h4>
                    </div>
                    <h4 className="texto-yuki">Podios: 0</h4>
                    <h4 className="texto-liam">Podios: 0</h4>
               
                    <h4 className="texto-yuki">Debut: 2021</h4>
                    <h4 className="texto-liam">Debut: 2023</h4>
                
                    <h4 className="texto-yuki">Carreras: 58</h4>
                    <h4 className="texto-liam">Carreras: 2</h4>
                
                    <h4 className="texto-yuki">Mejor puesto: 4°</h4>
                    <h4 className="texto-liam">Mejor puesto: 13°</h4>
                </div>

                <br></br>
                <br></br>
                <label><Link style={Botonregresar} to="/team">Regresar a Escuderias</Link></label>
            </div>
        </div>
        </>
    );
}
export default AlphaTauri;
import React from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import './css/Escuderia.css';

const botonFerrari = {
    width: '278px',
    height: '286px', 
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/71/79/1f/71791fa9ef030a75e32393c159c31d27.jpg") center/cover',
    color: 'transparent',
    
  }

  const botonWilliams = {
    width: '278px',
    height: '286px',
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/d9/b8/ab/d9b8abe81f772d9c6bf6b62c3e899e8f.jpg") center/cover',
    color: 'transparent',
  }

  const botonMcLaren = {
    width: '264px',
    height: '286px',
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/2d/62/ea/2d62ea3c23f6c6123863de980e958b1f.jpg") center/cover',
    color: 'transparent',
  }

  const botonHaas = {
    width: '278px',
    height: '286px',
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/d8/23/ff/d823ff42ba8007e37fecef224c611653.jpg") center/cover',
    color: 'transparent',
  }

  const botonAston = {
    width: '278px',
    height: '286px',
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/01/17/2b/01172b8d7fb181ec0593d020fe621c3c.jpg") center/cover',
    color: 'transparent',
  }

  const botonAlfaRomeo = {
    width: '278px',
    height: '286px',
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/9c/6a/56/9c6a56c5c1992847b9d863780bc82019.jpg") center/cover',
    color: 'transparent',
  }

  const botonRedBull = {
    width: '278px',
    height: '286px',
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/42/b7/0d/42b70df0294860a892c33975d6297676.jpg") center/cover',
    color: 'transparent',
  }

  const botonAlpine = {
    width: '278px',
    height: '286px',
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/26/16/ee/2616ee30a26e380b74620a9713edc72c.jpg") center/cover',
    color: 'transparent',
  }

  const botonMercedes = {
    width: '278px',
    height: '286px',
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://w0.peakpx.com/wallpaper/952/703/HD-wallpaper-amg-petronas-f1-formula-1-formule-1-mercedes.jpg") center/cover',
    color: 'transparent',
  }

  const botonAlphaTauri = {
    width: '278px',
    height: '286px',
    border: 'none',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/48/76/d7/4876d7095564767c4ed19bb6405b811f.jpg") center/cover',
    color: 'transparent',
  }

function Escuderia() {
    
    return (
        <>
        
         <label class="botonFerrari">
            <div style={{ display: 'flex'}}>
              <Link to="/ferrari" style={botonFerrari} class="animate__animated animate__bounce">charles</Link>
            </div>
         </label>
          <label class="botonWilliams">
            <div style={{ display: 'flex'}}>
              <Link to="/williams" style={botonWilliams}>charles</Link>
            </div>
          </label>
          <label class="botonRedBull">
            <div style={{ display: 'flex'}}> 
            <Link to="/redbull" style={botonRedBull}>charles</Link>
            </div>
          </label>
          <label class="botonAlfaRomeo">
            <div style={{ display: 'flex'}}>
              <Link to="/alfaromeo" style={botonAlfaRomeo}>charles</Link>
            </div>
          </label>
          <label class="botonAston">
            <div style={{ display: 'flex'}}>
              <Link to="/astonmartin" style={botonAston}>charles</Link>
            </div>
          </label>
          <label class="botonHaas">
            <div style={{ display: 'flex'}}>
              <Link to="/haas" style={botonHaas}>charles</Link>
            </div>
          </label>
          <label class="botonMcLaren">
            <div style={{ display: 'flex'}}>
              <Link to="/mclaren" style={botonMcLaren}>charles</Link>
            </div>
          </label>
          <label class="botonMercedes">
            <div style={{ display: 'flex'}}>
              <Link to="/mercedes" style={botonMercedes}>charles</Link>
            </div>
          </label>
          <label class="botonAlphaTauri">
            <div style={{ display: 'flex'}}>
              <Link to="/alphatauri" style={botonAlphaTauri}>charles</Link>
            </div>
          </label>
          <label class="botonAlpine">
            <div style={{ display: 'flex'}}>
              <Link to="/alpine" style={botonAlpine}>charles</Link>
            </div>
          </label>

        
        </>
    );
}

export default Escuderia;

//link de la documentacion de las animaciones
//https://animate.style/

//pulse
//zoomIn
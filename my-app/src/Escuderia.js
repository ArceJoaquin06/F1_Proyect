import React from "react";
import { Link } from "react-router-dom";
import './css/Escuderia.css';

const botonFerrari = {
    width: '272px',
    height: '286px', 
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/71/79/1f/71791fa9ef030a75e32393c159c31d27.jpg") center/cover',
    color: 'transparent',
    
  }

  const botonWilliams = {
    width: '272px',
    height: '286px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/d9/b8/ab/d9b8abe81f772d9c6bf6b62c3e899e8f.jpg") center/cover',
    color: 'transparent',
  }

  const botonMcLaren = {
    width: '272px',
    height: '286px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/originals/2d/62/ea/2d62ea3c23f6c6123863de980e958b1f.jpg") center/cover',
    color: 'transparent',
  }

  const botonHaas = {
    width: '272px',
    height: '286px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/originals/c8/e0/aa/c8e0aa63bbd7ddac8774a1fde44a357a.jpg") center/cover',
    color: 'transparent',
  }

  const botonAston = {
    width: '272px',
    height: '286px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://soymotor.com/sites/default/files/styles/top_3_263x263/public/imagenes/equipo/logo-aston-martin-f1-2021.png.webp?itok=eEc_TuAj") center/cover',
    color: 'transparent',
  }

  const botonAlfaRomeo = {
    width: '272px',
    height: '286px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://as01.epimg.net/motor/imagenes/2019/02/01/formula_1/1549017855_549790_1549018043_noticia_normal.jpg") center/cover',
    color: 'transparent',
  }

  const botonRedBull = {
    width: '272px',
    height: '286px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://cdn-2.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg") center/cover',
    color: 'transparent',
  }

  const botonAlpine = {
    width: '272px',
    height: '286px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://hips.hearstapps.com/hmg-prod/images/et3dwsmxuam3is8-1612973513.jpg") center/cover',
    color: 'transparent',
  }

  const botonMercedes = {
    width: '272px',
    height: '286px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://w0.peakpx.com/wallpaper/952/703/HD-wallpaper-amg-petronas-f1-formula-1-formule-1-mercedes.jpg") center/cover',
    color: 'transparent',
  }

  const botonAlphaTauri = {
    width: '270px',
    height: '286px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/564x/48/76/d7/4876d7095564767c4ed19bb6405b811f.jpg") center/cover',
    color: 'transparent',
  }

function Escuderia() {
    
    return (
        <>
        
         <label class="botonFerrari">
            <div style={{ display: 'flex'}}>
              <Link to="/ferrari" style={botonFerrari}>charles</Link>
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
import React from "react";
import { Link } from "react-router-dom";
import './css/Escuderia.css';

const botonFerrari = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://assets.turbologo.com/blog/es/2019/10/19133021/ferrari-logo-illustration-958x575.jpg") center/cover',
    color: 'transparent',
  }

  const botonWilliams = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://cdn-4.motorsport.com/images/mgl/2y39NBy6/s800/williams-racing-logo-1.jpg") center/cover',
    color: 'transparent',
  }

  const botonMcLaren = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/originals/2d/62/ea/2d62ea3c23f6c6123863de980e958b1f.jpg") center/cover',
    color: 'transparent',
  }

  const botonHaas = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://i.pinimg.com/originals/c8/e0/aa/c8e0aa63bbd7ddac8774a1fde44a357a.jpg") center/cover',
    color: 'transparent',
  }

  const botonAston = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://soymotor.com/sites/default/files/styles/top_3_263x263/public/imagenes/equipo/logo-aston-martin-f1-2021.png.webp?itok=eEc_TuAj") center/cover',
    color: 'transparent',
  }

  const botonAlfaRomeo = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://as01.epimg.net/motor/imagenes/2019/02/01/formula_1/1549017855_549790_1549018043_noticia_normal.jpg") center/cover',
    color: 'transparent',
  }

  const botonRedBull = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://cdn-2.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg") center/cover',
    color: 'transparent',
  }

  const botonAlpine = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://hips.hearstapps.com/hmg-prod/images/et3dwsmxuam3is8-1612973513.jpg") center/cover',
    color: 'transparent',
  }

  const botonMercedes = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://seeklogo.com/images/M/mercedes-amg-f1-logo-1ED622D95E-seeklogo.com.png") center/cover',
    color: 'transparent',
  }

  const botonAlphaTauri = {
    padding: '16px 36px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'url("https://cdn-2.motorsport.com/images/mgl/Y99JQR8Y/s8/scuderia-alphatauri-f1-logo-1.jpg") center/cover',
    color: 'transparent',
  }

function Escuderia() {
    
    return (
        <>
          <label class="botonFerrari"><Link to="/ferrari" style={botonFerrari}>charles</Link></label>
          <label class="botonWilliams"><Link to="/williams" style={botonWilliams}>charles</Link></label>
          <label class="botonRedBull"><Link to="/redbull" style={botonRedBull}>charles</Link></label>
          <label class="botonAlfaRomeo"><Link to="/alfaromeo" style={botonAlfaRomeo}>charles</Link></label>
          <label class="botonAston"><Link to="/astonmartin" style={botonAston}>charles</Link></label>
          <label class="botonHaas"><Link to="/haas" style={botonHaas}>charles</Link></label>
          <label class="botonMcLaren"><Link to="/mclaren" style={botonMcLaren}>charles</Link></label>
          <label class="botonMercedes"><Link to="/mercedes" style={botonMercedes}>charles</Link></label>
          <label class="botonAlphaTauri"><Link to="/alphatauri" style={botonAlphaTauri}>charles</Link></label>
          <label class="botonAlpine"><Link to="/alpine" style={botonAlpine}>charles</Link></label>
        </>
    );
}

export default Escuderia;
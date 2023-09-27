import React from "react";
import { Link } from "react-router-dom";
//import './css/Escuderia.css';

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
        <div style={{
          backgroundImage: 'url("https://waifu2x.booru.pics/outfiles/f73e2d32a68fd483f08ef68a43014d3b3346ac8e_s2_n3_y1.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
         <label class="botonFerrari">
            <div style={{ display: 'flex'}}>
              <Link to="/ferrari" style={botonFerrari}>charles</Link>
              <h4 style={{ marginLeft: '10px' }}>Ferrari</h4>
            </div>
         </label>
          <label class="botonWilliams">
            <div style={{ display: 'flex'}}>
              <Link to="/williams" style={botonWilliams}>charles</Link>
              <h4 style={{ marginLeft: '10px' }}>Williams</h4>
            </div>
          </label>
          <label class="botonRedBull">
            <div style={{ display: 'flex'}}> 
            <Link to="/redbull" style={botonRedBull}>charles</Link>
            <h4 style={{ marginLeft: '10px' }}>Red Bull</h4>
            </div>
          </label>
          <label class="botonAlfaRomeo">
            <div style={{ display: 'flex'}}>
              <Link to="/alfaromeo" style={botonAlfaRomeo}>charles</Link>
              <h4 style={{ marginLeft: '10px' }}>Alfa Romeo</h4>
            </div>
          </label>
          <label class="botonAston">
            <div style={{ display: 'flex'}}>
              <Link to="/astonmartin" style={botonAston}>charles</Link>
              <h4 style={{ marginLeft: '10px' }}>Aston Martin</h4>
            </div>
          </label>
          <label class="botonHaas">
            <div style={{ display: 'flex'}}>
              <Link to="/haas" style={botonHaas}>charles</Link>
              <h4 style={{ marginLeft: '10px' }}>Haas</h4>
            </div>
          </label>
          <label class="botonMcLaren">
            <div style={{ display: 'flex'}}>
              <Link to="/mclaren" style={botonMcLaren}>charles</Link>
              <h4 style={{ marginLeft: '10px' }}>McLaren</h4>
            </div>
          </label>
          <label class="botonMercedes">
            <div style={{ display: 'flex'}}>
              <Link to="/mercedes" style={botonMercedes}>charles</Link>
              <h4 style={{ marginLeft: '10px' }}>Mercedes</h4>
            </div>
          </label>
          <label class="botonAlphaTauri">
            <div style={{ display: 'flex'}}>
              <Link to="/alphatauri" style={botonAlphaTauri}>charles</Link>
              <h4 style={{ marginLeft: '10px' }}>Alpha Tauri</h4>
            </div>
          </label>
          <label class="botonAlpine">
            <div style={{ display: 'flex'}}>
              <Link to="/alpine" style={botonAlpine}>charles</Link>
              <h4 style={{ marginLeft: '10px' }}>Alpine</h4>
            </div>
          </label>

        </div>
        </>
    );
}

export default Escuderia;
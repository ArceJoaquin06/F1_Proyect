import React from "react";
import { Link, Outlet } from "react-router-dom";
import './css/Navbar.css';

const navStyles = {
  backgroundColor: 'black',
  padding: '10px',
};

const logo = {
  justifyContent: 'left',
  width: '50px',
};

const ulStyles = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center', // Cambiado a 'center'
  gap: '20px',
};

function Navbar() {
    return (
      <>
      <nav style={navStyles}>
      <ul style={ulStyles} className="boton">
          <li><img style={logo} src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png" alt="Logo"/></li>
          <li><Link className="nav-link" to="/">Pilotos</Link></li> 
          <li><Link className="nav-link" to="/circuits">Circuito</Link></li>
          <li><Link className="nav-link" to="/calendar">Calendario</Link></li>
          <li><Link className="nav-link" to="/team">Escuderias</Link></li>
        </ul>
      </nav>  
      
      <Outlet></Outlet>
      </>
    );
  }
  
  export default Navbar;
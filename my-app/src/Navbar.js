import React from "react";
import { Link, Outlet } from "react-router-dom";

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

const imgf={
  justifyContent: 'top-left',
  width: '70px',
}

const linkStyles = {
  color: 'red',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const linkHoverStyles = {
  ...linkStyles,
  color: 'black', // Cambiamos el color a negro en el estado de hover
};



function Navbar() {
    return (
      <>
      <nav style={navStyles}>
      <ul style={ulStyles}>
          <li><img style={logo} src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png" alt="Logo"/></li>
          <li><Link style={linkStyles} to="/">Pilotos</Link></li>
          <li><Link style={linkStyles} to="/circuits">Circuito</Link></li>
          <li><Link style={linkStyles} to="/championship">Campeonatos</Link></li>
          <li><Link style={linkStyles} to="/team">Escuderias</Link></li>
        </ul>
      </nav>  
      
      <Outlet></Outlet>
      </>
    );
  }
  
  export default Navbar;
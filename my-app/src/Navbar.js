import React from "react";
import { Link, Outlet } from "react-router-dom";
import Pilotos from "./Pilotos";

function Navbar() {
    return (
      <>
      <nav>
        <ul>
          <li><Link to="/">Pilotos</Link></li>
          <li><Link to="/circuits">Circuito</Link></li>
          <li><Link to="/championship">Campeonatos</Link></li>
        </ul>
      </nav>  
      
      <Outlet></Outlet>
      </>
    );
  }
  
  export default Navbar;
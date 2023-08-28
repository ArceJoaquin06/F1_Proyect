import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
      <>
      <nav style={navStyles}>
        <ul style={ulStyles}>
          <li><Link to="/" style={linkStyles}>Home</Link></li>
          <li><Link to="/register" style={linkStyles}>Register</Link></li>
          <li><Link to="/contact" style={linkStyles}>Contact</Link></li>
        </ul>
      </nav>
  
     
  
      <Outlet></Outlet>
      </>
    );
  }
  
  export default Navbar;
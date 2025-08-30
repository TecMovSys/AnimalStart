import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Animal Start</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Inicio</Link>
        </li>
        <li>
          <Link to="/agregarAnimal" className="navbar-link">Agregar Mascota</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

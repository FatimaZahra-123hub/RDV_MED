import React, { useState } from 'react';
import { Menu, X, Settings, Layout } from 'lucide-react';
import './Navbar.css';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Rendez-vous Santé</h1>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <div className="nav-links">
            <a href="#accueil">Accueil</a>
            <a href="#apropos">À Propos</a>
            <a href="#services">Services</a>
            <a href="#temoignages">Témoignages</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="nav-actions">
            <button className="nav-btn">
              <Settings size={18} />
              <span>Gérer</span>
            </button>
            <button className="nav-btn">
              <Layout size={18} />
              <span>Mise En Page</span>
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À Propos</a>
          <a href="#services">Services</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#contact">Contact</a>
          <hr />
          <button className="mobile-btn">
            <Settings size={18} />
            <span>Gérer</span>
          </button>
          <button className="mobile-btn">
            <Layout size={18} />
            <span>Mise En Page</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <Link to="/" className="footer-logo">Rendez-vous Santé</Link>
        <nav className="footer-nav">
          <Link to="/about">À Propos</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Rendez-vous Santé. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À Propos' },
  { path: '/services', label: 'Services' },
  { path: '/testimonials', label: 'Témoignages' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Rendez-vous Santé
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar-links">
          {NAV_ITEMS.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`navbar-link ${location.pathname === path ? 'active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile">
          {NAV_ITEMS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`navbar-mobile-link ${location.pathname === path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

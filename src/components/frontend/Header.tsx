import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="logo.png" alt="Logo" width="120" />
        </div>

        <nav className={`menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          <ul className="menu-list">
            <li className="menu-item">Inicio</li>
            <li className="menu-item">Como Funciona</li>
            <li className="menu-item">Serviços</li>
            <li className="menu-item">Institucional</li>
            <li className="menu-item">Scooter Elétrica</li>
            <li className="menu-item"><Link to="/sign-in">Minha Conta</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

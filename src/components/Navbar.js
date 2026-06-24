import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Contact',  href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    setActive(href.replace('#', ''));
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={() => handleNav('#home')}>
          <img src={logo} alt="Gnanam Metals" className="nav-logo-img" />
        </a>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                className={`nav-link ${active === link.href.replace('#','') ? 'active' : ''}`}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
                <span className="nav-underline" />
              </button>
            </li>
          ))}
          <li>
            <button
              className="btn-primary nav-cta"
              onClick={() => handleNav('#contact')}
            >
              Get Quote
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Progress line */}
      <div className="nav-progress" />
    </nav>
  );
};

export default Navbar;

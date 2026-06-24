import React from 'react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Gnanam Metals" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Your trusted supplier of SS pipes, sheets, ACP panels, HPL sheets, and WPC planks
              across Tamil Nadu — rooted in Theni.
            </p>
            <div className="footer-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              S. Renganathapuram, Theni, Tamil Nadu
            </div>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-links">
              {['SS ERW Pipes','SS Seamless Pipes','SS Sheets','SS Plates','SS Angles','SS Flats','SS Rods','ACP Sheets','HPL Sheets','WPC Planks'].map(p => (
                <li key={p}>
                  <button onClick={() => scroll('#products')} className="footer-link">{p}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {[['Home','#home'],['About Us','#about'],['Products','#products'],['Services','#services'],['Gallery','#gallery'],['Contact','#contact']].map(([l, h]) => (
                <li key={l}>
                  <button onClick={() => scroll(h)} className="footer-link">{l}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-list">
              <div className="fc-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.72 16z"/>
                </svg>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="fc-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Mon – Sat: 9 AM – 7 PM</span>
              </div>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.853L0 24l6.335-1.509A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.6 9.6 0 0 1-4.901-1.345l-.35-.208-3.764.896.931-3.668-.228-.367A9.573 9.573 0 0 1 2.4 12C2.4 6.702 6.702 2.4 12 2.4c5.298 0 9.6 4.302 9.6 9.6 0 5.298-4.302 9.6-9.6 9.6z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Gnanam Metals, Theni. All rights reserved.</p>
          <p className="footer-built">Serving Tamil Nadu with quality metals</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

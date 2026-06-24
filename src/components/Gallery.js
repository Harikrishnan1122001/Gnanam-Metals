import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Gallery.css';

const acpColors = [
  { code: 'ACP-001', name: 'Signal White',    hex: '#f5f5f5' },
  { code: 'ACP-002', name: 'Sky Blue',        hex: '#4a9fd4' },
  { code: 'ACP-003', name: 'Royal Blue',      hex: '#1a4fa0' },
  { code: 'ACP-004', name: 'Fiery Red',       hex: '#c0392b' },
  { code: 'ACP-005', name: 'Forest Green',    hex: '#1e6b3c' },
  { code: 'ACP-006', name: 'Golden Yellow',   hex: '#e6a817' },
  { code: 'ACP-007', name: 'Charcoal Grey',   hex: '#4a4a4a' },
  { code: 'ACP-008', name: 'Copper Orange',   hex: '#c05c1a' },
  { code: 'ACP-009', name: 'Lime Green',      hex: '#7ab648' },
  { code: 'ACP-010', name: 'Midnight Black',  hex: '#1a1a1a' },
  { code: 'ACP-011', name: 'Ivory Cream',     hex: '#f0e6c8' },
  { code: 'ACP-012', name: 'Navy Blue',       hex: '#0d2657' },
];

const hplSheets = [
  { code: '1001', name: 'Dark Walnut',    color: '#3d1c0a' },
  { code: '1002', name: 'Golden Teak',   color: '#c47d2a' },
  { code: '1003', name: 'Cherry Wood',   color: '#6b1a1a' },
  { code: '1004', name: 'Light Oak',     color: '#d4873a' },
  { code: '1005', name: 'Burl Mahogany', color: '#4a1e0d' },
];

const Gallery = () => {
  const [tab, setTab] = useState('acp');
  const [headerRef, headerVis] = useReveal();
  const [bodyRef, bodyVis] = useReveal(0.05);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div ref={headerRef} className={`gallery-header reveal ${headerVis ? 'visible' : ''}`}>
          <p className="section-eyebrow">Color & Finish Catalogue</p>
          <h2 className="section-title">ACP & HPL <br />Available Shades</h2>
          <p className="section-subtitle">
            Choose from our wide range of ACP panel colors and HPL sheet wood-finish codes.
            Available at Gnanam Metals, S. Renganathapuram, Theni.
          </p>
        </div>

        {/* Tabs */}
        <div className={`gallery-tabs reveal ${headerVis ? 'visible delay-2' : ''}`}>
          <button
            className={`gtab ${tab === 'acp' ? 'active' : ''}`}
            onClick={() => setTab('acp')}
          >
            🎨 ACP Sheet Colors
          </button>
          <button
            className={`gtab ${tab === 'hpl' ? 'active' : ''}`}
            onClick={() => setTab('hpl')}
          >
            🪵 HPL Sheet Designs
          </button>
        </div>

        <div ref={bodyRef}>
          {/* ACP Color Swatches */}
          {tab === 'acp' && (
            <div className="acp-grid">
              {acpColors.map((c, i) => (
                <div
                  key={c.code}
                  className={`acp-swatch reveal ${bodyVis ? `visible delay-${(i % 6) + 1}` : ''}`}
                >
                  <div
                    className="swatch-color"
                    style={{ background: c.hex }}
                  >
                    <div className="swatch-shine" />
                    {c.hex === '#f5f5f5' && (
                      <div className="swatch-border-check" />
                    )}
                  </div>
                  <div className="swatch-info">
                    <span className="swatch-name">{c.name}</span>
                    <span className="swatch-code">{c.code}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* HPL Designs */}
          {tab === 'hpl' && (
            <div className="hpl-grid">
              {hplSheets.map((h, i) => (
                <div
                  key={h.code}
                  className={`hpl-card reveal ${bodyVis ? `visible delay-${i + 1}` : ''}`}
                >
                  <div className="hpl-preview" style={{ background: `linear-gradient(135deg, ${h.color}dd, ${h.color}88)` }}>
                    <div className="hpl-grain-overlay" />
                    <span className="hpl-code-badge">{h.code}</span>
                  </div>
                  <div className="hpl-info">
                    <span className="hpl-name">{h.name}</span>
                    <span className="hpl-tag">Wood Finish HPL</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className={`gallery-cta reveal ${bodyVis ? 'visible delay-4' : ''}`}>
          <p>Available in 30+ ACP colors & 5 HPL wood finishes</p>
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Sample or Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

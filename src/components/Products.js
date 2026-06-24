import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { SSPipeArt } from './BrandArt';
import './Products.css';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'pipes', label: 'Pipes' },
  { id: 'sheets', label: 'Sheets & Plates' },
  { id: 'composite', label: 'Composite' },
  { id: 'sections', label: 'Sections' },
];

const products = [
  {
    id: 1, cat: 'pipes',
    title: 'SS ERW Pipes',
    subtitle: 'Electric Resistance Welded',
    icon: <SSPipeArt variant="icon" />,
    specs: ['Grades: 304, 316', 'Various diameters', 'Industrial & domestic'],
    color: '#1a6fff',
  },
  {
    id: 2, cat: 'pipes',
    title: 'SS Seamless Pipes',
    subtitle: 'High-Pressure Grade',
    icon: <SSPipeArt variant="icon" />,
    specs: ['Grade 304/316', 'No weld seam', 'High-pressure applications'],
    color: '#2a7fff',
  },
  {
    id: 3, cat: 'sheets',
    title: 'SS Sheets',
    subtitle: 'Stainless Steel Flat Sheets',
    icon: '🪙',
    specs: ['Multiple finishes', 'Grade 304, 316', 'Custom cutting available'],
    color: '#0d4db3',
  },
  {
    id: 4, cat: 'sheets',
    title: 'SS Plates',
    subtitle: 'Heavy Gauge Plates',
    icon: '🔲',
    specs: ['Thickness 3mm–50mm', 'Industrial grade', 'Structural use'],
    color: '#1a6fff',
  },
  {
    id: 5, cat: 'sections',
    title: 'SS Angles',
    subtitle: 'L-Shape Structural',
    icon: '📐',
    specs: ['Equal & unequal', 'Grade 304', 'Structural framing'],
    color: '#2a7fff',
  },
  {
    id: 6, cat: 'sections',
    title: 'SS Flats',
    subtitle: 'Flat Bar Stock',
    icon: '➖',
    specs: ['Wide range', 'Precision rolled', 'Fabrication ready'],
    color: '#4d9fff',
  },
  {
    id: 7, cat: 'sections',
    title: 'SS Rods',
    subtitle: 'Solid Round Bars',
    icon: '🥢',
    specs: ['Round & square', 'Grade 304/316', 'Machining quality'],
    color: '#1a6fff',
  },
  {
    id: 8, cat: 'composite',
    title: 'ACP Sheets',
    subtitle: 'Aluminium Composite Panels',
    icon: '🎨',
    specs: ['30+ colors available', 'Weather resistant', 'Facade & signage'],
    color: '#e6a817',
    highlight: true,
  },
  {
    id: 9, cat: 'composite',
    title: 'HPL Sheets',
    subtitle: 'High Pressure Laminate',
    icon: '🪵',
    specs: ['Wood finish codes 1001–1005', 'Exterior grade', 'Furniture & cladding'],
    color: '#7a5c2e',
    highlight: true,
  },
  {
    id: 10, cat: 'composite',
    title: 'WPC Planks',
    subtitle: 'Wood Plastic Composite',
    icon: '🌿',
    specs: ['UV resistant', 'Outdoor decking', 'Low maintenance'],
    color: '#2d6a4f',
    highlight: true,
  },
];

const Products = () => {
  const [active, setActive] = useState('all');
  const [headerRef, headerVis] = useReveal();
  const [gridRef, gridVis] = useReveal(0.05);

  const filtered = active === 'all' ? products : products.filter(p => p.cat === active);

  return (
    <section className="products" id="products">
      <div className="container">
        <div
          ref={headerRef}
          className={`products-header reveal ${headerVis ? 'visible' : ''}`}
        >
          <p className="section-eyebrow">What We Supply</p>
          <h2 className="section-title">Our Complete <br />Product Range</h2>
          <p className="section-subtitle">
            From SS pipes to ACP sheets — everything a builder, fabricator or architect needs,
            available in Theni.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`filter-tabs reveal ${headerVis ? 'visible delay-2' : ''}`}>
          {categories.map(c => (
            <button
              key={c.id}
              className={`filter-tab ${active === c.id ? 'active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div ref={gridRef} className="products-grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`product-card reveal ${gridVis ? `visible delay-${(i % 6) + 1}` : ''} ${p.highlight ? 'featured' : ''}`}
            >
              {p.highlight && <div className="featured-badge">Featured</div>}
              <div className="pcard-icon-wrap" style={{ '--pcolor': p.color }}>
                <span className="pcard-icon">{p.icon}</span>
              </div>
              <div className="pcard-body">
                <h3 className="pcard-title">{p.title}</h3>
                <p className="pcard-sub">{p.subtitle}</p>
                <ul className="pcard-specs">
                  {p.specs.map(s => (
                    <li key={s}>
                      <span className="spec-dot" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="pcard-cta"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

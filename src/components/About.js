import React from 'react';
import { useReveal } from '../hooks/useReveal';
import logo from '../assets/logo.png';
import './About.css';

const values = [
  {
    icon: '🏭',
    title: 'Quality First',
    desc: 'We supply only certified, premium-grade stainless steel and composite materials that meet industry standards.',
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    desc: 'Efficient logistics network covering Theni, Madurai, Dindigul and across Tamil Nadu.',
  },
  {
    icon: '💰',
    title: 'Best Pricing',
    desc: 'Competitive prices with flexible bulk order discounts. No hidden charges, always transparent.',
  },
  {
    icon: '🤝',
    title: 'Trusted Partner',
    desc: 'Serving contractors, fabricators, architects, and builders with reliability for over a decade.',
  },
];

const About = () => {
  const [headerRef, headerVis] = useReveal();
  const [leftRef, leftVis] = useReveal();
  const [rightRef, rightVis] = useReveal();

  return (
    <section className="about" id="about">
      <div className="container">
        <div
          ref={headerRef}
          className={`about-header reveal ${headerVis ? 'visible' : ''}`}
        >
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="section-title">Gnanam Metals — <br />Theni's Trusted Metal Hub</h2>
          <p className="section-subtitle">
            Located at S. Renganathapuram, Theni, we've been the go-to supplier for premium
            stainless steel and architectural materials across the region.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Story */}
          <div
            ref={leftRef}
            className={`about-story reveal-left ${leftVis ? 'visible' : ''}`}
          >
            <div className="story-image-box">
              <div className="story-plate">
                <div className="plate-shine" />
                <div className="plate-content">
                  <img src={logo} alt="Gnanam Metals" className="plate-logo-img" />
                </div>
                <div className="plate-info">
                  <div className="plate-row">
                    <span className="plate-key">Location</span>
                    <span className="plate-val">S. Renganathapuram, Theni</span>
                  </div>
                  <div className="plate-row">
                    <span className="plate-key">Speciality</span>
                    <span className="plate-val">SS Pipes & Metal Products</span>
                  </div>
                  <div className="plate-row">
                    <span className="plate-key">Coverage</span>
                    <span className="plate-val">All Tamil Nadu</span>
                  </div>
                </div>
              </div>
              <div className="story-badge-float">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a6fff" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Trusted Brand</span>
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div
            ref={rightRef}
            className={`about-values reveal-right ${rightVis ? 'visible' : ''}`}
          >
            {values.map((v, i) => (
              <div key={v.title} className={`value-card delay-${i + 1}`}>
                <div className="value-icon">{v.icon}</div>
                <div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

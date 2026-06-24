import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Services.css';

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        <polyline points="16 21 12 17 8 21"/>
        <polyline points="8 3 12 7 16 3"/>
      </svg>
    ),
    title: 'Custom Cutting',
    desc: 'Precision cutting to your exact specifications. Sheets, pipes, and plates cut to size on demand.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Quick Turnaround',
    desc: 'Same-day dispatch for in-stock items. Bulk orders fulfilled within 2–5 working days.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Delivery Service',
    desc: 'Pan Tamil Nadu delivery network. Door-step delivery for bulk orders across the state.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Expert Consultation',
    desc: 'Our team helps you choose the right grade, size, and material for your specific project.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Quality Certified',
    desc: 'All products come with material test certificates (MTC). ISI marked and standard grade assured.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'After Sales Support',
    desc: 'Dedicated support for all your queries post-purchase. We stand behind every product we sell.',
  },
];

const Services = () => {
  const [headerRef, headerVis] = useReveal();
  const [gridRef, gridVis] = useReveal(0.05);

  return (
    <section className="services" id="services">
      <div className="container">
        <div
          ref={headerRef}
          className={`reveal ${headerVis ? 'visible' : ''}`}
        >
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-title">End-to-End <br />Metal Services</h2>
          <p className="section-subtitle">
            Beyond just supplying materials — we offer complete support from selection to delivery.
          </p>
        </div>

        <div ref={gridRef} className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal ${gridVis ? `visible delay-${(i % 3) + 1}` : ''}`}
            >
              <div className="srv-icon">{s.icon}</div>
              <h3 className="srv-title">{s.title}</h3>
              <p className="srv-desc">{s.desc}</p>
              <div className="srv-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

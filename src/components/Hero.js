import React, { useEffect, useRef } from 'react';
import { SSPipeArt } from './BrandArt';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  /* Particle grid animation */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26,111,255,${p.alpha})`;
        ctx.fill();

        particles.forEach(q => {
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(26,111,255,${0.08 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="container hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Theni's Premier Metal Supplier
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">FORGED IN</span>
            <span className="hero-title-line hero-title-accent">STEEL.</span>
            <span className="hero-title-line">BUILT TO LAST.</span>
          </h1>

          <p className="hero-desc">
            Your trusted partner for SS pipes, sheets, ACP panels, HPL sheets, WPC planks
            and all premium metal products — delivered from Theni to all of Tamil Nadu.
          </p>

          <div className="hero-cta-row">
            <button className="btn-primary hero-btn" onClick={() => scrollTo('#products')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                <polyline points="16 21 12 17 8 21"/>
                <polyline points="8 3 12 7 16 3"/>
              </svg>
              View Products
            </button>
            <button className="btn-outline hero-btn" onClick={() => scrollTo('#contact')}>
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Trust badges */}
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              Premium Quality
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              Pan Tamil Nadu Delivery
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              Best Price Guaranteed
            </div>
          </div>
        </div>

        {/* Right visual panel */}
        <div className="hero-right">
          <div className="hero-pipe-visual">
            <SSPipeArt variant="hero" />
          </div>
          <div className="hero-card-float">
            <div className="hcard-inner">
              <div className="hcard-icon-row">
                <div className="hcard-icon blue">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 3H8L2 7h20l-6-4z"/>
                  </svg>
                </div>
                <div className="hcard-label">
                  <span className="hcard-num">10+</span>
                  <span className="hcard-sub">Years Trust</span>
                </div>
              </div>
              <div className="hcard-products">
                {['SS ERW Pipes','SS Sheets','ACP Sheets','HPL Sheets','WPC Planks'].map(p => (
                  <span key={p} className="hcard-tag">{p}</span>
                ))}
              </div>
            </div>

            {/* Floating stat chips */}
            <div className="stat-chip stat-chip-1">
              <span className="chip-num">500+</span>
              <span className="chip-label">Projects</span>
            </div>
            <div className="stat-chip stat-chip-2">
              <span className="chip-num">SS 304</span>
              <span className="chip-label">Grade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
     
    </section>
  );
};

export default Hero;

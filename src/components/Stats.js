import React, { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Stats.css';

const stats = [
  { num: 500,  suffix: '+', label: 'Projects Completed',   icon: '🏗️' },
  { num: 10,   suffix: '+', label: 'Years of Experience',  icon: '📅' },
  { num: 1000, suffix: '+', label: 'Happy Customers',      icon: '😊' },
  { num: 30,   suffix: '+', label: 'ACP Colors Available', icon: '🎨' },
  { num: 5,    suffix: '+', label: 'HPL Sheet Designs',    icon: '🪵' },
  { num: 100,  suffix: '%', label: 'Quality Certified',    icon: '✅' },
];

function Counter({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target]);

  return <span>{count}{suffix}</span>;
}

const Stats = () => {
  const [sectionRef, sectionVis] = useReveal(0.2);

  return (
    <section className="stats-section" ref={sectionRef} id="stats">
      {/* Background decoration */}
      <div className="stats-bg-line" />

      <div className="container">
        <div className={`stats-label reveal ${sectionVis ? 'visible' : ''}`}>
          <p className="section-eyebrow">By The Numbers</p>
          <h2 className="section-title">Proven Track Record</h2>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-card reveal ${sectionVis ? `visible delay-${i + 1}` : ''}`}
            >
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-number">
                <Counter target={s.num} suffix={s.suffix} active={sectionVis} />
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

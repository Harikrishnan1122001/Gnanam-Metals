import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 12;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        {/* Animated G Logo */}
        <div className="loader-logo-wrap">
          <div className="loader-ring outer" />
          <div className="loader-ring inner" />
          <div className="loader-g">
            <img src={logo} alt="Gnanam Metals" className="loader-logo-img" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="loader-brand">
          <span className="loader-gnanam">GNANAM</span>
          <span className="loader-metals">METALS</span>
        </div>

        {/* Progress Bar */}
        <div className="loader-progress-wrap">
          <div className="loader-progress-bar">
            <div
              className="loader-progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="loader-pct">{Math.min(Math.round(progress), 100)}%</span>
        </div>

        <p className="loader-tagline">Forging Quality Since Day One</p>
      </div>
    </div>
  );
};

export default Loader;

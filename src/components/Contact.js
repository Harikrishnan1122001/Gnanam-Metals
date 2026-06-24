import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', product: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const [headerRef, headerVis] = useReveal();
  const [bodyRef, bodyVis] = useReveal(0.05);

  const handleChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: send to backend / WhatsApp API
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: '', phone: '', email: '', product: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div ref={headerRef} className={`contact-header reveal ${headerVis ? 'visible' : ''}`}>
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Request a Quote <br />or Call Us Now</h2>
          <p className="section-subtitle">
            Reach out for pricing, bulk orders, custom cutting or any queries.
            We're always happy to help.
          </p>
        </div>

        <div ref={bodyRef} className="contact-grid">
          {/* Info Panel */}
          <div className={`contact-info reveal-left ${bodyVis ? 'visible' : ''}`}>
            <div className="info-card">
              <h3 className="info-heading">Gnanam Metals</h3>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span className="info-label">Address</span>
                    <span className="info-val">S. Renganathapuram, Theni, Tamil Nadu</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.72 16z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="info-label">Phone / WhatsApp</span>
                    <a href="tel:+919876543210" className="info-val info-link">+91 98765 43210</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <span className="info-label">Business Hours</span>
                    <span className="info-val">Mon – Sat: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919876543210?text=Hi%20Gnanam%20Metals%2C%20I%20need%20a%20quote%20for%20"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.853L0 24l6.335-1.509A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.6 9.6 0 0 1-4.901-1.345l-.35-.208-3.764.896.931-3.668-.228-.367A9.573 9.573 0 0 1 2.4 12C2.4 6.702 6.702 2.4 12 2.4c5.298 0 9.6 4.302 9.6 9.6 0 5.298-4.302 9.6-9.6 9.6z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className={`contact-form-wrap reveal-right ${bodyVis ? 'visible' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    className="form-input"
                    type="text" name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    className="form-input"
                    type="tel" name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email" name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Product Interested In *</label>
                <select
                  className="form-input form-select"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a product...</option>
                  <option>SS ERW Pipes</option>
                  <option>SS Seamless Pipes</option>
                  <option>SS Sheets</option>
                  <option>SS Plates</option>
                  <option>SS Angles</option>
                  <option>SS Flats</option>
                  <option>SS Rods</option>
                  <option>ACP Sheets</option>
                  <option>HPL Sheets</option>
                  <option>WPC Planks</option>
                  <option>Multiple Products</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message / Requirements</label>
                <textarea
                  className="form-input form-textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention quantity, size, grade or any specific requirements..."
                  rows={4}
                />
              </div>

              <button type="submit" className="btn-primary form-submit">
                {sent ? (
                  <>✓ Quote Request Sent!</>
                ) : (
                  <>
                    Send Quote Request
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

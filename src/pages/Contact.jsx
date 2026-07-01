import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Clock, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API email dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      navigate('/thank-you');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneChange = (e) => {
    const rawVal = e.target.value.replace(/\D/g, ''); // strip all non-digits
    const limitedVal = rawVal.slice(0, 10); // max 10 digits
    let formattedVal = limitedVal;
    if (limitedVal.length > 5) {
      formattedVal = `${limitedVal.slice(0, 5)} ${limitedVal.slice(5)}`;
    }
    setFormData({
      ...formData,
      phone: formattedVal
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="page-wrapper">
      <div className="content-grow">
        {/* Section 1: Studio Location Map */}
        <section style={{ width: '100%', height: '50vh', backgroundColor: '#eaeaea', overflow: 'hidden' }}>
          <iframe 
            title="Target Design Office Location"
            src="https://maps.google.com/maps?q=Target%20Design%20Building%20Consultant,%2031-32,%20Metro%20Enclave,%20The%20Vera,%20B2B,%20Tonk%20Rd,%20Taru%20Chhaya%20Nagar,%20Jaipur,%20Rajasthan%20302029&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* Section 2 & 3: Info & Inquiry Form */}
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div 
              style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '80px', alignItems: 'start' }}
              className="editorial-grid"
            >
              {/* Left Column: Contact Details & Clickable Quick Action Buttons */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
              >
                <div>
                  <div className="accent-line" />
                  <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.1' }}>
                    Get in Touch
                  </h1>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Whether you would like to initiate a new design project or collaborate on a development, our team is ready to guide you.
                  </p>
                </div>

                {/* Office Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <MapPin size={20} className="text-gold" style={{ marginTop: '3px' }} />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '5px' }}>
                        Studio Address
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                        Target Design Building Consultant,<br />
                        31-32, Metro Enclave, The Vera, B2B, Tonk Rd,<br />
                        Taru Chhaya Nagar, Jaipur, Rajasthan 302029
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <Clock size={20} className="text-gold" style={{ marginTop: '3px' }} />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '5px' }}>
                        Office Hours
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM (IST)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} className="action-buttons-list">
                  <a 
                    href="tel:+919928364983" 
                    className="contact-action-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '16px 24px',
                      border: '1px solid var(--border-color)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      transition: 'all 0.3s'
                    }}
                  >
                    <Phone size={16} className="text-gold" />
                    Call Studio
                  </a>

                  <a 
                    href="https://wa.me/919928364983?text=Hello%20Target%20Design,%20I%20would%20like%20to%20discuss%20a%20project." 
                    target="_blank"
                    rel="noreferrer"
                    className="contact-action-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '16px 24px',
                      border: '1px solid var(--border-color)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      transition: 'all 0.3s'
                    }}
                  >
                    <MessageSquare size={16} className="text-gold" />
                    WhatsApp Chat
                  </a>

                  <a 
                    href="mailto:info@auraadesign.com" 
                    className="contact-action-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '16px 24px',
                      border: '1px solid var(--border-color)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      transition: 'all 0.3s'
                    }}
                  >
                    <Mail size={16} className="text-gold" />
                    Email Office
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Inquiry Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                style={{
                  padding: '50px 40px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderTop: '3px solid var(--accent-gold)'
                }}
                className="form-wrapper"
              >
                <h3 style={{ fontSize: '2rem', marginBottom: '35px', fontWeight: 400, fontFamily: 'var(--font-serif)', letterSpacing: '0.02em' }}>
                  Project Inquiry
                </h3>

                <motion.form 
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
                >
                  {/* Name */}
                  <div className="input-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Email & Phone grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                    <div className="input-group">
                      <label className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="input-group">
                      <label className="form-label">Phone Number</label>
                      <div className="phone-input-wrapper">
                        <span className="phone-prefix">+91</span>
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="form-input-phone"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="input-group">
                    <label className="form-label">Message Details</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                      style={{ resize: 'none' }}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      padding: '16px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                    className="form-submit-btn"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    {!isSubmitting && <Send size={14} />}
                  </button>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .contact-action-btn:hover {
          background-color: var(--bg-secondary);
          border-color: var(--accent-gold) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }
        .form-wrapper {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.04);
          border-radius: 4px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-label {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-light);
          transition: all 0.3s var(--ease-custom);
        }
        .input-group:focus-within .form-label {
          color: var(--accent-gold);
        }
        .form-input {
          width: 100%;
          padding: 12px 0px;
          border: none;
          border-bottom: 1px solid var(--border-color);
          background-color: transparent;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          transition: all 0.3s var(--ease-custom);
          border-radius: 0px;
        }
        .form-input:focus {
          border-bottom-color: var(--accent-gold);
          padding-left: 6px;
        }
        .phone-input-wrapper {
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s var(--ease-custom);
          width: 100%;
        }
        .phone-input-wrapper:focus-within {
          border-bottom-color: var(--accent-gold);
        }
        .phone-prefix {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-light);
          padding-right: 8px;
          user-select: none;
          transition: color 0.3s var(--ease-custom);
        }
        .phone-input-wrapper:focus-within .phone-prefix {
          color: var(--accent-gold);
        }
        .form-input-phone {
          width: 100%;
          padding: 12px 0px;
          border: none;
          background-color: transparent;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          transition: all 0.3s var(--ease-custom);
          border-radius: 0px;
        }
        .form-input-phone:focus {
          padding-left: 6px;
        }
        .form-submit-btn {
          background-color: var(--text-primary);
          color: #ffffff;
          border: 1px solid var(--text-primary);
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: all 0.4s var(--ease-custom);
        }
        .form-submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--accent-gold);
          z-index: -1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s var(--ease-custom);
        }
        .form-submit-btn:hover {
          color: #ffffff;
          border-color: var(--accent-gold);
        }
        .form-submit-btn:hover::before {
          transform: scaleX(1);
        }
        .form-submit-btn:hover svg {
          transform: translateX(4px);
        }
        .form-submit-btn svg {
          transition: transform 0.3s var(--ease-custom);
        }
        @media (max-width: 992px) {
          .editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
          .form-wrapper {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Determine if the current page requires a transparent header at the top
  const isHeroPage = location.pathname === '/' || location.pathname.startsWith('/project/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  // Colors based on path and scroll state
  const isLightText = isHeroPage && !isScrolled;
  const navBg = (isScrolled || !isHeroPage) ? 'rgba(245, 242, 235, 0.98)' : 'transparent';
  const navColor = isLightText ? '#ffffff' : 'var(--text-primary)';
  const logoFilter = isLightText ? 'invert(100%)' : 'none';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 'var(--header-height)',
          backgroundColor: navBg,
          color: navColor,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 5vw',
          zIndex: 99,
          borderBottom: (isScrolled || !isHeroPage) ? '1px solid var(--border-color)' : '1px solid transparent',
          transition: 'background-color 0.4s var(--ease-custom), color 0.4s var(--ease-custom), border-bottom 0.4s var(--ease-custom)'
        }}
      >
        {/* Left Side: Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.4rem', 
              fontWeight: 500, 
              letterSpacing: '0.05em',
              transition: 'color 0.3s'
            }}
          >
            Auraa
            <span style={{ fontSize: '0.65rem', display: 'block', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
              Design
            </span>
          </span>
        </NavLink>

        {/* Right Side Navigation (Desktop) */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <div className="desktop-links" style={{ display: 'flex', gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 600 : 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: isActive ? 'var(--accent-gold)' : navColor,
                  borderBottom: isActive ? '1px solid var(--accent-gold)' : '1px solid transparent',
                  paddingBottom: '4px',
                  transition: 'color 0.3s, border-bottom 0.3s'
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            style={{
              color: navColor,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              padding: '6px 12px',
              border: `1px solid ${isLightText ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)'}`,
              borderRadius: '2px',
              transition: 'background-color 0.3s, border-color 0.3s'
            }}
          >
            <span className="menu-text">Menu</span>
            <Menu size={16} />
          </button>
        </nav>
      </header>

      {/* Fullscreen Overlay Menu (Matches Screenshot style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'var(--bg-secondary)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              padding: '0 5vw',
              color: 'var(--text-primary)',
              overflowY: 'auto'
            }}
          >
            {/* Overlay Header */}
            <div
              style={{
                height: 'var(--header-height)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--border-color)'
              }}
            >
              {/* Logo */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                  Auraa
                  <span style={{ fontSize: '0.65rem', display: 'block', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                    Design
                  </span>
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em'
                }}
              >
                <span>Menu</span>
                <X size={16} />
              </button>
            </div>

            {/* Menu Content: Columns layout just like screenshot */}
            <div
              className="menu-content"
              style={{
                flexGrow: 1,
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                alignItems: 'center',
                padding: '40px 0',
                gap: '40px'
              }}
            >
              {/* Left Column: Big Nav Links */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  paddingLeft: '2vw'
                }}
              >
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08, duration: 0.5 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      style={({ isActive }) => ({
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 400,
                        color: isActive ? 'var(--accent-gold)' : 'var(--text-primary)',
                        transition: 'color 0.3s var(--ease-custom), transform 0.3s var(--ease-custom)',
                        display: 'inline-block'
                      })}
                      className="nav-drawer-link"
                    >
                      {link.name === 'Projects' ? 'Portfolio' : link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Contact Details (Exactly from screenshot) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="menu-contact-info"
              >
                <div>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#888', marginBottom: '4px' }}>
                    Country:
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-primary)' }}>India</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-light)', marginBottom: '4px' }}>
                    City:
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Jaipur</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-light)', marginBottom: '4px' }}>
                    Address:
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                    31-32, Metro Enclave, The Vera, B2B, Tonk Rd, Jaipur
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-light)', marginBottom: '4px' }}>
                    Email:
                  </h4>
                  <a href="mailto:info@auraadesign.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    info@auraadesign.com
                  </a>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-light)', marginBottom: '4px' }}>
                    Phone:
                  </h4>
                  <a href="tel:+919928364983" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    +91 99283 64983
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-links {
          display: flex;
        }
        .menu-contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          border-left: 1px solid var(--border-color);
          padding-left: 4vw;
          height: 80%;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .desktop-links {
            display: none !important;
          }
          .menu-content {
            grid-template-columns: 1.2fr 1fr !important;
            grid-template-rows: auto !important;
            gap: 15px !important;
            padding: 10px 0 !important;
            align-content: center !important;
          }
          .menu-content > div:first-child {
            gap: 1rem !important;
            padding-left: 0 !important;
            display: flex;
            flex-direction: column;
          }
          .nav-drawer-link {
            font-size: 1.6rem !important;
          }
          .menu-contact-info {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.75rem !important;
            border-left: 1px solid var(--border-color) !important;
            border-top: none !important;
            padding-left: 15px !important;
            padding-top: 0 !important;
            height: auto !important;
            justify-content: center !important;
            align-items: flex-start !important;
          }
          .menu-contact-info > div {
            gap: 0.1rem !important;
            text-align: left !important;
          }
          .menu-contact-info h4 {
            font-size: 0.6rem !important;
          }
          .menu-contact-info p, 
          .menu-contact-info a {
            font-size: 0.75rem !important;
            word-break: break-all !important;
            line-height: 1.2 !important;
          }
          .menu-text {
            display: none !important;
          }
        }
        .nav-drawer-link:hover {
          color: var(--accent-gold) !important;
          transform: translateX(8px);
        }
      `}</style>
    </>
  );
}

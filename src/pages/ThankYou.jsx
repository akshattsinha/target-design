import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function ThankYou() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="content-grow">
        <section className="section-padding">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}
            >
              {/* Animated Check Icon Ring */}
              <motion.div
                variants={itemVariants}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                }}
              >
                <Check size={36} strokeWidth={1.5} />
              </motion.div>

              {/* Title & Description */}
              <motion.div variants={itemVariants}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '15px', fontFamily: 'var(--font-serif)' }}>
                  Thank You
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
                  Your inquiry has been received. A design representative from Target Design will contact you within 24 hours to schedule a consultation.
                </p>
              </motion.div>

              {/* Refined Divider */}
              <motion.div variants={itemVariants} className="accent-line" style={{ margin: '10px 0' }} />

              {/* 5-Star Review Section Card */}
              <motion.div
                variants={itemVariants}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderTop: '3px solid var(--accent-gold)',
                  padding: '40px 30px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
                  borderRadius: '4px',
                  marginTop: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >
                {/* 5 Stars */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <a 
                    href="https://www.google.com/search?q=Target+Design+Building+Consultant+Jaipur" 
                    target="_blank" 
                    rel="noreferrer"
                    className="review-stars-link"
                    style={{ display: 'flex', gap: '6px', cursor: 'pointer' }}
                    title="Write a review on Google"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} fill="var(--accent-gold)" color="var(--accent-gold)" className="star-icon" />
                    ))}
                  </a>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-gold)', marginTop: '4px', fontWeight: 500 }}>
                    Click stars to write a review on Google
                  </span>
                </div>

                {/* Review Text */}
                <blockquote 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: 'clamp(1.2rem, 3vw, 1.45rem)', 
                    fontStyle: 'italic', 
                    color: 'var(--text-primary)', 
                    lineHeight: '1.5',
                    maxWidth: '650px',
                    textAlign: 'center'
                  }}
                >
                  "Target Design turned our vision into an absolute masterpiece. Their attention to architectural details, premium design language, and project management exceeded all expectations. We couldn't be happier with our new home."
                </blockquote>

                {/* Author Name */}
                <cite 
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.75rem', 
                    fontWeight: 600, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.15em', 
                    color: 'var(--text-light)',
                    fontStyle: 'normal'
                  }}
                >
                  — Mr. & Mrs. Singhania, Jaipur Residential Villa
                </cite>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                variants={itemVariants} 
                style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  marginTop: '20px', 
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                <button
                  onClick={() => navigate('/')}
                  className="btn-back-home"
                  style={{
                    padding: '14px 35px',
                    border: '1px solid var(--text-primary)',
                    backgroundColor: 'var(--text-primary)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-custom)',
                    borderRadius: '2px'
                  }}
                >
                  Back to Home
                </button>
                <button
                  onClick={() => navigate('/projects')}
                  className="btn-view-projects"
                  style={{
                    padding: '14px 35px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-custom)',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  View Projects
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        .btn-back-home:hover {
          background-color: var(--accent-gold);
          border-color: var(--accent-gold);
          color: #ffffff;
        }
        .btn-view-projects:hover {
          border-color: var(--text-primary);
          background-color: var(--bg-secondary);
        }
        .btn-view-projects:hover svg {
          transform: translateX(4px);
        }
        .btn-view-projects svg {
          transition: transform 0.3s var(--ease-custom);
        }
        .review-stars-link:hover .star-icon {
          transform: scale(1.18);
          color: var(--accent-gold-hover);
          fill: var(--accent-gold-hover);
        }
        .star-icon {
          transition: transform 0.3s var(--ease-custom), fill 0.3s var(--ease-custom), color 0.3s var(--ease-custom);
        }
      `}</style>
      <Footer />
    </div>
  );
}

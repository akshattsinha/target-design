import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef(null);
  const touchStartRef = useRef(null);
  const navigate = useNavigate();

  // Reset autoplay timer
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 7000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  // Mobile Swipe support
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    
    // Swipe left -> Next, Swipe right -> Prev
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartRef.current = null;
  };

  const activeProject = projectsData[index];

  // Animation variants for cinematic transition
  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 1.1,
      x: dir > 0 ? 100 : -100
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.8 },
        scale: { duration: 1.2, ease: 'easeOut' },
        x: { duration: 0.8, ease: 'easeOut' }
      }
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.95,
      x: dir > 0 ? -100 : 100,
      transition: {
        opacity: { duration: 0.8 },
        scale: { duration: 1.2, ease: 'easeIn' },
        x: { duration: 0.8, ease: 'easeIn' }
      }
    })
  };

  return (
    <div 
      className="page-wrapper" 
      style={{ overflow: 'hidden' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fullscreen Slider Section */}
      <section 
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000000',
          color: '#ffffff',
          overflow: 'hidden'
        }}
      >
        {/* Animated Slide Background */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${activeProject.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />
        </AnimatePresence>

        {/* Cinematic Content Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            left: '5vw',
            zIndex: 2,
            maxWidth: '600px',
            color: '#ffffff'
          }}
        >
          {/* Staggered text reveals */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span 
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.75rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.3em', 
                  color: 'var(--accent-gold)', 
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                {activeProject.category} &bull; {activeProject.location}
              </span>
              
              <h1 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                  fontWeight: 300,
                  lineHeight: '1.15',
                  marginBottom: '25px',
                  letterSpacing: '0.02em'
                }}
              >
                {activeProject.name}
              </h1>

              <button
                onClick={() => navigate(`/project/${activeProject.id}`)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 28px',
                  border: '1px solid #ffffff',
                  color: '#ffffff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                className="view-project-btn"
              >
                View Project
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Counter (01 / 06) */}
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            right: '5vw',
            zIndex: 2,
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            letterSpacing: '0.1em',
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px'
          }}
        >
          <span style={{ fontSize: '2rem', fontWeight: 400 }}>0{index + 1}</span>
          <span style={{ opacity: 0.5, fontSize: '0.9rem' }}>/</span>
          <span style={{ opacity: 0.5, fontSize: '0.9rem' }}>0{projectsData.length}</span>
        </div>

        {/* Navigation Arrows */}
        <div
          style={{
            position: 'absolute',
            bottom: '22%',
            right: '5vw',
            zIndex: 2,
            display: 'flex',
            gap: '15px'
          }}
        >
          <button
            onClick={handlePrev}
            style={{
              width: '50px',
              height: '50px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.3s'
            }}
            className="slider-nav-arrow"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            style={{
              width: '50px',
              height: '50px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.3s'
            }}
            className="slider-nav-arrow"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <style>{`
        .view-project-btn:hover {
          background-color: #ffffff;
          color: #111111;
        }
        .slider-nav-arrow:hover {
          background-color: #ffffff;
          color: #111111;
          border-color: #ffffff;
        }
        @media (max-width: 768px) {
          .slider-nav-arrow {
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}

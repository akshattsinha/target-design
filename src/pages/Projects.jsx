import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import Footer from '../components/Footer';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Villas', 'Residential', 'Commercial', 'Interiors', 'Hospitality'];

  // Filtered projects
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <div className="page-wrapper">
      <div className="content-grow">
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="container">
            {/* Page Title */}
            <div style={{ marginBottom: '60px' }}>
              <div className="accent-line" />
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '15px' }}>
                Portfolio
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px' }}>
                Explore our selection of award-winning architectural designs, interior developments, and hospitality installations.
              </p>
            </div>

            {/* Filtering Tabs */}
            <div 
              className="filter-tabs"
              style={{ 
                display: 'flex', 
                gap: '20px', 
                flexWrap: 'wrap', 
                marginBottom: '50px',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '20px'
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: filter === cat ? 600 : 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: filter === cat ? 'var(--accent-gold)' : 'var(--text-secondary)',
                    padding: '8px 16px',
                    transition: 'color 0.3s',
                    position: 'relative'
                  }}
                >
                  {cat}
                  {filter === cat && (
                    <motion.div 
                      layoutId="activeFilter"
                      style={{
                        position: 'absolute',
                        bottom: 'var(--active-indicator-bottom, -21px)',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--accent-gold)'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <motion.div 
              layout
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '40px' 
              }}
              className="portfolio-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate(`/project/${project.id}`)}
                    style={{
                      cursor: 'pointer',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-secondary)',
                      overflow: 'hidden'
                    }}
                    className="portfolio-card"
                  >
                    {/* Image Container with Zoom & Overlay */}
                    <div 
                      style={{ 
                        position: 'relative', 
                        overflow: 'hidden',
                        aspectRatio: '16/10'
                      }}
                    >
                      <img 
                        src={project.coverImage} 
                        alt={project.name} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s var(--ease-custom)'
                        }}
                        className="portfolio-img"
                      />

                      {/* Hover Overlay */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(17, 17, 17, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.4s var(--ease-custom)',
                          color: '#ffffff'
                        }}
                        className="portfolio-overlay"
                      >
                        <span 
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            border: '1px solid #ffffff',
                            padding: '12px 28px',
                            transition: 'all 0.3s'
                          }}
                          className="overlay-btn"
                        >
                          View Project
                        </span>
                      </div>
                    </div>

                    {/* Metadata Card Footer */}
                    <div style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span 
                          style={{ 
                            fontFamily: 'var(--font-sans)', 
                            fontSize: '0.7rem', 
                            fontWeight: 500, 
                            color: 'var(--accent-gold)', 
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            display: 'block',
                            marginBottom: '6px'
                          }}
                        >
                          {project.category} &bull; {project.location}
                        </span>
                        <h2 style={{ fontSize: '1.6rem', fontWeight: 500 }}>
                          {project.name}
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.04);
        }
        .portfolio-card:hover .portfolio-overlay {
          opacity: 1 !important;
        }
        .overlay-btn:hover {
          background-color: #ffffff;
          color: #111111;
        }
        .filter-tabs {
          scrollbar-width: none;
          --active-indicator-bottom: -21px;
        }
        .filter-tabs::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .filter-tabs {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 12px !important;
            margin-bottom: 30px;
            gap: 10px !important;
            --active-indicator-bottom: -13px;
          }
          .filter-tabs button {
            flex-shrink: 0;
            padding: 8px 12px !important;
          }
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
}

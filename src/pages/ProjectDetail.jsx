import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Minimize, User } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Footer from '../components/Footer';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find active project
  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[projectIndex];

  // Scroll to top when project ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="page-wrapper" style={{ padding: '150px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Project Not Found</h2>
          <Link to="/projects" className="btn-gold">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  // Get previous and next projects
  const prevProject = projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="page-wrapper">
      <div className="content-grow no-padding-top">
        {/* Dynamic Project Hero */}
        <section 
          style={{
            position: 'relative',
            height: '70vh',
            width: '100%',
            backgroundColor: '#111',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.45)), url(${project.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'flex-end',
            paddingBottom: '5%',
            color: '#ffffff'
          }}
        >
          <div className="container" style={{ width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span 
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.75rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.25em', 
                  color: 'var(--accent-gold)', 
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                {project.category}
              </span>
              <h1 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                  fontWeight: 300,
                  lineHeight: '1.1',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}
              >
                {project.name}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Project Layout (Editorial Columns) */}
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div 
              style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '80px', alignItems: 'start' }}
              className="editorial-grid"
            >
              {/* Left Column: Specifications (Table style) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                style={{
                  borderTop: '1px solid var(--border-color)',
                  position: 'sticky',
                  top: '120px'
                }}
              >
                <div style={{ padding: '25px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                    <MapPin size={14} className="text-gold" /> Location
                  </span>
                  <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{project.location}</span>
                </div>

                <div style={{ padding: '25px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                    <Minimize size={14} className="text-gold" /> Total Area
                  </span>
                  <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{project.area}</span>
                </div>

                <div style={{ padding: '25px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                    <Calendar size={14} className="text-gold" /> Year
                  </span>
                  <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{project.year}</span>
                </div>

                <div style={{ padding: '25px 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                    <User size={14} className="text-gold" /> Client
                  </span>
                  <span style={{ fontWeight: 500, fontSize: '0.95rem', textAlign: 'right' }}>{project.client}</span>
                </div>
              </motion.div>

              {/* Right Column: Architectural Narrative & Details */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
              >
                <div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: 500 }}>
                    Design Narrative
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem', whiteSpace: 'pre-line' }}>
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-primary)', marginBottom: '15px' }}>
                    Key Highlights
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {project.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-gold)' }}>&mdash;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials */}
                <div>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-primary)', marginBottom: '15px' }}>
                    Material Palette
                  </h4>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {project.materials.map((mat, i) => (
                      <span 
                        key={i} 
                        style={{ 
                          fontSize: '0.8rem', 
                          padding: '8px 16px', 
                          border: '1px solid var(--border-color)', 
                          backgroundColor: 'var(--bg-primary)',
                          fontFamily: 'var(--font-sans)',
                          borderRadius: '2px',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section: Masonry Gallery (Beautiful Asymmetric Layout) */}
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ marginBottom: '50px', textAlign: 'center' }}>
              <div className="accent-line" style={{ margin: '0 auto 20px auto' }} />
              <h2 style={{ fontSize: '2.5rem' }}>Visual Details</h2>
            </div>

            {/* Asymmetric Gallery */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                gap: '30px',
                gridAutoFlow: 'dense'
              }}
              className="gallery-grid"
            >
              {project.gallery.map((img, idx) => {
                // Style columns and heights differently for masonry look
                const isWide = idx === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                      gridColumn: isWide ? 'span 2' : 'span 1',
                      overflow: 'hidden',
                      height: isWide ? '450px' : '350px',
                      border: '1px solid var(--border-color)'
                    }}
                    className="gallery-item"
                  >
                    <img 
                      src={img} 
                      alt={`${project.name} gallery ${idx + 1}`} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(5%)'
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section: Previous / Next Project Footer Selector */}
        <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
          <div 
            style={{ 
              display: 'flex', 
              width: '100%'
            }}
            className="prev-next-container"
          >
            {/* Prev Box */}
            <div 
              onClick={() => navigate(`/project/${prevProject.id}`)}
              style={{
                flex: 1,
                padding: '60px 5vw',
                borderRight: '1px solid var(--border-color)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                transition: 'background-color 0.4s'
              }}
              className="prev-next-box"
            >
              <ArrowLeft size={20} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Previous Project
                </span>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 500, marginTop: '5px' }}>
                  {prevProject.name}
                </h4>
              </div>
            </div>

            {/* Next Box */}
            <div 
              onClick={() => navigate(`/project/${nextProject.id}`)}
              style={{
                flex: 1,
                padding: '60px 5vw',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                textAlign: 'right',
                gap: '20px',
                transition: 'background-color 0.4s'
              }}
              className="prev-next-box"
            >
              <div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Next Project
                </span>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 500, marginTop: '5px' }}>
                  {nextProject.name}
                </h4>
              </div>
              <ArrowRight size={20} style={{ color: 'var(--accent-gold)' }} />
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .prev-next-box:hover {
          background-color: var(--bg-primary);
        }
        @media (max-width: 992px) {
          .editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .editorial-grid > div:first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-item {
            grid-column: span 1 !important;
            height: 250px !important;
          }
          .prev-next-container {
            flex-direction: column !important;
          }
          .prev-next-box {
            border-right: none !important;
            border-bottom: 1px solid var(--border-color) !important;
            padding: 40px 5vw !important;
            justify-content: flex-start !important;
            text-align: left !important;
          }
          .prev-next-box:last-child {
            border-bottom: none !important;
            flex-direction: row-reverse !important;
            justify-content: flex-end !important;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
}

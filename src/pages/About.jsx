import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Leaf, Cpu, Compass } from 'lucide-react';
import Footer from '../components/Footer';

export default function About() {
  const team = [
    {
      name: "Arundhati Sen",
      role: "Creative Director",
      image: "/images/team_1.png"
    },
    {
      name: "Kabir Mehta",
      role: "Head of Interiors",
      image: "/images/team_2.png"
    },
    {
      name: "Meera Nair",
      role: "Project Architect",
      image: "/images/team_3.png"
    }
  ];

  const values = [
    {
      icon: <Lightbulb size={28} strokeWidth={1} />,
      title: "Creativity",
      desc: "Pushing boundaries to craft unique spatial statements that transcend typical design paradigms."
    },
    {
      icon: <Leaf size={28} strokeWidth={1} />,
      title: "Sustainability",
      desc: "Blending low-impact materials and local site conditions to build structures that respect their ecosystem."
    },
    {
      icon: <Cpu size={28} strokeWidth={1} />,
      title: "Innovation",
      desc: "Integrating state-of-the-art structural techniques and smart living technologies into clean forms."
    },
    {
      icon: <Compass size={28} strokeWidth={1} />,
      title: "Craftsmanship",
      desc: "A meticulous commitment to precision and joinery details that renders architectural drawings into physical art."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="page-wrapper">
      <div className="content-grow">
        {/* Section 1: About Studio */}
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'start' }}
              className="editorial-grid"
            >
              <div>
                <div className="accent-line" />
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', marginBottom: '20px' }}>
                  About Our Studio
                </h1>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--accent-gold)', fontStyle: 'italic', lineHeight: '1.4' }}>
                  Crafting spaces that capture silence, light, and timelessness.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', color: 'var(--text-secondary)' }}>
                <p>
                  Founded in 2012, Auraa Design is an internationally recognized design atelier specializing in bespoke luxury residential, commercial, and hospitality architecture. We view architecture not as a set of static walls, but as an experience—an orchestration of natural light, raw material weights, and flowing volumes.
                </p>
                <p>
                  <strong>Our Philosophy:</strong> We believe in radical minimalism. True luxury lies not in ornamentation, but in the precision of the details, the purity of structural forms, and the honest expression of materials like raw concrete, local stone, and aged timber.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }} className="mission-vision">
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-primary)', marginBottom: '10px' }}>
                      Our Vision
                    </h3>
                    <p style={{ fontSize: '0.9rem' }}>
                      To set the global benchmark for modern, context-rich architectural works that harmonize human dwelling with nature.
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-primary)', marginBottom: '10px' }}>
                      Our Mission
                    </h3>
                    <p style={{ fontSize: '0.9rem' }}>
                      To listen deeply to the land and the client, crafting sustainable, structurally bold spaces built to endure generations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Founder Section */}
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div 
              style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '80px', alignItems: 'center' }}
              className="editorial-grid reverse-grid"
            >
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="/images/founder.png" 
                  alt="Ankur Gulati, Founder of Auraa Design" 
                  style={{ width: '100%', height: 'auto', border: '1px solid var(--border-color)', filter: 'grayscale(20%)' }}
                />
              </motion.div>

              {/* Founder Details */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.25em', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>
                  Founder & Principal
                </span>
                <h2 style={{ fontSize: '3rem', marginBottom: '25px', lineHeight: '1.1' }}>
                  Ankur Gulati
                </h2>
                
                <blockquote style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '20px', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '25px', lineHeight: '1.4', color: 'var(--text-primary)' }}>
                  "Architecture is the art of sculpting light to frame human emotion. We don't construct shelters; we build visual and tactile sanctuaries."
                </blockquote>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '35px', fontSize: '0.95rem' }}>
                  With over two decades of global design experience, Ankur Gulati directs the design vision at the studio. After working with renowned studios in Tokyo and Milan, he established Auraa Design with the intent to merge classic Eastern minimalism with Western structural boldness. His award-winning philosophy emphasizes materiality, shadows, and natural ventilation.
                </p>

                {/* Signature Styling */}
                <div style={{ marginTop: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '2.5rem', fontWeight: 300, color: 'var(--accent-gold)', letterSpacing: '0.05em' }}>
                    Ankur Gulati
                  </span>
                  <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888', marginTop: '5px' }}>
                    Principal Signature
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Team */}
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div className="accent-line" style={{ margin: '0 auto 20px auto' }} />
              <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Our Team</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem' }}>
                A highly synchronized collective of designers, thinkers, and technical specialists.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }} className="team-grid">
              {team.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)', 
                    border: '1px solid var(--border-color)', 
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s'
                  }}
                  className="team-card"
                >
                  <div style={{ overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(15%)', transition: 'transform 0.5s' }}
                      className="team-img"
                    />
                  </div>
                  <div style={{ padding: '25px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '5px', fontWeight: 500 }}>
                      {member.name}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold)', fontWeight: 500 }}>
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Studio Values */}
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '70px' }}>
              <div className="accent-line" style={{ margin: '0 auto 20px auto' }} />
              <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Studio Values</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem' }}>
                The core pillars that steer every line we draw and every space we build.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }} className="values-grid">
              {values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  style={{
                    padding: '40px 30px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                  className="value-card"
                >
                  <div style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>
                    {val.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', fontWeight: 500 }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .team-card:hover {
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
        }
        .team-card:hover .team-img {
          transform: scale(1.05);
        }
        @media (max-width: 992px) {
          .editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
}

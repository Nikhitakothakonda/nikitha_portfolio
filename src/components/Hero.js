import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">Sr. Data Engineer</div>
        <h1 className="hero-name">
          Nikhita <span>Kothakonda</span>
        </h1>
        <p className="hero-tagline">
          7+ Years | AWS Redshift · Tableau · Python · Spark · Snowflake
        </p>
        <p className="hero-summary">
          Data Engineer with expertise in data integration, cloud-based solutions, and BI dashboards.
          Delivering optimized data pipelines that drive organizational success.
        </p>
        <div className="hero-contacts">
          <a href="tel:9452518080" className="contact-chip">
            <FaPhone /> 945.251.8080
          </a>
          <a href="mailto:nikhita.data2807@gmail.com" className="contact-chip">
            <FaEnvelope /> nikhita.data2807@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/nikitha-kk-394546272" target="_blank" rel="noreferrer" className="contact-chip">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <div className="hero-cta">
          <button onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
            View Portfolio
          </button>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
            Contact Me
          </button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-dot" />
      </div>
    </section>
  );
};

export default Hero;

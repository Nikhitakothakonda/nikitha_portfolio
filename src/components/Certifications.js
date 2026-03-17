import React from 'react';
import { FaAws, FaAward, FaTrophy, FaChartBar } from 'react-icons/fa';

const certs = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: <FaAws />,
    color: '#FF9900',
    type: 'Certification',
  },
  {
    title: 'Tableau Desktop Specialist',
    issuer: 'Tableau / Salesforce',
    score: '90%',
    icon: <FaChartBar />,
    color: '#E97627',
    type: 'Certification',
  },
  {
    title: 'Applause Award',
    issuer: 'Caliber Technologies',
    icon: <FaTrophy />,
    color: '#FFD700',
    type: 'Award',
    description: 'Recognized for outstanding performance in guiding peers at Caliber.',
  },
];

const Certifications = () => {
  return (
    <section className="section certs-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Achievements</span>
          <h2>Certifications & <span>Awards</span></h2>
          <p>Professional recognitions and credentials</p>
        </div>
        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div className="cert-card" key={i} style={{ '--accent': cert.color }}>
              <div className="cert-icon-wrap" style={{ background: `${cert.color}20`, color: cert.color }}>
                {cert.icon}
              </div>
              <div className="cert-info">
                <span className="cert-type">{cert.type === 'Award' ? <FaAward /> : null} {cert.type}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.score && <span className="cert-score">Score: {cert.score}</span>}
                {cert.description && <p className="cert-desc">{cert.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

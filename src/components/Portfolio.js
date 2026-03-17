import React, { useState } from 'react';
import { SiPython, SiApachespark, SiSnowflake, SiApacheairflow } from 'react-icons/si';
import { FaDatabase, FaExternalLinkAlt, FaGithub, FaAws, FaChartBar } from 'react-icons/fa';

const projects = [
  {
    title: 'Healthcare Data Pipeline',
    description: 'End-to-end HIPAA-compliant data pipeline for processing claims, patient records, and clinical data using Spark and Snowflake.',
    tags: ['Python', 'Spark', 'Snowflake', 'Airflow'],
    icons: [<SiPython />, <SiApachespark />, <SiSnowflake />, <SiApacheairflow />],
    category: 'Data Engineering',
    color: '#6C63FF',
    github: '#',
    demo: '#',
  },
  {
    title: 'Banking Analytics Dashboard',
    description: 'Interactive Tableau dashboards for KPI tracking, conversion metrics, and fraud detection for a major US bank.',
    tags: ['Tableau', 'SQL', 'AWS Redshift', 'Python'],
    icons: [<FaChartBar />, <FaDatabase />, <FaAws />, <SiPython />],
    category: 'BI & Analytics',
    color: '#00C9A7',
    github: '#',
    demo: '#',
  },
  {
    title: 'AWS Redshift Migration',
    description: 'Large-scale data migration from AWS S3 to Redshift with optimized ETL processes, improving query performance by 40%.',
    tags: ['AWS S3', 'Redshift', 'Python', 'SQL'],
    icons: [<FaAws />, <FaDatabase />, <SiPython />],
    category: 'Cloud',
    color: '#FF9900',
    github: '#',
    demo: '#',
  },
  {
    title: 'Actuarial Data Mart',
    description: 'Advanced data science algorithms enriching actuarial healthcare data marts for patient outcome prediction and cost forecasting.',
    tags: ['Python', 'ML', 'Databricks', 'Spark'],
    icons: [<SiPython />, <SiApachespark />],
    category: 'Data Science',
    color: '#FF6B6B',
    github: '#',
    demo: '#',
  },
  {
    title: 'CI/CD Data Pipeline Automation',
    description: 'Jenkins and GitHub-based CI/CD pipelines for healthcare analytics applications, improving deployment frequency and system reliability.',
    tags: ['Jenkins', 'GitHub', 'Python', 'Airflow'],
    icons: [<SiPython />, <SiApacheairflow />],
    category: 'DevOps',
    color: '#F7DF1E',
    github: '#',
    demo: '#',
  },
  {
    title: 'Power BI Geospatial Dashboards',
    description: 'Interactive dashboards with geospatial data sets and DAX formulas enabling leadership teams to make informed strategic decisions.',
    tags: ['Power BI', 'DAX', 'SQL', 'Databricks'],
    icons: [<FaDatabase />, <SiApachespark />],
    category: 'BI & Analytics',
    color: '#E97627',
    github: '#',
    demo: '#',
  }
];

const categories = ['All', 'Data Engineering', 'BI & Analytics', 'Cloud', 'Data Science', 'DevOps'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Work</span>
          <h2>Featured <span>Projects</span></h2>
          <p>Highlights of data engineering and analytics work</p>
        </div>
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filtered.map((project, i) => (
            <div className="project-card" key={i} style={{ '--accent': project.color }}>
              <div className="project-card-top">
                <span className="project-category">{project.category}</span>
                <div className="project-links">
                  <a href={project.github} className="project-link"><FaGithub /></a>
                  <a href={project.demo} className="project-link"><FaExternalLinkAlt /></a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-icons">
                {project.icons.map((icon, idx) => (
                  <span key={idx} className="project-tech-icon">{icon}</span>
                ))}
              </div>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

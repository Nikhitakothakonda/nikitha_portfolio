import React, { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    role: 'Sr. Data Engineer',
    company: 'Netsmart Technologies',
    location: 'Kansas, USA',
    period: '03/2024 – Present',
    type: 'Current',
    color: '#6C63FF',
    highlights: [
      'Developed and optimized healthcare data pipelines using SPARK with Python and SQL, enabling seamless integration and analysis of claims, patient records, and clinical data.',
      'Built and maintained cloud-based data solutions (Azure, Databricks, Snowflake) to handle large volumes of sensitive healthcare data, ensuring compliance with HIPAA and other regulatory standards.',
      'Implemented advanced data science algorithms to enrich actuarial healthcare data marts, driving improved predictive analytics for patient outcomes and cost forecasting.',
      'Leveraged data orchestration tools (ADF, Airflow) to automate workflows, reducing turnaround time for critical reporting by 30%.',
      'Developed CI/CD pipelines using Jenkins and GitHub for healthcare analytics applications.',
      'Monitored and maintained data pipelines for monthly and quarterly reporting of healthcare metrics.',
    ]
  },
  {
    role: 'Data Engineer',
    company: 'US Bank',
    location: 'Minnesota, USA',
    period: '06/2022 – 02/2024',
    type: 'Previous',
    color: '#00C9A7',
    highlights: [
      'Led the migration of data from AWS S3 buckets into AWS Redshift, ensuring seamless ETL processes and optimizing data storage for enhanced performance in banking analytics.',
      'Applied advanced Python, SQL and Redshift techniques to model, validate, and optimize online & credit banking data ensuring efficiency in critical financial reports.',
      'Implemented and governed data quality measures, adhering to client-specific coding standards.',
      'Analyzed key banking KPIs and conversion metrics, crafting data-driven narratives for strategic decisions.',
      'Utilized advanced tools like SSIS, SSRS, and SAS to perform statistical analyses and resolve complex data issues.',
    ]
  },
  {
    role: 'Data Engineer',
    company: 'Caliber Technologies Pvt Ltd',
    location: 'India',
    period: '02/2018 – 08/2021',
    type: 'Previous',
    color: '#FF6B6B',
    highlights: [
      'Designed and developed complex SQL Views, Stored Procedures, and Triggers across large-scale databases from multiple servers.',
      'Built and automated end-to-end data pipelines using ADF, PySpark, and Databricks, including complex data transformations and manipulations.',
      'Developed interactive dashboards and visualizations using Tableau and Power BI, incorporating DAX formulas and geospatial data sets.',
      'Supported healthcare-specific projects by integrating diverse datasets (EHRs, claims, and pharmacy data).',
    ]
  }
];

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className={`exp-card ${expanded ? 'expanded' : ''}`} style={{ '--accent': exp.color }}>
      <div className="exp-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="exp-meta">
          <div className="exp-role-company">
            <h3 className="exp-role">{exp.role}</h3>
            <div className="exp-company-info">
              <span><FaBuilding /> {exp.company}</span>
              <span><FaMapMarkerAlt /> {exp.location}</span>
              <span><FaCalendarAlt /> {exp.period}</span>
            </div>
          </div>
          <span className={`exp-badge ${exp.type === 'Current' ? 'badge-current' : 'badge-prev'}`}>
            {exp.type}
          </span>
        </div>
        <button className="exp-toggle">
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {expanded && (
        <ul className="exp-highlights">
          {exp.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career</span>
          <h2>Professional <span>Experience</span></h2>
          <p>7+ years of building scalable data solutions across healthcare and finance</p>
        </div>
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

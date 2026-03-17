import React from 'react';
import {
  SiPython, SiJavascript, SiHtml5, SiCss,
  SiApachespark, SiApachekafka,
  SiApacheairflow, SiSnowflake, SiMongodb, SiPostman,
  SiJenkins, SiGithub, SiDatabricks
} from 'react-icons/si';
import { FaDatabase, FaAws, FaCloud, FaChartBar } from 'react-icons/fa';
import { DiMsqlServer } from 'react-icons/di';

const skillCategories = [
  {
    title: 'Programming',
    color: '#3776AB',
    skills: [
      { name: 'Python', icon: <SiPython />, color: '#3776AB' },
      { name: 'SQL / PL-SQL', icon: <FaDatabase />, color: '#F29111' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <SiCss />, color: '#1572B6' },
    ]
  },
  {
    title: 'Cloud & Big Data',
    color: '#FF9900',
    skills: [
      { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      { name: 'Azure', icon: <FaCloud />, color: '#0089D6' },
      { name: 'Apache Spark', icon: <SiApachespark />, color: '#E25A1C' },
      { name: 'Kafka', icon: <SiApachekafka />, color: '#231F20' },
      { name: 'Airflow', icon: <SiApacheairflow />, color: '#017CEE' },
      { name: 'Databricks', icon: <SiDatabricks />, color: '#FF3621' },
    ]
  },
  {
    title: 'Databases & Tools',
    color: '#29B5E8',
    skills: [
      { name: 'Snowflake', icon: <SiSnowflake />, color: '#29B5E8' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'SQL Server', icon: <DiMsqlServer />, color: '#CC2927' },
      { name: 'Tableau', icon: <FaChartBar />, color: '#E97627' },
      { name: 'Jenkins', icon: <SiJenkins />, color: '#D33833' },
      { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    ]
  }
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2>Technical <span>Skills</span></h2>
          <p>Technologies and tools I work with every day</p>
        </div>
        <div className="skills-categories">
          {skillCategories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <h3 className="category-title" style={{ borderColor: cat.color }}>{cat.title}</h3>
              <div className="skills-grid">
                {cat.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className="skill-icon" style={{ color: skill.color, background: `${skill.color}18` }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

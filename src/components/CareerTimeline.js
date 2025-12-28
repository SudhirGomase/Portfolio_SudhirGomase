import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBriefcase } from 'react-icons/fa';
import { useTiltShine } from './useTiltShine';
import './CareerTimeline.css';

const TimelineCard = ({ exp, index, itemVariants }) => {
  const cardRef = useTiltShine({ maxTilt: 6, transitionSpeed: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      className="timeline-card glass"
      variants={itemVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="card-header">
        <div className="card-icon">
          <FaBriefcase />
        </div>
        <div className="card-info">
          <h3 className="company-name">{exp.company}</h3>
          <p className="role">{exp.role}</p>
          <div className="card-meta">
            <span className="period">{exp.period}</span>
            <span className="location">{exp.location}</span>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <h4>Key Achievements:</h4>
        <ul className="achievements-list">
          {exp.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
        
        {exp.projects && exp.projects.length > 0 && (
          <div className="projects-section">
            <h4>Projects:</h4>
            <div className="projects-tags">
              {exp.projects.map((project, idx) => (
                <span key={idx} className="project-tag">{project}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <motion.button
        className="explore-btn"
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        Click to explore
        <FaArrowRight />
      </motion.button>
      <div className="card-shine"></div>
    </motion.div>
  );
};

const CareerTimeline = () => {
  const experiences = [
    {
      company: 'WE-Matter',
      role: 'Software Developer',
      period: 'Jan 2024 – Present',
      location: 'Mumbai, India',
      achievements: [
        'Architected scalable backend system using Node.js, Fastify, and SQL',
        'Improved API response time by 30% with Redis caching',
        'Reduced runtime errors by 35% through optimization',
        'Integrated enterprise HR systems including SAP SuccessFactors',
        'Containerized and deployed services using Docker on AWS'
      ],
      projects: [
        'Survey Management Portal',
        'Agile Performance System (APS)',
        'Analytics Dashboard Module'
      ]
    },
    {
      company: 'TheOther 2 Thirds Consulting LLP',
      role: 'Software Developer Intern',
      period: 'Jun 2023 – Dec 2023',
      location: 'Mumbai, India',
      achievements: [
        'Developed backend functionality using PHP and SQL',
        'Optimized backend code reducing application load time by 20%',
        'Reduced production bugs by 20%',
        'Maintained 95% adherence to coding best practices'
      ],
      projects: [
        'Custom Self-Survey Application'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9, x: -30 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <section id="timeline" className="career-timeline">
      <motion.div
        className="timeline-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p className="timeline-label" variants={itemVariants}>
          PROFESSIONAL JOURNEY
        </motion.p>
        <motion.h2 className="timeline-title" variants={itemVariants}>
          Career Timeline
        </motion.h2>
        <motion.p className="timeline-subtitle" variants={itemVariants}>
          2+ years of building scalable backend systems and delivering impactful solutions
        </motion.p>

        <div className="timeline-wrapper">
          <div className="timeline-line">
            {experiences.map((_, index) => (
              <motion.div
                key={index}
                className="timeline-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2 }}
              />
            ))}
          </div>

          <div className="timeline-cards">
            {experiences.map((exp, index) => (
              <TimelineCard
                key={index}
                exp={exp}
                index={index}
                itemVariants={itemVariants}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CareerTimeline;


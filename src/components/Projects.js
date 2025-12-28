import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTiltShine } from './useTiltShine';
import './Projects.css';

const ProjectCard = ({ project, index, itemVariants }) => {
  const cardRef = useTiltShine({ maxTilt: 8, transitionSpeed: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      className="project-card glass"
      variants={itemVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">{project.image}</div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub /> Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt /> Demo
          </motion.a>
        </div>
      </div>
      <div className="card-shine"></div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Survey Management Portal',
      description:
        'Architected and developed a scalable backend system using Node.js, Fastify, and SQL. Improved API response time by 30% with Redis caching, reduced runtime errors by 35%, and integrated enterprise HR systems including SAP SuccessFactors.',
      technologies: ['Node.js', 'Fastify', 'SQL', 'Redis', 'Docker', 'AWS'],
      github: 'https://github.com/Sudhir-Gomase',
      demo: '#',
      image: '📋',
    },
    {
      title: 'Agile Performance System (APS)',
      description:
        'Developed backend services for an internal Agile Performance Management System handling KPIs, goals, and employee evaluations. Implemented RBAC and secure API endpoints with Prisma and Sequelize.',
      technologies: ['Node.js', 'Prisma', 'Sequelize', 'SQL', 'Swagger'],
      github: 'https://github.com/Sudhir-Gomase',
      demo: '#',
      image: '📈',
    },
    {
      title: 'Analytics Dashboard Module',
      description:
        'Contributed to backend development of a real-time analytics dashboard. Implemented backend logic for engagement scoring, action plan tracking, and optimized SQL queries using Knex.js.',
      technologies: ['Node.js', 'Fastify', 'SQL', 'Knex.js'],
      github: 'https://github.com/Sudhir-Gomase',
      demo: '#',
      image: '📊',
    },
    {
      title: 'Custom Self-Survey Application',
      description:
        'Developed backend functionality using PHP and SQL for a custom self-survey application. Optimized backend code reducing application load time by 20% and production bugs by 20%.',
      technologies: ['PHP', 'SQL', 'LimeSurvey'],
      github: 'https://github.com/Sudhir-Gomase',
      demo: '#',
      image: '📝',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title projects-title" variants={itemVariants}>
          Featured Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              itemVariants={itemVariants}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;


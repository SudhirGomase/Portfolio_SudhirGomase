import React from 'react';
import { motion } from 'framer-motion';
import {
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaServer,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiFastify,
  SiPrisma,
  SiSequelize,
  SiSwagger,
  SiMysql,
  SiPhp,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Node.js', icon: <FaNodeJs />, level: 90, color: '#339933' },
    { name: 'Fastify', icon: <SiFastify />, level: 88, color: '#000000' },
    { name: 'Express.js', icon: <SiExpress />, level: 85, color: '#000000' },
    { name: 'PHP', icon: <SiPhp />, level: 75, color: '#777bb4' },
    { name: 'SQL', icon: <FaDatabase />, level: 90, color: '#336791' },
    { name: 'MySQL', icon: <SiMysql />, level: 88, color: '#4479a1' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, color: '#336791' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47a248' },
    { name: 'Redis', icon: <SiRedis />, level: 85, color: '#dc382d' },
    { name: 'Prisma', icon: <SiPrisma />, level: 82, color: '#2d3748' },
    { name: 'Sequelize', icon: <SiSequelize />, level: 80, color: '#52b0e7' },
    { name: 'Knex.js', icon: <FaDatabase />, level: 78, color: '#e16426' },
    { name: 'Swagger', icon: <SiSwagger />, level: 85, color: '#85ea2d' },
    { name: 'AWS', icon: <FaAws />, level: 80, color: '#ff9900' },
    { name: 'Docker', icon: <FaDocker />, level: 85, color: '#2496ed' },
    { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#f05032' },
  ];

  const categories = [
    {
      title: 'Backend & Languages',
      skills: skills.filter((s) => ['Node.js', 'Fastify', 'Express.js', 'PHP'].includes(s.name)),
    },
    {
      title: 'Databases & ORMs',
      skills: skills.filter((s) => ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Sequelize', 'Knex.js'].includes(s.name)),
    },
    {
      title: 'APIs & Tools',
      skills: skills.filter((s) => ['Swagger'].includes(s.name)),
    },
    {
      title: 'DevOps & Cloud',
      skills: skills.filter((s) => ['AWS', 'Docker', 'Git'].includes(s.name)),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Skills & Technologies
        </motion.h2>
        <div className="skills-grid">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category glass"
              variants={itemVariants}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;


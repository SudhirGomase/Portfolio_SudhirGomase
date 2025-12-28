import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHandPointer } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content-wrapper glass">
          <motion.div className="hero-left" variants={itemVariants}>
            <motion.h1 className="hero-title" variants={itemVariants}>
              Sudhir Gomase
            </motion.h1>
            <motion.p className="hero-subtitle" variants={itemVariants}>
              Backend Developer
            </motion.p>
            <motion.p className="hero-description" variants={itemVariants}>
              Building and scaling production-grade backend systems with 2+ years of experience.
              Specialized in Node.js, Fastify, SQL, and AWS deployments.
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
            <motion.div className="hero-social" variants={itemVariants}>
              <motion.a
                href="https://github.com/Sudhir-Gomase"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:sudhirgomase2109@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="hero-right" variants={itemVariants}>
            <motion.div 
              className="photo-container"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="photo-frame glass">
                <div className="photo-glow"></div>
                <motion.img
                  src="/profile-image.png"
                  alt="Sudhir Gomase"
                  className="profile-photo"
                  onLoad={() => console.log('Profile image loaded successfully')}
                  onError={(e) => {
                    console.log('Profile image not found. Showing placeholder.');
                    // Show placeholder instead of hiding
                    e.target.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
                    e.target.style.display = 'flex';
                    e.target.style.alignItems = 'center';
                    e.target.style.justifyContent = 'center';
                    e.target.style.color = 'white';
                    e.target.style.fontSize = '4rem';
                    e.target.style.fontWeight = 'bold';
                    e.target.alt = 'SG';
                    e.target.src = '';
                  }}
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <div className="photo-overlay"></div>
                <div className="photo-border"></div>
              </div>
              <div className="photo-rings">
                <div className="photo-ring ring-1"></div>
                <div className="photo-ring ring-2"></div>
                <div className="photo-ring ring-3"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="floating-shapes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


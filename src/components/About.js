import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaServer, FaDatabase, FaCloud, FaCode } from 'react-icons/fa';
import { useTiltShine } from './useTiltShine';
import './About.css';

// Feature Card Component
const FeatureCard = ({ feature, index, itemVariants }) => {
  const cardRef = useTiltShine({ maxTilt: 6, transitionSpeed: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      className="feature-card glass"
      variants={itemVariants}
    >
      <div className="feature-icon">{feature.icon}</div>
      <h4>{feature.title}</h4>
      <p>{feature.description}</p>
      <div className="card-shine"></div>
    </motion.div>
  );
};

// Counter component for animated numbers
const Counter = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
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

  const features = [
    {
      icon: <FaServer />,
      title: 'RESTful APIs',
      description: 'Designed APIs improving system interoperability by 40%',
    },
    {
      icon: <FaDatabase />,
      title: 'Database Optimization',
      description: 'Optimized queries reducing runtime errors by 35%',
    },
    {
      icon: <FaCloud />,
      title: 'AWS Deployment',
      description: 'Containerized services using Docker on AWS',
    },
    {
      icon: <FaCode />,
      title: 'Modular Architecture',
      description: 'Designed modular architectures with 25% reduced complexity',
    },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div className="about-text glass" variants={itemVariants}>
            <h3>Backend Developer</h3>
            <p>
              I'm a Backend Developer with 2+ years of experience building and scaling 
              production-grade backend systems using Node.js, Fastify, and SQL. I specialize 
              in designing modular architectures, optimizing performance with Redis caching, 
              and deploying containerized applications on AWS.
            </p>
            <p>
              Currently working at WE-Matter as a Software Developer, I've architected scalable 
              backend systems for enterprise HR and survey platforms. My experience includes 
              improving API response times by 30%, reducing runtime errors by 35%, and building 
              secure, high-performance APIs that integrate with enterprise systems like SAP SuccessFactors.
            </p>
            <div className="about-stats">
              <motion.div 
                className="stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4><Counter end={2} suffix="+" duration={1.5} /></h4>
                <p>Years Experience</p>
              </motion.div>
              <motion.div 
                className="stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4><Counter end={30} suffix="%" duration={2} /></h4>
                <p>Performance Improvement</p>
              </motion.div>
              <motion.div 
                className="stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h4><Counter end={35} suffix="%" duration={2} /></h4>
                <p>Error Reduction</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="about-features" variants={itemVariants}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
                itemVariants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;


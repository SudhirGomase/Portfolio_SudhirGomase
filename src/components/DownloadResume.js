import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import './DownloadResume.css';

const DownloadResume = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    // Try multiple possible file names
    const possibleFiles = [
      '/SudhirGomase.pdf',
      '/sudhir-gomase-resume.pdf',
      '/resume.pdf',
      '/SudhirGomase_Resume.pdf'
    ];

    // Try to download the file
    const tryDownload = (filePath, index = 0) => {
      if (index >= possibleFiles.length) {
        // If file doesn't exist, open in new tab or show message
        alert('Resume file not found. Please ensure the PDF is in the public folder.');
        return;
      }

      const link = document.createElement('a');
      link.href = possibleFiles[index];
      link.download = 'SudhirGomase_Resume.pdf';
      link.target = '_blank';
      
      // Try to download, if fails, try next file
      link.onerror = () => {
        tryDownload(filePath, index + 1);
      };
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    tryDownload('/SudhirGomase.pdf');
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="resume" className="download-resume">
      <motion.div
        className="resume-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="resume-card-compact glass" 
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
          onClick={handleDownload}
          style={{ cursor: 'pointer' }}
        >
          <motion.div 
            className="download-icon-compact"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaDownload />
          </motion.div>
          <div className="resume-card-content">
            <motion.h3
              whileHover={{ x: 5 }}
            >
              Download Resume
            </motion.h3>
            <motion.p
              whileHover={{ x: 5 }}
            >
              Click to download PDF
            </motion.p>
          </div>
          <motion.div
            className="download-arrow"
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaFilePdf />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DownloadResume;


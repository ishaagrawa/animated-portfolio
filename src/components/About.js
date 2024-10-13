// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.2 }}
    >
      <h2>About Me</h2>
      <p>
        I'm a passionate Front-End Developer with over 3 years of experience specializing 
        in modern, responsive web applications using React JS.
      </p>
    </motion.div>
  );
};

export default About;

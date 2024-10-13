// src/components/Experience.js
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      className="experience"
      initial={{ scale: 0.8 }} 
      animate={{ scale: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2>Experience</h2>
      <p>React Developer at TCS working on Government E-Marketplace project.</p>
      <p>Freelance Front-End Developer with experience in AR/VR integrations.</p>
    </motion.div>
  );
};

export default Experience;

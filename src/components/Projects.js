// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div 
      className="projects"
      initial={{ x: "-100vw" }} 
      animate={{ x: 0 }} 
      transition={{ type: "spring", stiffness: 50 }}
    >
      <h2>Projects</h2>
      <div className="project-list">
        <motion.a 
          href="https://instaposts.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          whileHover={{ scale: 1.05 }} // Optional animation for hover effect
          whileTap={{ scale: 0.95 }}   // Optional animation for tap effect
          style={{ textDecoration: 'none', color: 'inherit' }} // Make sure the text style is unaffected
        >
          <h3>InstaPost</h3>
          <p>Web app for creating posts with images and editable text.</p>
        </motion.a>

        <motion.a 
          href="https://todo-list-rtk-psi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3>Todo App</h3>
          <p>A simple todo list app using React and Redux Toolkit.</p>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Projects;

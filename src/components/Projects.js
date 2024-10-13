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
        <div className="project-card">
          <h3>InstaPost</h3>
          <p>Web app for creating posts with images and editable text.</p>
        </div>
        <div className="project-card">
          <h3>Todo App</h3>
          <p>A simple todo list app using React and Redux Toolkit.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

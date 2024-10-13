// src/components/Home.js
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1.5 }}
    >
      <h1>Hi, I'm Isha Agrawal</h1>
      <p>Frontend Developer | React Enthusiast | Tech Explorer</p>
    </motion.div>
  );
};

export default Home;

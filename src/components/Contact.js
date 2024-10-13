// src/components/Contact.js
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 1, type: "spring" }}
    >
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:isha.agrawal1320@gmail.com">isha.agrawal1320@gmail.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/the-isha-agrawal">Isha Agrawal</a></p>
    </motion.div>
  );
};

export default Contact;

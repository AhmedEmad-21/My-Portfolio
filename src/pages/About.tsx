"use client";

import React from "react";
import { motion } from "framer-motion";
import { facts } from "../data/userData";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-4 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-center text-foreground"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 underline underline-offset-4 decoration-blue-500"
      >
        About Me
      </motion.h2>

      {/* Professional Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold mb-2 text-primary">PROFILE</h3>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Front-End Engineer experienced in building scalable, high-performance web applications using React.js, Next.js, and TypeScript. Skilled in modern UI/UX design, RESTful API integration, responsive design, and web accessibility. Committed to writing clean, maintainable code and continuously learning emerging technologies.
        </p>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold mb-2 text-primary">EDUCATION</h3>
        <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          <div className="font-bold">Bachelor of Information Systems</div>
          <div>Faculty of Computers and Artificial Intelligence, Fayoum University, Faiyum</div>
          <div>2022 – 2026 (Expected)</div>
          <div className="mt-1 text-base">• Major: Information Systems | Minor: Computer Science</div>
        </div>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold mb-2 text-primary">SOFT SKILLS</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
          <li>• Problem Solving</li>
          <li>• UI/UX Design</li>
          <li>• Effective Communication</li>
          <li>• Teamwork</li>
          <li>• Time Management</li>
          <li>• Agile Methodologies</li>
        </ul>
      </motion.div>

      {/* Facts (optional, can be removed if not needed) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="flex flex-wrap max-w-2xl mx-auto justify-left gap-2 mb-4"
      >
        {facts.map((fact, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-lg bg-white/30 dark:bg-white/5 shadow-xs text-sm md:text-base font-medium border border-gray-400 dark:border-gray-600 text-foreground"
          >
            {fact}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;

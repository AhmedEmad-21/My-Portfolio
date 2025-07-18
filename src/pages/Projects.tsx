"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import clsx from "clsx";
import { projectData } from "../data/userData";
import WebsiteDemoCard from "../components/WebsiteDemoCard";

const Projects = () => {

  return (
    <section className="w-full px-4 backdrop-blur-sm rounded-xl p-4 sm:p-8 text-center text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 mt-8 underline underline-offset-4 decoration-blue-500"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
      >
        A collection of projects, I&apos;ve worked on.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
        {projectData.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="rounded-xl p-6 bg-white/30 dark:bg-white/5 shadow-xs border border-gray-400 dark:border-gray-600 text-left transition hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description || "No description provided."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-muted border border-gray-400 dark:border-gray-600 px-2 py-1 rounded-full text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:underline"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {project.src && project.linkedin ? (
                <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-sm mx-auto cursor-pointer hover:shadow-md transition">
                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={project.src}
                      alt={project.name + " preview"}
                      className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-40"
                    />
                  </a>
                </div>
              ) : project.live ? (
                <WebsiteDemoCard demoUrl={project.live} />
              ) : (
                <div className="text-center text-sm text-muted-foreground">
                  No preview available
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

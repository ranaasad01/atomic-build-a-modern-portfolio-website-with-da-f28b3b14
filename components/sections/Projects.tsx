"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

const filters = ["All", "Featured", "2024", "2023", "2022"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    return p.year === activeFilter;
  });

  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-slate-900">
      <ScrollReveal className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
          Portfolio
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          A selection of projects I&apos;ve built — from SaaS platforms to open source tools
        </p>
      </ScrollReveal>

      {/* Filter tabs */}
      <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? "px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 transition-all duration-200"
                : "px-5 py-2 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
            }
          >
            {filter}
          </button>
        ))}
      </ScrollReveal>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400 dark:text-slate-500">
          <p className="text-lg">No projects found for this filter.</p>
        </div>
      )}

      {/* CTA */}
      <ScrollReveal delay={0.2} className="text-center mt-16">
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          Want to see more of my work?
        </p>
        <a
          href="https://github.com/alexmorgan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
        >
          View All on GitHub
        </a>
      </ScrollReveal>
    </SectionWrapper>
  );
}

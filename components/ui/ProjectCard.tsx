"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import Link from "next/link";
import { Project } from "@/lib/types";
import Badge from "./Badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 backdrop-blur-sm"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 font-semibold text-sm rounded-xl hover:bg-indigo-50 transition-colors duration-200 shadow-lg"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-semibold text-sm rounded-xl hover:bg-slate-800 transition-colors duration-200 shadow-lg"
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 bg-slate-900/70 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50">
            {project.year}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="default">+{project.tags.length - 4}</Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
              >
                <Github size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
          <Link
            href={"/projects/" + project.slug}
            className="flex items-center gap-1.5 text-sm font-semibold text-indigo-500 hover:text-indigo-400 transition-colors duration-200 group/link"
          >
            View Details
            <ArrowRight
              size={14}
              className="group-hover/link:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2 as Github, Briefcase as Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from "@/lib/data";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "Next.js Expert",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

function TypewriterText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(role.slice(0, currentText.length + 1));
        if (currentText.length === role.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(role.slice(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <span className="text-indigo-400 dark:text-indigo-300">
      {currentText}
      <span className="cursor-blink text-indigo-500 ml-0.5">|</span>
    </span>
  );
}

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const gridStyle = {
    backgroundImage:
      "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 animated-gradient opacity-80" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute inset-0 opacity-[0.03]" style={gridStyle} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text glow-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-300 mb-6 h-12"
        >
          <TypewriterText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline} Turning complex problems into elegant,
          user-friendly digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleScroll("projects")}
            className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center gap-2"
          >
            View My Work
            <ArrowDown
              size={18}
              className="group-hover:translate-y-1 transition-transform duration-200"
            />
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="px-8 py-4 border-2 border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-1 backdrop-blur-sm"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: socialLinks.github, icon: Github, label: "GitHub" },
            { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:" + socialLinks.email, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-900/30 transition-all duration-200 backdrop-blur-sm"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-500 cursor-pointer"
            onClick={() => handleScroll("about")}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-indigo-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

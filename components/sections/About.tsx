"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Download, ArrowRight } from 'lucide-react';
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/lib/data";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Open Source Stars", value: "1.2k" },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="bg-white dark:bg-slate-900"
    >
      {/* Section header */}
      <ScrollReveal className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
          About Me
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Crafting Digital{" "}
          <span className="gradient-text">Experiences</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Passionate about building products that make a difference
        </p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-2xl shadow-indigo-500/10">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/054/511/449/small/portrait-of-a-young-male-software-developer-in-his-office-photo.jpg"
                  alt={personalInfo.name}
                  className="w-full aspect-[4/5] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                {/* Name card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 dark:bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-white font-bold text-lg">{personalInfo.name}</p>
                  <p className="text-indigo-300 text-sm">{personalInfo.title}</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow-lg shadow-indigo-500/30 text-sm font-semibold"
              >
                Open to Work 🚀
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Content side */}
        <ScrollReveal direction="right">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-indigo-500" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-indigo-500" />
                5+ Years Experience
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I believe great software is built at the intersection of technical
              excellence and thoughtful design. My approach combines clean,
              maintainable code with pixel-perfect UI implementation to deliver
              products that users love.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/25"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1}>
            <div className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-indigo-500/30 transition-colors duration-300">
              <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

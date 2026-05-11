"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const levelLabels = ["", "Beginner", "Elementary", "Intermediate", "Advanced", "Expert"];

const categoryStyles: Record<string, { gradient: string; accent: string }> = {
  Frontend: {
    gradient: "from-blue-500/20 to-indigo-500/20 border-blue-500/20",
    accent: "text-blue-400 bg-blue-900/30 border-blue-700/50",
  },
  Backend: {
    gradient: "from-emerald-500/20 to-teal-500/20 border-emerald-500/20",
    accent: "text-emerald-400 bg-emerald-900/30 border-emerald-700/50",
  },
  "Tools & Cloud": {
    gradient: "from-violet-500/20 to-purple-500/20 border-violet-500/20",
    accent: "text-violet-400 bg-violet-900/30 border-violet-700/50",
  },
};

const fallbackStyle = {
  gradient: "from-slate-500/20 to-slate-600/20 border-slate-500/20",
  accent: "text-slate-400 bg-slate-800 border-slate-700",
};

const extraTechs = [
  "Python", "Go", "Rust", "Kubernetes", "Terraform",
  "Jest", "Cypress", "Playwright", "tRPC", "Zustand",
  "React Query", "Zod", "Drizzle ORM", "Supabase", "Firebase",
];

function SkillBar({ level, delay }: { level: number; delay: number }) {
  const pct = (level / 5) * 100;
  return (
    <div className="h-1.5 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: pct + "%" }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
      />
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-slate-50 dark:bg-slate-950">
      <ScrollReveal className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
          Tech Stack
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Skills &amp; <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Technologies I work with to bring ideas to life
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, catIdx) => {
          const style = categoryStyles[category.category] ?? fallbackStyle;
          return (
            <ScrollReveal key={category.category} delay={catIdx * 0.15}>
              <div
                className={cn(
                  "relative rounded-2xl bg-gradient-to-br border p-6 h-full backdrop-blur-sm",
                  style.gradient
                )}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={cn("px-3 py-1 rounded-lg text-xs font-bold border", style.accent)}>
                    {category.category}
                  </span>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + skillIdx * 0.07, duration: 0.4 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      <SkillBar
                        level={skill.level}
                        delay={catIdx * 0.1 + skillIdx * 0.07 + 0.2}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={0.3} className="mt-16">
        <div className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-wider">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {extraTechs.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-indigo-500/50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

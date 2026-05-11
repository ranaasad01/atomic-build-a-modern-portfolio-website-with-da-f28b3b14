"use client";

import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, ArrowUp, Heart } from 'lucide-react';
import { socialLinks, personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copy */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-black gradient-text mb-1">
              AM<span className="text-indigo-500">.</span>
            </div>
            <p className="text-slate-500 text-sm">
              Built with{" "}
              <Heart size={12} className="inline text-red-400 mx-0.5" />
              {" "}using Next.js &amp; Tailwind CSS
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: socialLinks.github, icon: Github, label: "GitHub" },
              { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: socialLinks.twitter, icon: Twitter, label: "Twitter" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700/50 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-900/30 transition-all duration-200"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700/50 text-slate-400 hover:text-white hover:border-indigo-500/50 text-sm font-medium transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/50 text-center">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

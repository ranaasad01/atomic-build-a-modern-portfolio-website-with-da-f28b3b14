"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { socialLinks, personalInfo } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm";

  return (
    <SectionWrapper id="contact" className="bg-slate-50 dark:bg-slate-950">
      <ScrollReveal className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
          Contact
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Let&apos;s Work <span className="gradient-text">Together</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you within 24 hours.
        </p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Info panel */}
        <ScrollReveal direction="left" className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Get in touch</h3>
            <div className="space-y-4">
              <a
                href={"mailto:" + socialLinks.email}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200 flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-indigo-500 transition-colors duration-200">
                    {socialLinks.email}
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">Location</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold">Available for work</span>
            </div>
            <p className="text-indigo-100 text-sm leading-relaxed">
              I&apos;m currently open to freelance projects and full-time opportunities. Let&apos;s build something great together.
            </p>
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal direction="right" className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Alex Johnson"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and budget..."
                className={inputClass + " resize-none"}
              />
            </div>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-400"
              >
                <CheckCircle size={18} />
                <span className="text-sm font-medium">Message sent! I&apos;ll get back to you soon.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 text-red-700 dark:text-red-400"
              >
                <AlertCircle size={18} />
                <span className="text-sm font-medium">Something went wrong. Please try again.</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/25"
            >
              {status === "loading" ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}

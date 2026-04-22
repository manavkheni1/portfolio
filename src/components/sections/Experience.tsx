"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    role: "Co-Founder & Software Engineer",
    company: "DiceMail",
    dates: "Jan 2025 – Present",
    bullets: [
      "Built an AI-powered email platform end-to-end, architecting a Node.js backend with OpenAI embeddings delivering AI-assisted search at sub-50ms latency",
      "Designed scalable data infrastructure with PostgreSQL and Redis for caching and task queue management, supporting reliable high-throughput data flow",
      "Implemented secure SMTP/IMAP adapters with monitoring and logging, containerized the full stack with Docker Compose for streamlined deployment",
    ],
    more: "Tech Stack: Node.js, React, PostgreSQL, Redis, Docker, OpenAI API. Architected system for high-throughput zero-latency data ingest."
  },
  {
    role: "Software Development Intern",
    company: "Cecil Labs LLC",
    dates: "May – Jul 2025",
    bullets: [
      "Built a multi-module PyQt5 desktop application suite with integrated AI tools and an Azure SQL-backed time-tracking platform, improving workflow efficiency by 35% and reducing manual tracking by 90%",
      "Automated data extraction across 50+ countries using Selenium web crawlers and Tesseract OCR, increasing content aggregation capacity by 5×",
      "Integrated a local LLM (Ollama) for text summarization, image recognition, and speech-to-text; built hybrid data pipelines with Azure SQL and CosmosDB, cutting manual research time by 60%",
    ],
    more: "Spearheaded integration of on-device LLMs to dramatically reduce cloud inference costs and ensure data privacy."
  },
  {
    role: "Web Developer Intern",
    company: "Akruz Creative",
    dates: "Jan – May 2024",
    bullets: [
      "Built and optimized 3+ Django-based web platforms, improving e-commerce functionality for 100+ active users and achieving a 17% improvement in user experience metrics",
      "Executed 20+ functional and UI test cycles, resolving 13+ critical bugs and reducing post-deployment issues by 9%",
      "Improved frontend responsiveness and backend processes, reducing page load time by 22%",
    ],
    more: "Collaborated directly with product teams to refine e-commerce user journeys and stabilize core infrastructure."
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5 bg-[#0A0600]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-primary uppercase tracking-widest mb-2">Journey</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Experience</h3>
        </motion.div>

        <div className="relative max-w-4xl">
          {/* Glowing connector line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-accent-primary shadow-[0_0_15px_#FF8C00] md:-translate-x-1/2 opacity-60" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-[10px] md:left-1/2 w-3 h-3 rounded-full bg-accent-primary border-2 border-[#0A0600] shadow-[0_0_12px_#FF8C00] z-10 mt-1.5 md:-translate-x-1/2" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                <h3 className="text-[14px] font-bold text-white mb-1">
                  {exp.role} <span className="text-accent-primary">@ {exp.company}</span>
                </h3>
                <p className="text-[12px] font-mono text-muted uppercase tracking-wider mb-4">{exp.dates}</p>
                <div className={`inline-block w-full ${index % 2 === 0 ? "" : "md:text-right"}`}>
                  <ul className={`text-muted text-[13px] leading-relaxed space-y-2 text-left ${index % 2 === 0 ? "" : "md:inline-block"}`}>
                    {exp.bullets.length > 0 && (
                      <li className={`relative pl-4 text-left`}>
                        <span className={`absolute top-2 w-1 h-1 rounded-full bg-accent-secondary left-0`} />
                        {exp.bullets[0]}
                      </li>
                    )}
                  </ul>
                  <button 
                    onClick={() => toggleExpand(index)}
                    className={`mt-4 text-[11px] font-mono text-accent-secondary hover:text-accent-primary transition-colors cursor-pointer flex ${index % 2 === 0 ? "justify-start" : "md:justify-end"}`}
                  >
                    {expanded[index] ? "[ - less ]" : "[ + more ]"}
                  </button>
                  <AnimatePresence>
                    {expanded[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {exp.bullets.length > 1 && (
                          <ul className={`text-muted text-[13px] leading-relaxed space-y-2 text-left mb-3 ${index % 2 === 0 ? "" : "md:inline-block"}`}>
                            {exp.bullets.slice(1).map((bullet, bIndex) => (
                              <li key={bIndex} className={`relative pl-4 text-left`}>
                                <span className={`absolute top-2 w-1 h-1 rounded-full bg-accent-secondary left-0`} />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className={`mt-1 text-[12px] text-white/70 italic border-l-2 border-accent-primary/30 pl-3 py-1 text-left ${index % 2 === 0 ? "" : "md:border-l-0 md:border-r-2 md:pl-0 md:pr-3 md:text-right"}`}>
                          {exp.more}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

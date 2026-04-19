"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Co-Founder",
    company: "DiceMail",
    dates: "Jan 2025 – Present",
    bullets: [
      "Building an AI-powered email platform with sub-50ms search latency.",
      "Leading end-to-end full-stack development and system architecture.",
    ],
  },
  {
    role: "SWE Intern",
    company: "Cecil Labs LLC",
    dates: "May – Jul 2025",
    bullets: [
      "Developed scalable backend services and integrated complex APIs.",
      "Optimized data processing pipelines for high-throughput environments.",
    ],
  },
  {
    role: "Web Dev Intern",
    company: "Akruz Creative",
    dates: "Jan – May 2024",
    bullets: [
      "Engineered responsive and dynamic web interfaces using modern frameworks.",
      "Collaborated with design teams to translate UI/UX wireframes into functional code.",
    ],
  },
];

export default function Experience() {
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
                <ul className={`text-muted text-[13px] leading-relaxed space-y-2 ${index % 2 === 0 ? "" : "md:inline-block md:text-right"}`}>
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className={`relative pl-4 ${index % 2 === 0 ? "" : "md:pl-0 md:pr-4"}`}>
                      <span className={`absolute top-2 w-1 h-1 rounded-full bg-accent-secondary ${index % 2 === 0 ? "left-0" : "md:right-0 md:left-auto left-0"}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

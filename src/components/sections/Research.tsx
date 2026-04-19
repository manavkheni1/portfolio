"use client";

import { motion } from "framer-motion";

const papers = [
  {
    title: "Optimizing Enterprise Support Workflows: A Hybrid Orchestration Pipeline For Automated Triage And Multi-Modal Data Acquisition",
    venue: "ResearchGate 2026",
    abstract: "Proposed a hybrid AI orchestration pipeline combining automated ticket triage and multi-modal data acquisition to reduce enterprise support overhead and improve resolution latency.",
    link: "https://www.researchgate.net/publication/401499236_Optimizing_Enterprise_Support_Workflows_A_Hybrid_Orchestration_Pipeline_For_Automated_Triage_And_Multi-Modal_Data_Acquisition",
  },
  {
    title: "Bridging the Privacy Gap: A Localized Edge AI Pipeline for Regulatory Compliance",
    venue: "ResearchGate 2026",
    abstract: "Designed a localized edge AI pipeline for on-device sensitive data processing, enabling GDPR/HIPAA compliance without transmitting data to external cloud services.",
    link: "https://www.researchgate.net/publication/400997299_Bridging_the_Privacy_Gap_A_Localized_Edge_AI_Pipeline_for_Regulatory_Compliance",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-primary uppercase tracking-widest mb-2">
            Publications
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Research</h3>
        </motion.div>

        {/* Research Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-accent-primary/50 bg-[rgba(255,140,0,0.02)] glow-border flex flex-col"
            >
              <div className="text-[11px] font-mono text-accent-secondary uppercase tracking-widest mb-4">
                {paper.venue}
              </div>
              
              <h4 className="text-[15px] font-bold text-white mb-4 leading-snug">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-primary transition-colors duration-300"
                >
                  {paper.title}
                </a>
              </h4>

              <p className="text-[13px] text-muted leading-relaxed flex-grow">
                {paper.abstract}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
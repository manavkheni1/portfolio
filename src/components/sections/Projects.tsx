"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Gestura",
    tags: ["PyTorch", "MediaPipe", "FastAPI", "Next.js"],
    description: "Real-time ASL Translator classifying 29 signs via webcam.",
    stat: "98.23%",
    statLabel: "Model Accuracy",
    link: "https://gestura-asl-translator.vercel.app/",
    caseStudy: {
      problem: "No accessible, real-time ASL translation tool existed that could run in a browser without specialized hardware.",
      approach: "Trained a custom LSTM on 87K hand landmark images extracted via MediaPipe. Built a FastAPI inference server and Next.js frontend that streams webcam frames and returns predictions at low latency. Dockerized backend deployed on Render.",
      architecture: "Webcam → MediaPipe → LSTM Model → FastAPI → Next.js UI",
      result: "98.23% accuracy · 29 ASL classes · <200ms inference latency"
    }
  },
  {
    title: "Smart Customer Service Router",
    tags: ["Python", "Gradio", "n8n", "OpenAI"],
    description: "Automated support triage with GPT-4o-mini sentiment analysis.",
    stat: "<50ms",
    statLabel: "API Latency",
    link: "https://huggingface.co/spaces/manavkheni/support-agent-demo",
    caseStudy: {
      problem: "Support teams waste hours manually triaging tickets — routing the wrong issues to wrong teams with no sentiment context.",
      approach: "Built an n8n workflow triggered by webhooks. GPT-4o-mini scores sentiment 1-10 and classifies intent. Router distributes to segmented response queues. Gradio frontend for demo and testing.",
      architecture: "Incoming Ticket → Webhook → n8n Workflow → GPT-4o-mini → Sentiment Score → Router → Response Queue",
      result: "95% latency reduction · 100% routing accuracy · ~99% manual entry eliminated"
    }
  },
  {
    title: "DiceMail",
    tags: ["Next.js", "PostgreSQL", "Redis"],
    description: "AI-powered email platform with ultra-low latency search.",
    stat: "95%",
    statLabel: "Triage Reduction",
    link: "https://thedicemail.com/",
    caseStudy: {
      problem: "Traditional email search is keyword-only and slow — users can't find emails by meaning or context.",
      approach: "Embedded every email via OpenAI embeddings on ingest, stored vectors alongside metadata in PostgreSQL. Redis caches hot queries. SMTP/IMAP adapters sync in real time. Full stack containerized with Docker Compose.",
      architecture: "SMTP/IMAP → Node.js Backend → OpenAI Embeddings → PostgreSQL + Redis → React Frontend",
      result: "<50ms search latency · AI-assisted semantic search · Production-ready infrastructure"
    }
  },
  {
    title: "Protocol: OVERRIDE",
    tags: ["Unity 6", "C#"],
    description: "Isometric twin-stick action game with NavMesh enemy AI.",
    stat: "500HP",
    statLabel: "Phase Boss",
    link: "https://github.com/manavkheni1/Protocol-OVERRIDE",
    caseStudy: {
      problem: "Most student game projects lack polish — generic enemies, no game feel, no architectural discipline.",
      approach: "Designed a full game loop with a Singleton GameManager, ScriptableObject-driven stat balancing, and Observer Pattern events. NavMesh enemy AI has patrol/alert states. Boss has 3 phases with randomized attack patterns. Phase Shift dash has 12-frame invincibility window.",
      architecture: "GameManager (Singleton) → ScriptableObject Stats → Observer Events → NavMesh AI → Boss FSM → UI System",
      result: "3 authored levels · 500HP 3-phase boss · Colorblind-accessible UI · Full input remapping"
    }
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-primary uppercase tracking-widest mb-2">Selected Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">The Forge Arsenal</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full flex flex-col"
            >
              <div className="relative h-auto w-full [perspective:800px] group cursor-pointer mb-4">
                <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cubic-bezier(0.4, 0, 0.2, 1)">
                  
                  {/* Front Face */}
                  <div className="relative w-full h-auto [backface-visibility:hidden] bg-[#0d0800] border border-white/10 p-8 flex flex-col">
                    <div>
                      <h4 className="text-[15px] font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-[12px] text-muted leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 text-[10px] font-mono text-accent-primary border border-accent-primary/30 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 text-[10px] font-mono text-accent-secondary uppercase text-right tracking-widest opacity-50">
                      Hover to Flip ⤻
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[rgba(255,140,0,0.05)] border border-accent-primary glow-border p-8 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl md:text-5xl font-mono text-accent-primary font-bold mb-2 glow-text">
                      {project.stat}
                    </div>
                    <div className="text-[11px] font-mono text-muted uppercase tracking-widest mb-6">
                      {project.statLabel}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2 bg-accent-primary text-background font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-colors"
                    >
                      View Project ↗
                    </a>
                  </div>

                </div>
              </div>

              <div className="flex justify-start">
                <button 
                  onClick={() => toggleExpand(index)}
                  className="text-[11px] font-mono text-accent-primary hover:text-white transition-colors"
                >
                  {expanded[index] ? "[ - Close ]" : "[ + Case Study ]"}
                </button>
              </div>

              <AnimatePresence>
                {expanded[index] && project.caseStudy && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-6 bg-[#0d0800] border border-accent-primary/20 rounded-md">
                      <div className="mb-4">
                        <h5 className="text-[11px] font-mono text-accent-secondary uppercase tracking-widest mb-1">Problem</h5>
                        <p className="text-[13px] text-muted">{project.caseStudy.problem}</p>
                      </div>
                      <div className="mb-4">
                        <h5 className="text-[11px] font-mono text-accent-secondary uppercase tracking-widest mb-1">Approach</h5>
                        <p className="text-[13px] text-muted mb-2">{project.caseStudy.approach}</p>
                        <div className="bg-[#0A0600] border border-white/5 p-3 rounded-sm text-[11px] font-mono text-accent-primary/80 overflow-x-auto whitespace-nowrap">
                          {project.caseStudy.architecture}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-mono text-accent-secondary uppercase tracking-widest mb-1">Result</h5>
                        <div className="text-[14px] md:text-[16px] font-mono text-accent-primary glow-text mt-1">
                          {project.caseStudy.result}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

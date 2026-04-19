"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Gestura",
    tags: ["PyTorch", "MediaPipe", "FastAPI", "Next.js"],
    description: "Real-time ASL Translator classifying 29 signs via webcam.",
    stat: "98.23%",
    statLabel: "Model Accuracy",
    link: "https://gestura-asl-translator.vercel.app/",
  },
  {
    title: "Smart Customer Service Router",
    tags: ["Python", "Gradio", "n8n", "OpenAI"],
    description: "Automated support triage with GPT-4o-mini sentiment analysis.",
    stat: "<50ms",
    statLabel: "API Latency",
    link: "https://huggingface.co/spaces/manavkheni/support-agent-demo",
  },
  {
    title: "DiceMail",
    tags: ["Next.js", "PostgreSQL", "Redis"],
    description: "AI-powered email platform with ultra-low latency search.",
    stat: "95%",
    statLabel: "Triage Reduction",
    link: "https://thedicemail.com/",
  },
  {
    title: "Protocol: OVERRIDE",
    tags: ["Unity 6", "C#"],
    description: "Isometric twin-stick action game with NavMesh enemy AI.",
    stat: "500HP",
    statLabel: "Phase Boss",
    link: "https://github.com/manavkheni1/Protocol-OVERRIDE",
  },
];

export default function Projects() {
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
              className="relative h-[280px] w-full [perspective:800px] group cursor-pointer"
            >
              <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cubic-bezier(0.4, 0, 0.2, 1)">
                
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#0d0800] border border-white/10 p-8 flex flex-col justify-between">
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
                  <div className="text-[10px] font-mono text-accent-secondary uppercase text-right tracking-widest opacity-50">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

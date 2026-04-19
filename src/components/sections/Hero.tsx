"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import MagneticButton from "../ui/MagneticButton";

const stats = [
  { value: 98.23, suffix: "%", label: "Model Accuracy", decimals: 2 },
  { prefix: "<", value: 50, suffix: "ms", label: "API Latency" },
  { value: 95, suffix: "%", label: "Triage Reduction" },
  { value: 5, suffix: "×", label: "Data Capacity" },
];

const roles = [
  "AI/ML Engineer",
  "Full-Stack Developer",
  "Founder @ DiceMail",
  "Researcher",
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]"></span>
            </div>
            <span className="text-[10px] font-mono text-accent-primary uppercase tracking-widest">
              Available for full-time roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 font-sans font-extrabold tracking-[-3px] leading-[0.9]"
          >
            <h1 className="text-white text-6xl sm:text-8xl md:text-[110px] uppercase">
              Manav
            </h1>
            <h1 className="text-accent-primary text-6xl sm:text-8xl md:text-[110px] uppercase glow-text animate-pulse-slow">
              Kheni
            </h1>
          </motion.div>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-12"
          >
            {roles.map((role, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                <span className="text-[13px] font-mono text-muted uppercase tracking-wider">
                  {role}
                </span>
                {index < roles.length - 1 && (
                  <span className="hidden sm:inline-block text-muted/50 ml-2">·</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="pl-4 border-l-2 border-accent-primary/40 flex flex-col justify-center">
                <div className="text-2xl font-mono text-white font-bold tracking-tight">
                  {stat.prefix}
                  <CountUp
                    start={0}
                    end={stat.value}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                    useEasing={true}
                  />
                  {stat.suffix}
                </div>
                <div className="text-xs font-mono text-accent-secondary uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <MagneticButton
              href="#projects"
              className="px-8 py-4 bg-accent-primary text-background font-mono text-sm font-bold uppercase tracking-widest hover:bg-accent-secondary transition-colors"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="px-8 py-4 border border-accent-primary text-accent-primary font-mono text-sm font-bold uppercase tracking-widest hover:bg-accent-primary/10 transition-colors"
            >
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-4"
      >
        <span className="text-[10px] font-mono text-muted uppercase tracking-[0.3em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Scroll to Explore
        </span>
        <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-accent-primary to-transparent glow-text"
          />
        </div>
      </motion.div>

      {/* Tailwind utility for custom pulse */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; text-shadow: 0 0 20px rgba(255,140,0,0.8); }
          50% { opacity: 0.8; text-shadow: 0 0 5px rgba(255,140,0,0.3); }
          80% { opacity: 0.9; text-shadow: 0 0 30px rgba(255,140,0,0.9); }
          82% { opacity: 0.6; text-shadow: none; }
          84% { opacity: 1; text-shadow: 0 0 20px rgba(255,140,0,0.8); }
        }
      `}} />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 98.23, suffix: "%", label: "Accuracy", decimals: 2 },
  { prefix: "<", value: 50, suffix: "ms", label: "Latency" },
  { value: 95, suffix: "%", label: "Triage Reduction" },
  { value: 5, suffix: "×", label: "Data Capacity" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-[#0A0600]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-primary uppercase tracking-widest mb-2">Background</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Forged in Code.</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted leading-relaxed space-y-6"
          >
            <p>
              I specialize in architecting scalable AI/ML solutions and high-performance backend systems. 
              My approach blends rigorous research with pragmatic engineering—building tools that are not 
              only computationally sound but intuitively designed for production environments.
            </p>
            <p>
              Whether it's optimizing recurrent neural networks for real-time edge processing or 
              engineering automated orchestration pipelines that dramatically reduce enterprise overhead, 
              I thrive on bridging the gap between theoretical AI models and real-world impact.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div ref={ref} className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-white/10 bg-[#0d0800] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-3xl md:text-4xl font-mono text-white font-bold mb-2">
                  {stat.prefix}
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      decimals={stat.decimals || 0}
                      duration={2.5}
                      useEasing={true}
                    />
                  ) : "0"}
                  {stat.suffix}
                </div>
                <div className="text-[11px] font-mono text-accent-primary uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

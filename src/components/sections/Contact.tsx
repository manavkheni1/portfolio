"use client";

import { motion } from "framer-motion";
import { useRef, MouseEvent } from "react";

export default function Contact() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleBurst = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    if (!btn) return;
    
    // Spawn DOM particles for burst
    const rect = btn.getBoundingClientRect();
    const spawnCount = 20;

    for (let i = 0; i < spawnCount; i++) {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      particle.style.width = "4px";
      particle.style.height = "4px";
      particle.style.borderRadius = "50%";
      particle.style.backgroundColor = "#FF8C00";
      particle.style.boxShadow = "0 0 8px #FF8C00";
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      particle.style.pointerEvents = "none";
      particle.style.zIndex = "9999";
      
      document.body.appendChild(particle);

      const vx = (Math.random() - 0.5) * 10;
      const vy = (Math.random() - 0.5) * 10 - 2;

      let x = e.clientX;
      let y = e.clientY;
      let alpha = 1;

      const animate = () => {
        x += vx;
        y += vy;
        alpha -= 0.02;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.opacity = alpha.toString();

        if (alpha <= 0) {
          particle.remove();
        } else {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-[#0A0600]">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-accent-primary uppercase tracking-widest mb-2">Connect</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Ignite a Conversation</h3>
          <p className="text-muted text-[14px]">
            Looking to collaborate on something ambitious? Drop a message below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8 flex flex-col justify-center"
          >
            <div>
              <div className="text-[11px] font-mono text-accent-secondary uppercase tracking-widest mb-2">Email</div>
              <a href="mailto:khenimanav@outlook.com" className="text-white hover:text-accent-primary transition-colors">
                khenimanav@outlook.com
              </a>
            </div>
            <div>
              <div className="text-[11px] font-mono text-accent-secondary uppercase tracking-widest mb-2">LinkedIn</div>
              <a href="https://linkedin.com/in/manav-kheni" target="_blank" rel="noreferrer" className="text-white hover:text-accent-primary transition-colors">
                linkedin.com/in/manav-kheni
              </a>
            </div>
            <div>
              <div className="text-[11px] font-mono text-accent-secondary uppercase tracking-widest mb-2">GitHub</div>
              <a href="https://github.com/manavkheni1" target="_blank" rel="noreferrer" className="text-white hover:text-accent-primary transition-colors">
                github.com/manavkheni1
              </a>
            </div>
            <div>
              <div className="text-[11px] font-mono text-accent-secondary uppercase tracking-widest mb-2">SUBSTACK</div>
              <a href="https://substack.com/@manavkheni" target="_blank" rel="noreferrer" className="text-white hover:text-accent-primary transition-colors">
                substack.com/@manavkheni
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form action="https://formspree.io/f/mrerkylb" method="POST" className="space-y-6">
              <div>
                <label className="block text-[11px] font-mono text-muted uppercase tracking-widest mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-[#0d0800] border border-white/10 p-4 text-white focus:outline-none focus:border-accent-primary focus:shadow-[0_0_10px_rgba(255,140,0,0.3)] transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-muted uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#0d0800] border border-white/10 p-4 text-white focus:outline-none focus:border-accent-primary focus:shadow-[0_0_10px_rgba(255,140,0,0.3)] transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-muted uppercase tracking-widest mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-[#0d0800] border border-white/10 p-4 text-white focus:outline-none focus:border-accent-primary focus:shadow-[0_0_10px_rgba(255,140,0,0.3)] transition-all resize-none"
                ></textarea>
              </div>
              <button
                ref={buttonRef}
                onClick={handleBurst}
                type="submit"
                className="w-full py-4 bg-accent-primary text-background font-mono text-[13px] font-bold uppercase tracking-widest hover:bg-white transition-colors"
              >
                Send Message ↗
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function EmberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const isMobile = width < 768;
    const particleCount = isMobile ? 60 : 150;
    const colors = ["#FF8C00", "#FFB347", "#FF4500"];

    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedY: number;
      wobbleSpeed: number;
      wobbleDist: number;
      wobbleOffset: number;
      alpha: number;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];

    const createParticle = (yOffset = false): Particle => {
      const maxLife = Math.random() * 200 + 100;
      return {
        x: Math.random() * width,
        y: yOffset ? Math.random() * height : height + 10,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 1.5 + 0.5,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleDist: Math.random() * 2 + 1,
        wobbleOffset: Math.random() * Math.PI * 2,
        alpha: 0,
        life: 0,
        maxLife,
      };
    };

    // Initial fill
    for (let i = 0; i < particleCount; i++) {
      const p = createParticle(true);
      p.life = Math.random() * p.maxLife; // random initial life
      particles.push(p);
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let hasMouse = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hasMouse = true;
    };

    const handleMouseLeave = () => {
      hasMouse = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.life++;
        p.y -= p.speedY;
        p.x += Math.sin(p.life * p.wobbleSpeed + p.wobbleOffset) * p.wobbleDist;

        // Mouse attraction
        if (hasMouse && !isMobile) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 300) {
            p.x += dx * 0.005;
          }
        }

        // Fade in/out
        if (p.life < p.maxLife * 0.2) {
          p.alpha = p.life / (p.maxLife * 0.2);
        } else if (p.life > p.maxLife * 0.8) {
          p.alpha = 1 - (p.life - p.maxLife * 0.8) / (p.maxLife * 0.2);
        } else {
          p.alpha = 1;
        }

        if (p.y < -10 || p.life >= p.maxLife) {
          particles[index] = createParticle();
        }

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha * 0.6); // Soft base
        ctx.fill();

        // Glow halo
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha * 0.8);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for next path
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
}

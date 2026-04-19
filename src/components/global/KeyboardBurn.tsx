"use client";

import { useEffect, useRef } from "react";

export default function KeyboardBurn() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Disable on mobile
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasHover) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    interface CharParticle {
      char: string;
      x: number;
      y: number;
      size: number;
      life: number;
      maxLife: number;
      rotation: number;
    }

    interface Ember {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }

    const chars: CharParticle[] = [];
    const embers: Ember[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore meta keys
      if (e.ctrlKey || e.altKey || e.metaKey || e.key.length !== 1) return;

      const size = Math.random() * 32 + 28; // 28 - 60px
      const centerRangeX = width * 0.6;
      const centerRangeY = height * 0.6;
      const x = (width - centerRangeX) / 2 + Math.random() * centerRangeX;
      const y = (height - centerRangeY) / 2 + Math.random() * centerRangeY;

      chars.push({
        char: e.key.toUpperCase(),
        x,
        y,
        size,
        life: 180, // ~3 seconds at 60fps
        maxLife: 180,
        rotation: (Math.random() - 0.5) * 0.4, // Slight tilt
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    let animationFrameId: number;

    // Helper to blend colors: White -> Amber (#FF8C00) -> Dark Red (#8B0000)
    const getBurnColor = (progress: number) => {
      // progress 0 = dead, 1 = fresh
      if (progress > 0.6) {
        // White to Amber
        const t = (progress - 0.6) / 0.4;
        const r = Math.floor(255);
        const g = Math.floor(140 + (255 - 140) * t);
        const b = Math.floor(0 + (255 - 0) * t);
        return `rgb(${r},${g},${b})`;
      } else {
        // Amber to Dark Red
        const t = progress / 0.6;
        const r = Math.floor(139 + (255 - 139) * t);
        const g = Math.floor(0 + (140 - 0) * t);
        const b = Math.floor(0);
        return `rgb(${r},${g},${b})`;
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Chars
      for (let i = chars.length - 1; i >= 0; i--) {
        const c = chars[i];
        c.life--;

        const progress = c.life / c.maxLife;

        // Spawn embers near end of life
        if (c.life === 30) {
          const spawnCount = Math.floor(Math.random() * 3) + 3; // 3-5
          for (let e = 0; e < spawnCount; e++) {
            embers.push({
              x: c.x + (Math.random() - 0.5) * c.size,
              y: c.y - c.size / 2 + (Math.random() - 0.5) * c.size,
              vx: (Math.random() - 0.5) * 2,
              vy: -Math.random() * 2 - 1,
              life: 40 + Math.random() * 20,
              maxLife: 60,
            });
          }
        }

        if (c.life <= 0) {
          chars.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);
        ctx.font = `bold ${c.size}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        ctx.fillStyle = getBurnColor(progress);
        
        // Glow
        if (progress > 0.2) {
          ctx.shadowBlur = 20 * progress;
          ctx.shadowColor = "#FF8C00";
        }

        // Fade out at very end
        if (progress < 0.2) {
          ctx.globalAlpha = progress / 0.2;
        }

        ctx.fillText(c.char, 0, 0);
        ctx.restore();
      }

      // Render Embers
      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.x += e.vx;
        e.y += e.vy;
        e.life--;

        if (e.life <= 0) {
          embers.splice(i, 1);
          continue;
        }

        const alpha = e.life / e.maxLife;
        ctx.beginPath();
        ctx.arc(e.x, e.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 140, 0, ${alpha})`;
        ctx.shadowBlur = 8 * alpha;
        ctx.shadowColor = "#FF8C00";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

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
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9000] pointer-events-none"
    />
  );
}

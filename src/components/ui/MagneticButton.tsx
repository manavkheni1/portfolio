"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "a" | "button";
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  href,
  className,
  onClick,
  as = "a",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = node.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center (max pull within 80px logic is implicit in the bounding box + math)
    const x = (clientX - centerX) * 0.4;
    const y = (clientY - centerY) * 0.4;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <Component
      // @ts-ignore
      ref={ref}
      href={as === "a" ? href : undefined}
      onClick={onClick}
      type={as === "button" ? type : undefined}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </Component>
  );
}

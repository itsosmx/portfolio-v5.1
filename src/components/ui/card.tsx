"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "bottom" | "top" | "left" | "right";
  duration?: number;
  delay?: number;
  key?: any;
}
export default function Card({ key, direction = "left", duration = 0.5, delay = 0.2, children, className, ...props }: CardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  const axis = direction === "top" || direction === "bottom" ? "y" : "x";
  const value = direction === "top" || direction === "left" ? -50 : 50;

  return (
    <motion.section
      key={key}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1) rotate3d(0, 0, ${mousePosition.y}, 3deg)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className={cn("p-4 card-background-dark rounded-lg cursor-default", className)}>
      <motion.div
        initial={{ opacity: 0, [axis as string]: value }}
        whileInView={{ opacity: 1, [axis as string]: 0 }}
        transition={{ duration, delay }}>
        {children}
      </motion.div>
    </motion.section>
  );
}

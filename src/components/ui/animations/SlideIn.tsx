"use client";
import React from "react";
import { motion } from "framer-motion";

interface SlideInProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: -1 | 1;
  delay?: number;
  duration?: number;
  axis?: "x" | "y";
}

export default function SlideIn({ className, axis = "x", children, direction = 1, delay = 0.2, duration = 0.5 }: SlideInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, [axis as string]: direction * 50 }}
      animate={{ opacity: 1, [axis as string]: 0 }}
      transition={{ duration, delay }}>
      {children}
    </motion.div>
  );
}

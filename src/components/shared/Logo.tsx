"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Logo() {
  return (
    <motion.div
      className="pointer-events-none grid place-items-center"
      initial={{ opacity: 0, y: -90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      <Image priority src="/images/osmx_t.png" height={700} width={700} alt="OSMX" />
    </motion.div>
  );
}

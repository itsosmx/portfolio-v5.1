"use client"
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, []);

  return (
    <motion.button
      onClick={handleBack}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-3 -left-4 flex items-center gap-2 bg-primary px-8 py-2 rounded-xl shadow-button hover:-left-6 transition-all active:-left-8 z-50">
      <FaArrowAltCircleLeft />
      <p>Back</p>
    </motion.button>
  );
}

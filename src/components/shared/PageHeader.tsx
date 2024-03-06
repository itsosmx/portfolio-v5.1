"use client"
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/utils";

export default function PageHeader({
  previous = "Osama Hussein",
  title,
  path = "/",
  className,
}: {
  title: string;
  previous?: string;
  path?: string;
  className?: string;
}) {
  return (
    <motion.div className={cn(className)} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
      <Link href={path} className="text-md flex gap-3 items-center group font-bold">
        <FaArrowLeft className="group-hover:mr-4 transition-all" />
        {previous}
      </Link>
      <p className="text-4xl text-slate-300 font-bold">{title}</p>
    </motion.div>
  );
}

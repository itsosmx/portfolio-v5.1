"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({ className, children }: ContainerProps) {
  const pathname = usePathname();

  const current = paths[pathname as keyof typeof paths];

  return (
    <section className="flex flex-col lg:p-16 p-8 py-16">
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7, type: "spring", bounce: 0.25 }}>
        <Link href={current.path} className="text-md flex gap-3 items-center group font-bold">
          <FaArrowLeft className="group-hover:mr-4 transition-all" />
          {current.previous}
        </Link>
        <p className="text-4xl text-slate-300 font-bold">{current.title}</p>
      </motion.div>
      <motion.div className={className}>{children}</motion.div>
    </section>
  );
}

const paths = {
  "/about": {
    title: "About",
    path: "/",
    previous: "Home",
  },
  "/projects": {
    title: "Projects",
    path: "/",
    previous: "Home",
  },
  "/contact": {
    title: "Contact",
    path: "/",
    previous: "Home",
  },
  "/skills": {
    title: "Skills",
    path: "/",
    previous: "Home",
  },
};

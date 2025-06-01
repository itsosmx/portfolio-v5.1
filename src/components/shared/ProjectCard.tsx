"use client";
import { IProjectProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import skills from "@/utils/skills";

export default function ProjectCard({ project }: { project: IProjectProps }) {
  const icon = (name: string) => {
    return skills.find(
      (item) =>
        item.name.toLowerCase() === name.toLowerCase() ||
        item.id?.toLowerCase() === name.toLowerCase() ||
        item.fallback?.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <motion.div
      className={cn(
        "group relative h-[420px] w-full lg:max-w-md rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-1 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
      )}
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}>
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col gap-4 rounded-lg bg-gray-900/50 p-4 transition-all duration-300 hover:bg-gray-900/70">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={project.thumbnail.url}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-3">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-400">
              {project.title}
            </h2>
            <p className="line-clamp-2 text-sm text-gray-300" title={project.headline}>
              {project.headline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tool) => (
              <span
                key={tool}
                title={tool}
                className="flex items-center gap-1.5 rounded-full bg-gray-800/50 px-3 py-1.5 text-xs text-gray-300 transition-colors duration-300 hover:bg-purple-500/20 hover:text-purple-300">
                {icon(tool)?.image ? <Image alt={tool} height={16} width={16} src={icon(tool)?.image || ""} className="rounded-sm" /> : null}
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

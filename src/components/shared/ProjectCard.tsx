"use client";
import { IProjectProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
      className={cn("group card-background-dark rounded-lg overflow-hidden size-96 relative")}
      key={project.id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <Link href={`/projects/${project.slug}`} key={project.id} className={cn("flex flex-col gap-4 p-4 cursor-pointer shadow-md h-full")}>
        <div className="min-h-40 min-w-72 relative aspect-video rounded-lg overflow-hidden">
          <Image src={project.thumbnail.url} alt="thumbnail" fill className="object-cover size-full" />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h1 className="font-semibold text-xl">{project.title}</h1>
            <p className="text-[#BEC1DD] isolate line-clamp-2" title={project.headline}>
              {project.headline}
            </p>
          </div>
          <div className="flex gap-1 flex-wrap">
            {project.technologies?.map((tool) => (
              <span title={tool} className="card-background-dark p-2 rounded-full text-xs">
                {
                  // @ts-ignore
                }
                {icon(tool)?.image ? <Image alt={tool} height={20} width={20} src={icon(tool)?.image}></Image> : tool}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

import { getProjects } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="lg:p-16 p-4 flex flex-col gap-4">
      {projects?.map((project) => {
        return (
          <Link
            href={`/projects/${project.slug}`}
            key={project.id}
            className="flex flex-col lg:flex-row gap-4 hover:bg-red-800 hover:ring-2 hover:ring-red-600 transition-all duration-500 p-4 cursor-pointer shadow-md">
            <div className="min-h-40 min-w-72 relative">
              <Image src={project.thumbnail.url} alt="thumbnail" fill className="object-contain size-full" />
            </div>
            <div className="flex flex-col w-72 mx-auto lg:w-auto lg:m-0">
              <h1 className="font-semibold text-2xl">{project.title}</h1>
              <p>{project.headline}</p>
              <div className="flex-1"></div>
              <div className="flex gap-1 flex-wrap lg:gap-4">
                {project.toolset?.map((tool) => (
                  <span className="bg-slate-300 text-slate-700 font-semibold p-1 px-4 rounded-full text-sm">{tool}</span>
                ))}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

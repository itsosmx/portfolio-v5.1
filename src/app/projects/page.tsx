import { PageHeader, ProjectCard } from "@/components";
import { getProjects } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="lg:p-16 p-4 flex flex-col gap-4">
      <PageHeader className="p-4" title="All Projects" />
      {projects?.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

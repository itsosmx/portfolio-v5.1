import { PageHeader, ProjectCard } from "@/components";
import { getProjects } from "@/lib/actions";
import React from "react";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="lg:p-16 p-4 flex flex-col gap-4">
      <PageHeader className="p-4" title="All Projects" />
      <div className="flex items-center justify-center">
        {/* <input
          type="search"
          className="rounded-lg p-2 bg-glass-100 outline-none ring-accent ring-1 w-1/2"
          placeholder="Searching for project with specific technology"
        /> */}
      </div>
      {projects?.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

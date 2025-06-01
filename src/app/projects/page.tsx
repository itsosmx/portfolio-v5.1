import { Container, ProjectCard } from "@/components";
import { getProjects } from "@/lib/actions";
import React from "react";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {projects?.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </Container>
  );
}

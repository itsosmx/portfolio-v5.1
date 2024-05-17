import { Container, ProjectCard } from "@/components";
import { getProjects } from "@/lib/actions";
import React from "react";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Container className="flex justify-center gap-4 flex-wrap">
      {projects?.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </Container>
  );
}

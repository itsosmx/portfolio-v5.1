import { getProjects } from "@/lib/actions";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();


  const projectsEntries = projects?.map((project) => {
    return {
      url: `https://osmx.me/projects/${project.slug}`,
    }
  }) || []


  return [
    {
      url: `https://osmx.me/about`,
    },
    {
      url: `https://osmx.me/contact`,
    },

    {
      url: `https://osmx.me/projects`,
    },
    {
      url: `https://osmx.me/skills`,
    },
    ...projectsEntries,
  ]
}
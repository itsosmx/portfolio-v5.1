import { getProjects } from "@/lib/actions";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const projects = await getProjects();
  const data = projects?.find((project) => project.slug === params.slug);

  return {
    title: `osmx.me | ${data?.title}`,
    description: data?.headline,
    keywords: [data?.technologies.join(", ") || "", "osmx", "osama hussein", "software engineer"],
    openGraph: {
      images: [
        {
          url: `${data?.thumbnail.url}`,
        },
      ],
    },
  };
}

export default function ProjectSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import { getProjectBySlug } from "@/lib/actions";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // const data = await getProjectBySlug(params.slug);
  // console.log(data);
  return {}
  // return {
  //   title: `osmx.me | ${data.title}`,
  //   description: data.headline,
  //   keywords: [""],
  //   openGraph: {
  //     images: [
  //       {
  //         url: data.thumbnail.url
  //       },
  //     ],
  //   },
  // };
}

export default function ProjectSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}

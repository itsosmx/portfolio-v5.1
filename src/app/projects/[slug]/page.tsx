import { PageHeader, SlideIn } from "@/components";
import { getProjects } from "@/lib/actions";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

export default async function ProjectSlug({ params }: { params: { slug: string } }) {
  const projects = await getProjects();
  const post = projects?.find((project) => project.slug === params.slug);

  if (!post) {
    throw new Error("Post not found");
  }

  return (
    <div className="flex lg:p-16 p-8 flex-col min-h-screen">
      <PageHeader className="my-4" previous="All Projects" title={post.title} path="/projects" />
      <div className="w-full justify-end gap-4 flex lg:flex-row-reverse flex-col-reverse">
        <SlideIn className="flex flex-col flex-grow justify-between lg:max-w-prose max-w-none">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-gray text-sm capitalize">{post.headline}</p>
          <div className="flex flex-col my-4">
            <h3 className="text-xl font-bold">Technologies Used</h3>
            <div className="flex gap-4 flex-wrap mt-4">
              {!!post.technologies?.length &&
                post.technologies?.map((item) => (
                  <span className="shadow-md bg-accent text-secondary font-semibold px-4 p-1 rounded-lg text-sm" key={item}>
                    {item}
                  </span>
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Toolset Used</h3>
            <div className="flex gap-4 flex-wrap mt-4">
              {!!post.toolset?.length &&
                post.toolset?.map((item) => (
                  <span className="shadow-md bg-accent text-secondary font-semibold px-4 p-1 rounded-lg text-sm" key={item}>
                    {item}
                  </span>
                ))}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h3 className="text-xl font-bold ">Develope At</h3>
              <span className="text-primary font-semibold text-slate-400">
                {post.developedAt ? new Date(post.developedAt).toDateString() : "Unknown"}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Posted At</h3>
              <span className="text-primary font-semibold text-slate-400">
                {post.developedAt ? new Date(post.createdAt).toDateString() : "Unknown"}
              </span>
            </div>
          </div>
        </SlideIn>
        <SlideIn direction={-1} className="lg:w-1/2 lg:h-auto w-full h-[50vh] relative">
          <Image src={post.thumbnail?.url} fill alt="image" className="size-full object-contain" />
        </SlideIn>
      </div>
      <SlideIn axis="y" className="grid lg:grid-cols-3 grid-cols-1 mt-8 gap-4">
        <div className="lg:col-span-2 col-span-1">
          <h3 className="text-2xl font-bold underline mb-2">About :-</h3>
          {post.description && <div className="project-description text-justify" dangerouslySetInnerHTML={{ __html: post.description.html }} />}
        </div>
        <div className="flex flex-col gap-4 col-span-1">
          <a
            target="_blank"
            className={cn(
              `bg-accent text-secondary w-full p-8 flex items-center justify-between rounded-xl shadow-button text-2xl font-semibold`,
              !post.demo && +"opacity-50"
            )}
            href={post.demo ? post.demo : "#"}>
            <p>{post.demo ? "Live Demo" : "Demo Not available"}</p>
            <FaLink />
          </a>
          <a
            target="_blank"
            className={cn(
              `bg-accent text-secondary w-full p-8 flex items-center justify-between rounded-xl shadow-button text-2xl font-semibold`,
              !post.github && "opacity-50"
            )}
            href={post.github ? post.github : "#"}>
            <p>{post.github ? "Github Repo." : "Code Not available"}</p>
            <FaGithub />
          </a>
        </div>
      </SlideIn>
    </div>
  );
}

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
    <div className="flex p-16 flex-col">
      <div className="w-full justify-end gap-4 flex lg:flex-row-reverse flex-col-reverse">
        <div className="flex flex-col flex-grow justify-between lg:max-w-prose max-w-none">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-gray text-sm capitalize">{post.headline}</p>
          <div className="flex flex-col my-4">
            <h3 className="text-xl font-bold">Technologies Used</h3>
            <div className="flex gap-4 flex-wrap mt-4">
              {!!post.technologies?.length &&
                post.technologies?.map((item) => (
                  <span className="bg-slate-400 shadow-md text-slate-950 font-semibold px-4 p-1 rounded-lg text-sm" key={item}>
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
                  <span className="bg-slate-400 shadow-md text-slate-950 font-semibold px-4 p-1 rounded-lg text-sm" key={item}>
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
        </div>
        <div className="lg:w-1/2 w-full relative">
          <Image src={post.thumbnail?.url} fill alt="image" className="size-full object-cover" />
        </div>
      </div>
      <div className="flex items-center gap-4 mobile:flex-col mt-8">
        <div className="w-[70%] mobile:w-full">
          <h3 className="text-2xl font-bold underline mb-2">About :-</h3>
          {post.description && <p className="project-description" dangerouslySetInnerHTML={{ __html: post.description.html }} />}
        </div>
        <div className="flex flex-col w-[30%] mobile:w-full gap-4">
          <a
            target="_blank"
            className={cn(
              `bg-slate-400 text-slate-900 w-full p-8 flex items-center justify-between rounded-xl shadow-button text-2xl font-semibold`,
              !post.demo && "opacity-50"
            )}
            href={post.demo ? post.demo : "#"}>
            <p>{post.demo ? "Live Demo" : "Not available"}</p>
            <FaLink />
          </a>
          <a
            target="_blank"
            className={cn(
              `bg-slate-400 text-slate-900 w-full p-8 flex items-center justify-between rounded-xl shadow-button text-2xl font-semibold`,
              !post.github && "opacity-50"
            )}
            href={post.github ? post.github : "#"}>
            <p>{post.github ? "Github Repo." : "Not available"}</p>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

import { PageHeader, SlideIn, Slider } from "@/components";
import { getProjects } from "@/lib/actions";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

export default async function ProjectSlug({ params }: { params: { slug: string } }) {
  const projects = await getProjects();
  const post = projects?.find((project) => project.slug === params.slug);

  if (!post) {
    throw new Error("Project not found");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <PageHeader className="mb-6 sm:mb-8 lg:mb-12" previous="All Projects" title="" path="/projects" />

        {/* Hero Section */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 blur-3xl -z-10" />
          <SlideIn className="relative">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-white via-accent to-secondary bg-clip-text text-transparent">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-3xl">{post.headline}</p>
          </SlideIn>
        </div>

        {/* Project Image - Full Width on Mobile */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <SlideIn
            direction={-1}
            className="group relative w-full aspect-[16/9] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-accent/5 backdrop-blur-sm border border-accent/10">
            {post.image.length < 2 ? (
              <Image
                src={post.thumbnail?.url}
                fill
                alt={post.title}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <Slider post={post} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </SlideIn>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Project Info */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Project Description */}
            <SlideIn axis="y" className="prose prose-invert max-w-none">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                About the Project
              </h2>
              {post.description && (
                <div
                  className="project-description text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200"
                  dangerouslySetInnerHTML={{ __html: post.description.html }}
                />
              )}
            </SlideIn>
          </div>

          {/* Right Column - Project Details */}
          <div className="lg:col-span-4">
            <SlideIn className="lg:sticky lg:top-8">
              <div className="backdrop-blur-md bg-accent/10 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8 border border-accent/20 hover:border-accent/30 transition-colors duration-500">
                {/* Technologies */}
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-accent/20 text-white rounded-full text-xs sm:text-sm font-medium 
                                 hover:bg-accent/30 hover:scale-105 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Toolset */}
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                    Toolset
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.toolset?.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-secondary/20 text-white rounded-full text-xs sm:text-sm font-medium 
                                 hover:bg-secondary/30 hover:scale-105 transition-all duration-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dates */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 pt-3 sm:pt-4 lg:pt-6 border-t border-accent/20">
                  <div className="group">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-white group-hover:text-accent transition-colors">
                      Developed
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                      {post.developedAt ? new Date(post.developedAt).toLocaleDateString() : "Unknown"}
                    </p>
                  </div>
                  <div className="group">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-white group-hover:text-accent transition-colors">
                      Posted
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Unknown"}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 pt-3 sm:pt-4 lg:pt-6 border-t border-accent/20">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex items-center justify-between w-full p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-accent/30 to-accent/20",
                      "hover:from-accent/40 hover:to-accent/30 transition-all duration-500",
                      "border border-accent/20 hover:border-accent/30",
                      !post.demo && "opacity-50 cursor-not-allowed"
                    )}
                    href={post.demo || "#"}>
                    <div>
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">Live Demo</p>
                      <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                        {post.demo ? "Visit the live project" : "Demo not available"}
                      </p>
                    </div>
                    <FaLink className="text-lg sm:text-xl lg:text-2xl text-white group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex items-center justify-between w-full p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-secondary/30 to-secondary/20",
                      "hover:from-secondary/40 hover:to-secondary/30 transition-all duration-500",
                      "border border-secondary/20 hover:border-secondary/30",
                      !post.github && "opacity-50 cursor-not-allowed"
                    )}
                    href={post.github || "#"}>
                    <div>
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">Source Code</p>
                      <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                        {post.github ? "View on GitHub" : "Code not available"}
                      </p>
                    </div>
                    <FaGithub className="text-lg sm:text-xl lg:text-2xl text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </main>
  );
}

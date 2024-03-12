import { Highlight, SlideIn } from "@/components";
import { HeroParallax } from "@/components/shared/Parallax";
import { TextGenerateEffect } from "@/components/shared/TextGenerate";
import { getProjects } from "@/lib/actions";
import links from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <section className="lg:h-screen grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col justify-between col-span-1 lg:h-full h-screen lg:p-16 p-8">
          <SlideIn delay={0} direction={-1}>
            <TextGenerateEffect className="font-bold text-7xl text-slate-200" words="Osama Hussein" />
            <TextGenerateEffect className="font-bold uppercase text-4xl pl-1 text-accent" words="Software Engineer" />
            <TextGenerateEffect
              className="font-light capitalize pl-1 text-wrap text-xl text-accent"
              words="Specializing in Website Development, Mobile Applications, and Unity Games"
            />
          </SlideIn>
          <SlideIn direction={-1} delay={0.3} className="gap-2 flex flex-col text-stone-100">
            {links.routes.map((route) => (
              <Link key={route.slug} href={route.slug} className="group font-bold flex items-center uppercase text-sm hover:underline">
                <span className="w-16 h-[1px] bg-slate-400 mr-2 group-hover:w-11 transition-all duration-200"></span>
                {route.name}
              </Link>
            ))}
          </SlideIn>
          <SlideIn axis="y" className="flex gap-8 text-2xl text-slate-200">
            {links.social.map((route) => (
              <a target="_blank" key={route.href} href={route.href} className="flex flex-col items-center hover:-translate-y-2 transition-all">
                {<route.icon />}
              </a>
            ))}
          </SlideIn>
        </div>
        <SlideIn className="col-span-1 leading-8 lg:h-full h-screen hidden lg:flex flex-col justify-between items-center relative">
          <Image src="/mainIconsdark.svg" fill alt="Osama Hussein" className="absolute object-contain" />
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full h-full object-fill opacity-5 -z-10 rotate-90"
            src="/encryption.webm"></video>
        </SlideIn>
      </section>
      <HeroParallax
        products={
          projects?.map((project) => {
            return {
              title: project.title,
              link: `/projects/${project.slug}`,
              thumbnail: project.thumbnail.url,
            };
          }) || []
        }
      />
    </div>
  );
}

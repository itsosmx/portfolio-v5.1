import { Highlight } from "@/components";
import { HeroParallax } from "@/components/shared/Parallax";
import { TextGenerateEffect } from "@/components/shared/TextGenerate";
import { getProjects } from "@/lib/actions";
import links from "@/utils/links";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <section className="lg:h-screen p-16 grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col justify-between col-span-1 lg:h-full h-screen">
          <div>
            <TextGenerateEffect className="font-bold text-6xl text-slate-200" words="Osama Hussein"></TextGenerateEffect>
            <TextGenerateEffect className="font-medium text-2xl pl-1 text-slate-400" words="Software Engineer"></TextGenerateEffect>
            <TextGenerateEffect className="font-bold capitalize pl-1 text-slate-500" words="I build websites, mobile applications, and unity games" />
          </div>
          <div className="gap-2 flex flex-col text-stone-100">
            {links.routes.map((route) => (
              <Link key={route.slug} href={route.slug} className="group font-bold flex items-center uppercase text-sm hover:underline w-fit ">
                <span className="w-16 h-[1px] bg-slate-400 mr-2 group-hover:w-11 transition-all duration-200"></span>
                {route.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-8 text-2xl text-slate-200">
            {links.social.map((route) => (
              <a target="_blank" key={route.href} href={route.href} className="flex flex-col items-center hover:-translate-y-2 transition-all">
                {<route.icon />}
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-1 leading-8 lg:h-full h-screen hidden lg:flex flex-col justify-between text-slate-300">
          <p>
            My journey began in 2015 when i discover something called blogger, where I shared my passion for technology through writing technical
            articles. But as I delved deeper into the world of blogging, I became fascinated with the idea of creating my own website. And so, I
            embarked on a journey of self-discovery, learning <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, and{" "}
            <Highlight>JavaScript</Highlight> to bring my vision to life.
          </p>

          <p>
            As I experimented with building simple websites, I found myself asking,
            <span className="font-bold text-3xl">What else can I do ?</span> My curiosity led me to explore APIs, and that's when everything changed.
            I discovered <Highlight>Node.js</Highlight> and began developing Discord Applications (Bots) using Discord API, which proved to be a
            game-changer for me. The idea of being able to create something that people could use and enjoy was incredibly satisfying.
          </p>

          <p>
            With each new project, I gained more experience and skills. I taught myself <Highlight>Mongoose</Highlight>,{" "}
            <Highlight>React.js</Highlight>, <Highlight>React Native</Highlight>, <Highlight>Python</Highlight>, <Highlight>Kotlin</Highlight>, and
            other technologies, constantly expanding my toolbox. One of my proudest achievements was creating a Discord bot that could do anything the
            Discord API offered.The bot has spread widely, reaching more than <Highlight>300,000 user</Highlight>. The process was challenging, but it
            taught me invaluable lessons about determination, patience, and creativity.
          </p>
        </div>
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

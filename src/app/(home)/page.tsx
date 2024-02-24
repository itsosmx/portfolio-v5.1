import Logo from "@/components/shared/Logo";
import { HeroParallax } from "@/components/shared/Parallax";
import { TextGenerateEffect } from "@/components/shared/TextGenerate";
import { WavyBackground } from "@/components/shared/WavyBackground";
import { getProjects } from "@/lib/actions";
import React from "react";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="overflow-x-hidden">
      <WavyBackground colors={["#424242", "#969696"]} blur={100}>
        <Logo />
        <div className="absolute bottom-1/4 left-0 right-0 text-center">
          <TextGenerateEffect className="text-sm lg:text-2xl text-nowrap" words="Software Engineer Developing Websites, Applications, and Games" />
          <TextGenerateEffect className="text-sm lg:text-xl text-nowrap" words="Every line of code is an opportunity to create something amazing" />
        </div>
      </WavyBackground>
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

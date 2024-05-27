import { Button, SlideIn, VideoBackground } from "@/components";
import { TextGenerateEffect } from "@/components/shared/TextGenerate";
import links from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WelcomeSection() {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 relative lg:h-screen">
      <VideoBackground src="/encryption.webm" />
      <div className="flex flex-col justify-between col-span-1 lg:h-full h-screen lg:p-16 p-8">
        <SlideIn delay={0} direction={-1} className="flex flex-col items-start">
          <TextGenerateEffect className="font-bold text-3xl text-slate-200 lg:leading-[0.5rem]" words="Hello," />
          <TextGenerateEffect className="font-bold text-6xl text-slate-200 lg:leading-[1rem]" words="This is Osama" />
          <TextGenerateEffect className="font-bold text-4xl pl-1 text-accent" words="I'm a Professional Software Developer." />
          <Button
            as="a"
            className="mt-4 px-8"
            // className="inline-flex h-12 hover:animate-shimmer items-center justify-center rounded-md border border-accent ease-in-out transition-all bg-transparent hover:bg-[linear-gradient(110deg,transparent,45%,#9290c3,55%,transparent)] bg-[length:200%_100%] px-8 font-medium text-white mt-4"
            target="_blank"
            href="/cv.pdf">
            Resume
          </Button>
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
      </SlideIn>
    </section>
  );
}

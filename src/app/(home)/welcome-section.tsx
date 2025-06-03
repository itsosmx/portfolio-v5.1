import { Button, SlideIn, VideoBackground } from "@/components";
import { TextGenerateEffect } from "@/components/shared/TextGenerate";
import links from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WelcomeSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground src="/encryption.webm" className="opacity-50" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <TextGenerateEffect className="text-4xl md:text-5xl font-bold text-slate-200" words="Hello, I'm" />
              <TextGenerateEffect
                className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent"
                words="Osama Hussein"
              />
              <TextGenerateEffect className="text-2xl md:text-3xl font-medium text-slate-300" words="Full Stack Developer" />
            </div>

            <p className="text-slate-300 text-lg max-w-xl">
              Crafting digital experiences through clean code and creative solutions. Specializing in web development, mobile apps, and game
              development.
            </p>

            <div className="flex gap-4">
              <Button as="a" className="px-8 py-3 bg-accent hover:bg-accent/90 transition-all" target="_blank" href="/cv.pdf">
                View Resume
              </Button>
              <Button as="a" className="px-8 py-3 border border-accent hover:bg-accent/10 transition-all" href="/contact">
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 pt-4">
              {links.social.map((route) => (
                <a key={route.href} href={route.href} target="_blank" className="text-2xl text-slate-300 hover:text-accent transition-colors">
                  <route.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Model or Illustration */}
          <div className="relative h-[500px] hidden lg:block">
            <Image src="/mainIconsdark.svg" alt="Osama Hussein" fill className="object-contain animate-float" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex gap-8">
            {links.routes.map((route) => (
              <Link key={route.slug} href={route.slug} className="group font-medium text-slate-300 hover:text-accent transition-colors">
                <span className="relative">
                  {route.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

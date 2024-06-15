import { CardStack, SlideIn, VideoBackground } from "@/components";
import React from "react";

export default function ProvideSection() {
  return (
    <section className="flex items-center justify-center lg:flex-row-reverse flex-col lg:min-h-[75dvh] relative">
      <VideoBackground src="/blackhole.webm" className="top-[25%]" />

      <div className="lg:max-w-[40%] max-w-[65%]">
        <SlideIn axis="y" renderAs="h2" className="text-gradient-white text-center lg:text-6xl text-3xl font-bold uppercase">
          What I Provide
        </SlideIn>
        <SlideIn axis="y" renderAs="h2" className="text-center text-sm px-4 lg:px-8">
          I'm a full-stack developer with a passion for creating beautiful, responsive, and user-friendly web applications, mobile apps, and games.
        </SlideIn>
      </div>

      <SlideIn axis="y" delay={0.5} className="flex p-16 justify-center">
        <CardStack
          items={cards.map((tech) => {
            return {
              id: Math.random(),
              name: tech.title,
              designation: "Expertise",
              content: <>{tech.description}</>,
            };
          })}
        />
      </SlideIn>
    </section>
  );
}

const cards = [
  {
    title: "Web Development",
    description: `I'm always ready to make a custom portable robust product that fits the need of any client!`,
  },
  {
    title: "Mobile Development",
    description: `I love creating apps than change the way we interact with our mobile devices.`,
  },
  {
    title: "Games Development",
    description: `Making games has always been my passion, i'm always excited about working on them.`,
  },
  {
    title: "Backend Development",
    description: `Designing robust backend systems to ensure smooth and efficient application performance.`,
  },
];

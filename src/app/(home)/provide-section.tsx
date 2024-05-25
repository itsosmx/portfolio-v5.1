import { Card, VideoBackground } from "@/components";
import Image from "next/image";
import React from "react";

export default function ProvideSection() {
  return (
    <section className="flex flex-col gap-4 items-center relative">
      <VideoBackground src="/blackhole.webm" />
      <div className="grid lg:grid-cols-4 gap-4 grid-cols-1 p-16">
        {cards.map((card, index) => (
          <Card direction={index % 2 === 0 ? "left" : "right"} duration={0.5} delay={0.2 * index} key={index}>
            <div className="grid place-items-center">
              <Image src={card.image} alt={card.title} height={200} width={200} className="" />
            </div>
            <h3 className="text-3xl mb-4 text-center font-bold text-accent text-gradient">{card.title}</h3>
            <p className="text-justify text-sm">{card.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

const cards = [
  {
    image: "/images/web.svg",
    title: "Web Development",
    description: `I'm always ready to make a custom portable robust product that fits the need of any client!`,
  },
  {
    image: "/images/mobile.svg",
    title: "Mobile Development",
    description: `I love creating apps than change the way we interact with our mobile devices.`,
  },
  {
    image: "/images/games.svg",
    title: "Games Development",
    description: `Making games has always been my passion, i'm always excited about working on them.`,
  },
  {
    image: "/images/backend.svg",
    title: "Backend Development",
    description: `Designing robust backend systems to ensure smooth and efficient application performance.`,
  },
];

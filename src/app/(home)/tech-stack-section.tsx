import { Card, CardStack, SlideIn } from "@/components";
import Image from "next/image";
import React from "react";

export default function TechStackSection() {
  return (
    <section className="flex items-center justify-center lg:flex-row flex-col lg:min-h-[75dvh]">
      <div className="lg:max-w-[40%] max-w-[65%]">
        <SlideIn axis="y" renderAs="h2" className="text-gradient-white text-center lg:text-6xl text-3xl font-bold uppercase">
          My Tech Stack
        </SlideIn>
        <SlideIn axis="y" renderAs="h2" className="text-center text-sm px-4 lg:px-8">
          I leverage a modern tech stack to craft exceptional websites that are not only visually appealing but also perform well in search engines.
        </SlideIn>
      </div>
      <SlideIn axis="y" delay={0.5} className="flex p-16 justify-center">
        <CardStack
          items={techStack.map((tech) => {
            return {
              id: Math.random(),
              name: tech.title,
              designation: "Tech Stack",
              content: (
                <>
                  <Image src={tech.icon} alt={tech.title} height={50} width={50} />
                  {tech.description}
                </>
              ),
            };
          })}
        />
      </SlideIn>
    </section>
  );
}

const techStack = [
  {
    icon: "/images/mongodb.svg",
    title: "MongoDB",
    description: `A flexible NoSQL database that allows for scalable and efficient data storage, perfect for modern web applications.`,
  },
  {
    icon: "/images/expressjs.svg",
    title: "Express.js",
    description: `A lightweight web framework built on Node.js, providing a robust and efficient foundation for building web servers.`,
  },
  {
    icon: "/images/react.svg",
    title: "React.js",
    description: `A JavaScript library for building user interfaces, React.js enables the creation of dynamic and interactive web applications.`,
  },
  {
    icon: "/images/nodejs.svg",
    title: "Node.js",
    description: `A JavaScript runtime that allows for the development of scalable server-side applications, providing a powerful backend solution.`,
  },
  {
    icon: "/images/nextjs.svg",
    title: "Next.js",
    description: `A React framework that enables server-side rendering and static site generation, providing a performant and SEO-friendly solution.`,
  },
];

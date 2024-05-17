import { Card, SlideIn } from "@/components";
import Image from "next/image";
import React from "react";

export default function TechStackSection() {
  return (
    <section className="flex-center flex-col">
      <div>
        <SlideIn axis="y" renderAs="h2" className=" text-center lg:text-6xl text-3xl font-bold">
          My Tech Stack
        </SlideIn>
        <SlideIn axis="y" renderAs="h2" className="text-center text-sm px-4 lg:px-8">
          I leverage a modern tech stack to craft exceptional websites that are not only visually appealing but also perform well in search engines.
        </SlideIn>
      </div>
      <div className="flex gap-4 p-16 flex-col lg:flex-row ">
        {techStack.map((tech, index) => (
          <Card key={tech.title} direction={index % 2 === 0 ? "left" : "right"} duration={0.5} delay={0.2 * index}>
            <Image src={tech.icon} alt={tech.title} height={100} width={100} />
            <h3 className="font-bold text-accent text-3xl text-gradient">{tech.title}</h3>
            <p className="text-justify text-sm">{tech.description}</p>
          </Card>
        ))}
      </div>
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
];

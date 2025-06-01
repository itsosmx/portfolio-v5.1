import { SlideIn } from "@/components";
import Image from "next/image";
import React from "react";

export default function TechStackSection() {
  return (
    <section className="relative min-h-screen py-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <SlideIn axis="y" renderAs="h2" className="text-gradient-white text-4xl md:text-6xl font-bold">
            Tech Stack
          </SlideIn>
          <SlideIn axis="y" renderAs="p" className="text-slate-300 text-lg max-w-2xl mx-auto">
            I leverage cutting-edge technologies to build scalable, performant, and maintainable applications. Here's what I work with:
          </SlideIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <SlideIn key={tech.title} axis="y" delay={index * 0.1}>
              <div className="group relative h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

                <div className="relative h-full p-8 flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="relative w-8 h-8 group-hover:rotate-12 transition-transform duration-500">
                        <Image
                          src={tech.icon}
                          alt={tech.title}
                          fill
                          className="object-contain filter brightness-100 invert-0 transition-all duration-500"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">{tech.title}</h3>
                  </div>

                  {/* Middle Section - Description */}
                  <div className="flex-1 flex items-center">
                    <p className="text-slate-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">{tech.description}</p>
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const techStack = [
  {
    icon: "/images/mongodb.svg",
    title: "MongoDB",
    description: `A powerful NoSQL database that revolutionizes data storage with its flexible document model, enabling rapid development and seamless scalability for modern applications.`,
  },
  {
    icon: "/images/expressjs.svg",
    title: "Express.js",
    description: `A minimalist yet powerful Node.js web framework that streamlines API development with its robust middleware system and elegant routing capabilities.`,
  },
  {
    icon: "/images/react.svg",
    title: "React.js",
    description: `A revolutionary JavaScript library that transforms UI development through its component-based architecture and virtual DOM, enabling the creation of highly responsive and maintainable applications.`,
  },
  {
    icon: "/images/nodejs.svg",
    title: "Node.js",
    description: `A game-changing JavaScript runtime that empowers developers to build lightning-fast, event-driven applications with its non-blocking I/O model and vast ecosystem.`,
  },
  {
    icon: "/images/nextjs.svg",
    title: "Next.js",
    description: `A cutting-edge React framework that elevates web development with its hybrid rendering capabilities, automatic code splitting, and built-in performance optimizations.`,
  },
];

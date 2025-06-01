import { SlideIn, VideoBackground } from "@/components";
import React from "react";

export default function ProvideSection() {
  return (
    <section className="relative min-h-screen py-20 flex items-center justify-center">
      <VideoBackground src="/blackhole.webm" className="opacity-30" />

      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-16 space-y-4">
          <SlideIn axis="y" renderAs="h2" className="text-gradient-white text-4xl md:text-6xl font-bold">
            My Expertise
          </SlideIn>
          <SlideIn axis="y" renderAs="p" className="text-slate-300 text-lg max-w-2xl mx-auto">
            As a versatile developer, I specialize in crafting innovative digital solutions that combine technical excellence with creative design.
            Let's build something extraordinary together.
          </SlideIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <SlideIn key={card.title} axis="y" delay={index * 0.1}>
              <div className="group relative h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

                <div className="relative h-full p-8 flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <card.icon className="w-7 h-7 text-accent group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">{card.title}</h3>
                  </div>

                  {/* Middle Section - Description */}
                  <div className="flex-1 flex items-center">
                    <p className="text-slate-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">{card.description}</p>
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

const cards = [
  {
    title: "Web Development",
    description: `Creating modern, responsive, and performant web applications that deliver exceptional user experiences.`,
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    description: `Building cross-platform mobile applications that combine native performance with modern development practices.`,
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Games Development",
    description: `Developing engaging games using cutting-edge technologies and creative game design principles.`,
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Backend Development",
    description: `Designing scalable and secure backend systems with robust APIs and efficient database solutions.`,
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
];

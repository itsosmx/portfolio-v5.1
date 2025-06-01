import { Container, Highlight, SlideIn } from "@/components";
import React from "react";

export default function AboutPage() {
  function GetMyAge() {
    const today = new Date();
    const birthDate = new Date("2000-12-20");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <Container>
      {/* Hero Section */}
      <section className="min-h-[40vh] flex flex-col items-center justify-center gap-6 py-12">
        <SlideIn renderAs="h1" axis="y" direction={-1} className="font-bold lg:text-6xl text-4xl text-center">
          Hi, I'm <span className="text-gradient-white">OSMX</span>
        </SlideIn>
        <SlideIn axis="y" className="text-gray lg:text-2xl text-lg text-center max-w-2xl">
          Software Developer crafting digital experiences through websites, applications, and games
        </SlideIn>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 space-y-12 py-12">
        <div className="space-y-6">
          <SlideIn renderAs="h2" className="text-3xl font-bold text-center">
            Who is OSMX?
          </SlideIn>
          <SlideIn direction={-1} className="text-lg leading-relaxed">
            I'm <Highlight>Osama Hussein</Highlight>, a {GetMyAge()}-year-old Computer Science Engineer at{" "}
            <Highlight>
              <a target="_blank" href="https://www.nub.edu.eg/" className="hover:text-primary transition-colors">
                Nahda University
              </a>
            </Highlight>{" "}
            in Egypt, graduating in 2024. As a self-taught developer, I specialize in web apps, mobile applications, and games. When I'm not coding,
            you'll find me immersed in MMORPGs and exploring new gaming experiences.
          </SlideIn>
        </div>

        {/* Journey Section */}
        <div className="space-y-8">
          <SlideIn renderAs="h2" className="text-3xl font-bold text-center">
            My Journey
          </SlideIn>

          <div className="space-y-8">
            <SlideIn className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Beginning (2015)</h3>
              <p className="text-lg leading-relaxed">
                My journey began with Blogger, where I shared my passion for technology through technical articles. This led me to discover the world
                of web development, where I learned <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, and <Highlight>JavaScript</Highlight> to
                create my own digital space.
              </p>
            </SlideIn>

            <SlideIn className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Evolution</h3>
              <p className="text-lg leading-relaxed">
                My curiosity led me to explore APIs, particularly the Discord API. This opened doors to creating Discord Applications (Bots) using{" "}
                <Highlight>Node.js</Highlight>. One of my proudest achievements was developing a Discord bot that reached over{" "}
                <Highlight>300,000 users</Highlight>.
              </p>
            </SlideIn>

            <SlideIn className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Growth</h3>
              <p className="text-lg leading-relaxed">
                I expanded my skillset to include <Highlight>Mongoose</Highlight>, <Highlight>React.js</Highlight>,<Highlight>React Native</Highlight>
                , <Highlight>Python</Highlight>, and <Highlight>Kotlin</Highlight>. Each new technology added to my toolbox, helping me create more
                sophisticated and impactful solutions.
              </p>
            </SlideIn>

            <SlideIn className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Future</h3>
              <p className="text-lg leading-relaxed">
                I believe in <span className="font-bold">lifelong learning</span> and am constantly seeking new challenges. My passion lies in using
                technology to make a positive impact and create innovative solutions that enhance people's lives.
              </p>
            </SlideIn>
          </div>
        </div>
      </section>
    </Container>
  );
}

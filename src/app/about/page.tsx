import { BackButton, Highlight, SlideIn } from "@/components";
import React from "react";

export default function page() {
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
    <div className="flex items-center flex-col lg:p-16 p-8 py-16">
      <BackButton />
      <div className="text-center gap-1 flex flex-col my-4">
        <SlideIn renderAs="h1" axis="y" direction={-1} className="font-bold lg:text-5xl text-3xl">
          Hi, I’m OSMX. Nice to meet you.
        </SlideIn>
        <SlideIn axis="y" className="text-gray lg:text-xl text-md">
          Software Engineer Designing and Developing Websites, Applications and Games
        </SlideIn>
      </div>
      <div className="w-full px-4 flex flex-col gap-8 text-2xl mb-8 tracking-wide font-play">
        <SlideIn renderAs="h2" className="lg:text-3xl text-xl font-semibold mt-4 underline">
          Who is OSMX ?
        </SlideIn>
        <SlideIn direction={-1} className="text-justify lg:text-xl text-sm">
          I'm <Highlight>Osama Hussein</Highlight>, a {GetMyAge()}-year-old computer science student at{" "}
          <Highlight>
            <a target="_blank" href="https://www.nub.edu.eg/">
              Nahda University
            </a>
          </Highlight>{" "}
          in Egypt. 2024 is my expected graduation year. I'm a self-taught developer who enjoys developing web apps, mobile applications, and games.
          I'm passionate about using my skills to make a positive impact on the world. I'm also a gamer and enjoy playing video games in my free time,
          especially MMORPGs.
        </SlideIn>
        <SlideIn renderAs="h2" className="lg:text-3xl text-xl underline font-semibold mt-4">
          My journey:{" "}
        </SlideIn>
        <SlideIn className="text-justify lg:text-xl text-sm">
          My journey began in 2015 when i discover something called blogger, where I shared my passion for technology through writing technical
          articles. But as I delved deeper into the world of blogging, I became fascinated with the idea of creating my own website. And so, I
          embarked on a journey of self-discovery, learning <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, and{" "}
          <Highlight>JavaScript</Highlight> to bring my vision to life.
        </SlideIn>

        <SlideIn className="text-justify lg:text-xl text-sm">
          As I experimented with building simple websites, I found myself asking,
          <span className="font-bold text-3xl">What else can I do ?</span> My curiosity led me to explore APIs, and that's when everything changed. I
          discovered <Highlight>Node.js</Highlight> and began developing Discord Applications (Bots) using Discord API, which proved to be a
          game-changer for me. The idea of being able to create something that people could use and enjoy was incredibly satisfying.
        </SlideIn>

        <SlideIn className="text-justify lg:text-xl text-sm">
          With each new project, I gained more experience and skills. I taught myself <Highlight>Mongoose</Highlight>, <Highlight>React.js</Highlight>
          , <Highlight>React Native</Highlight>, <Highlight>Python</Highlight>, <Highlight>Kotlin</Highlight>, and other technologies, constantly
          expanding my toolbox. One of my proudest achievements was creating a Discord bot that could do anything the Discord API offered.The bot has
          spread widely, reaching more than <Highlight>300,000 user</Highlight>. The process was challenging, but it taught me invaluable lessons
          about determination, patience, and creativity.
        </SlideIn>

        <SlideIn className="text-justify lg:text-xl text-sm">
          As I continue on my journey, I'm excited to see where it will take me next. I believe that{" "}
          <span className="font-bold">learning is a lifelong process</span> , and I'm always seeking new challenges to broaden my horizons. I'm
          passionate about using technology to make a positive impact, and I'm committed to creating innovative solutions that enhance people's lives.
        </SlideIn>
      </div>
    </div>
  );
}

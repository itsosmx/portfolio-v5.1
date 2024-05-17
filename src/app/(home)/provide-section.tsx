import { Card, SlideIn, VideoBackground } from "@/components";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

export default function ProvideSection() {
  return (
    <section className="flex flex-col gap-4 items-center relative">
      <VideoBackground src="/blackhole.webm" />
      <SlideIn renderAs="h2" axis="y" className="lg:text-6xl text-3xl font-bold">
        What I provide
      </SlideIn>
      <div className="grid lg:grid-cols-4 gap-4 grid-cols-1 p-16">
        {cards.map((card, index) => (
          <Card direction={index % 2 === 0 ? "left" : "right"} duration={0.5} delay={0.2 * index} key={index}>
            <Image src={card.image} alt={card.title} height={300} width={300} />
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
    description: `As a proficient web developer, I specialize in crafting dynamic and user-friendly web applications. With expertise in technologies like
    Next.js, React.js, and React Native, I create modern and responsive interfaces. Whether it's building real-time communication platforms,
    like the freelancer platform I developed using Next.js, or crafting sleek and intuitive UIs for task management apps, I ensure that each
    project is tailored to meet the unique needs of its users.`,
  },
  {
    image: "/images/mobile.svg",
    title: "Mobile Development",
    description: `With a passion for mobile technology, I excel in developing cross-platform mobile applications that deliver seamless experiences across
    various devices. Leveraging frameworks like React Native, I create robust and feature-rich apps, such as the Quran and Azkar mobile app,
    which offers a comprehensive suite of features including media playback, prayer times, and Azkar reminders. My expertise extends to
    ensuring secure data storage and user authentication, as demonstrated in projects like the Ornn password manager app.`,
  },
  {
    image: "/images/games.svg",
    title: "Games Development",
    description: `Driven by creativity and a love for gaming, I bring virtual worlds to life through Unity 3D game development. From simulating intricate
    ecosystems in ranch management games to designing captivating gameplay mechanics and AI systems, I thrive on the challenges of game
    development. My dedication to crafting immersive experiences is evident in projects like "The Ranch," where I designed behavior systems
    for animals and implemented complex trading and auction mechanics to engage players.`,
  },
  {
    image: "/images/backend.svg",
    title: "Backend Development",
    description: `With a strong foundation in backend technologies and cloud services, I architect scalable and efficient server-side solutions. Whether
    it's implementing real-time updates with Firebase, managing databases with MongoDB and SQL, or building RESTful APIs with Node.js and
    Express, I ensure the seamless integration of frontend and backend components. My commitment to delivering robust and reliable backend
    systems is exemplified in projects like Taskingo, where I enabled real-time task management using Firebase Realtime Database.`,
  },
];

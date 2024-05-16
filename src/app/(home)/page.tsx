import { SlideIn } from "@/components";
import { HeroParallax } from "@/components/shared/Parallax";
import { TextGenerateEffect } from "@/components/shared/TextGenerate";
import { getProjects } from "@/lib/actions";
import { cn } from "@/utils";
import links from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col">
      <section className="lg:h-screen grid lg:grid-cols-2 grid-cols-1 gap-4 relative">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full object-cover opacity-10 -z-10 absolute top-0 left-0"
          src="/encryption.webm"></video>

        <div className="flex flex-col justify-between col-span-1 lg:h-full h-screen lg:p-16 p-8">
          <SlideIn delay={0} direction={-1} className="flex flex-col items-start">
            <TextGenerateEffect className="font-bold text-3xl text-slate-200 leading-[0.25rem]" words="Hello," />
            <TextGenerateEffect className="font-bold text-6xl text-slate-200 leading-[0.25rem]" words="This is OSMX" />
            <TextGenerateEffect className="font-bold text-4xl pl-1 text-accent" words="I'm a Professional Software Developer." />
            {/* <TextGenerateEffect
              className="font-light capitalize pl-1 text-wrap text-xl text-accent"
              words="Specializing in Website Development, Mobile Applications, and Unity Games"
            /> */}
            <Link
              className="inline-flex h-12 hover:animate-shimmer items-center justify-center rounded-md border border-accent transition-all bg-transparent hover:bg-[linear-gradient(110deg,transparent,45%,#9290c3,55%,transparent)] bg-[length:200%_100%] px-8 font-medium text-white mt-4"
              target="_blank"
              href="/cv.pdf">
              Resume
            </Link>
          </SlideIn>
          <SlideIn direction={-1} delay={0.3} className="gap-2 flex flex-col text-stone-100">
            {links.routes.map((route) => (
              <Link key={route.slug} href={route.slug} className="group font-bold flex items-center uppercase text-sm hover:underline">
                <span className="w-16 h-[1px] bg-slate-400 mr-2 group-hover:w-11 transition-all duration-200"></span>
                {route.name}
              </Link>
            ))}
          </SlideIn>
          <SlideIn axis="y" className="flex gap-8 text-2xl text-slate-200">
            {links.social.map((route) => (
              <a target="_blank" key={route.href} href={route.href} className="flex flex-col items-center hover:-translate-y-2 transition-all">
                {<route.icon />}
              </a>
            ))}
          </SlideIn>
        </div>
        <SlideIn className="col-span-1 leading-8 lg:h-full h-screen hidden lg:flex flex-col justify-between items-center relative">
          <Image src="/mainIconsdark.svg" fill alt="Osama Hussein" className="absolute object-contain" />
        </SlideIn>
      </section>

      <section className="flex flex-col gap-4 items-center p-16 min-h-[75dvh]">
        <h2 className="lg:text-6xl font-bold underline">What I provide</h2>
        <div className="grid lg:grid-cols-4 h-[50dvh] gap-4">
          {cards.map((card, index) => (
            <SlideIn
              direction={index % 2 === 0 ? 1 : -1}
              key={card.title}
              className={cn("bg-white/10 backdrop-blur-lg p-4 rounded-lg transition-all", {
                "hover:rotate-6": index === 0 || index === 2,
                "hover:-rotate-6 -z-10": index === 3 || index === 1,
              })}>
              <Image src={card.image} alt={card.title} height={300} width={300} />
              <h3 className="lg:text-2xl mb-4 text-center font-bold text-accent underline">{card.title}</h3>
              <p className="text-justify text-sm">{card.description}</p>
            </SlideIn>
          ))}
        </div>
      </section>
      <section>
        <HeroParallax
          products={
            projects?.map((project) => {
              return {
                title: project.title,
                link: `/projects/${project.slug}`,
                thumbnail: project.thumbnail.url,
              };
            }) || []
          }
        />
      </section>
      <section className="min-h-16"></section>
    </div>
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

"use client";
import React from "react";
import skills from "@/utils/skills";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components";

const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="relative size-12">
          {skill?.fire && (
            <motion.div
              title="Hot Skill!"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-2 -right-2 z-10 size-6">
              <Image src="/images/rocket.gif" className="object-fill" fill alt="hot skill" />
            </motion.div>
          )}
          <Image src={skill.image} className="object-contain" fill alt={skill.name} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
          <p className="text-sm text-gray-400 capitalize">{skill.section}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SkillSection = ({ title, skills }: { title: string; skills: any[] }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-4">
      <h2 className="text-2xl font-bold text-white capitalize">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const visibleSkills = skills.filter((x) => !x.hidden);
  const frontendSkills = visibleSkills.filter((skill) => skill.section === "front end");
  const backendSkills = visibleSkills.filter((skill) => skill.section === "back end");
  const toolSkills = visibleSkills.filter((skill) => skill.section === "tools");

  return (
    <Container>
      <div className="space-y-12 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Technical Skills</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">A comprehensive overview of my technical expertise and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="space-y-12">
          <SkillSection title="Frontend Development" skills={frontendSkills} />
          <SkillSection title="Backend Development" skills={backendSkills} />
          <SkillSection title="Tools & Technologies" skills={toolSkills} />
        </div>
      </div>
    </Container>
  );
}

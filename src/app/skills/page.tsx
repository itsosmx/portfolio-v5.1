"use client";
import React from "react";
import skills from "@/utils/skills";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components";

export default function Skills() {
  return (
    <Container>
      <motion.div initial="hide" animate="show" variants={variants} className="flex flex-wrap items-center w-full justify-between gap-4 mt-10">
        {skills
          .filter((x) => !x.hidden)
          .map((item) => (
            <motion.div variants={Item} key={item.name} className="flex items-center ">
              <div
                className="relative flex items-center gap-2"
                style={{
                  color: RandomColor(),
                }}>
                <div className="relative size-9 lg:size-36">
                  <Image src={item.image} className="object-fill" fill alt="skill" />
                </div>
                <p className="lg:text-9xl text-4xl font-bold">{item.name}</p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </Container>
  );
}

const variants = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Item = {
  show: {
    opacity: 1,
    x: 0,
  },
  hide: {
    opacity: 0,
    x: 100,
  },
};

const RandomColor = () => {
  const h = Math.floor(Math.random() * 360);
  const _h = Math.floor(Math.random() * 10);
  const s = 50;
  const l = 75;

  return `hsl(${h + _h}, ${s}%, ${l}%)`;
};

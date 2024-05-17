import { Button, Footer, SlideIn, VideoBackground } from "@/components";
import { TextGenerateEffect } from "@/components/shared/TextGenerate";
import { getProjects } from "@/lib/actions";
import { cn } from "@/utils";
import links from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProvideSection from "./provide-section";
import TechStackSection from "./tech-stack-section";
import WelcomeSection from "./welcome-section";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4">
      <WelcomeSection />
      <ProvideSection />
      <TechStackSection />
      <Footer />
    </main>
  );
}

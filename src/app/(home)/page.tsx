import { Footer } from "@/components";
import React from "react";
import ProvideSection from "./provide-section";
import TechStackSection from "./tech-stack-section";
import WelcomeSection from "./welcome-section";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <WelcomeSection />
      <ProvideSection />
      <TechStackSection />
      <Footer />
    </main>
  );
}


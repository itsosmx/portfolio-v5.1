"use client";
import React from "react";
import { BackButton, PageHeader, SlideIn } from "@/components";
import { sendEmail } from "@/lib/actions/emails";

export default function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      const body = { name, email, message };
      console.log(body);

      const response = await sendEmail(body);

      if (response) {
        alert("Email sent successfully");
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex justify-center items-center gap-4 flex-col w-full mobile:mb-8 h-screen">
      <BackButton  />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Thanks for taking the time to reach out.</h1>
        <p className="text-2xl tracking-widest">How can I help you today?</p>
      </div>
      <form className="flex flex-col gap-4 lg:w-1/2 w-full px-4" onSubmit={handleSubmit}>
        <div className="flex lg:flex-row flex-col">
          <SlideIn direction={-1} className="flex flex-col p-2 lg:w-1/2 w-full">
            <label htmlFor="name">Name</label>
            <input placeholder="type your name." id="name" name="name" type="text" className="rounded-lg p-4 glass-box outline-none" />
          </SlideIn>
          <SlideIn className="flex flex-col p-2 w-full">
            <label htmlFor="email">Email</label>
            <input placeholder="type your email" id="email" name="email" required type="email" className="rounded-lg p-4 glass-box" />
          </SlideIn>
        </div>
        <SlideIn axis="y" className="flex flex-col p-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="type your message..."
            id="message"
            required
            cols={30}
            rows={10}
            minLength={10}
            className="rounded-lg p-4 glass-box outline-none"
          />
        </SlideIn>
        <SlideIn axis="y" delay={0.4} className="w-full">
          <button type="submit" className="rounded-lg p-4 glass-box mx-2 text-center w-full hover:scale-105 transition-all active:scale-95">
            Submit
          </button>
        </SlideIn>
        <SlideIn axis="y" delay={0.5} className="flex gap-4 text-center items-center justify-center">
          <p>or email me directly at</p>
          <a target="_blank" href="mailto:itsosmx@gmail.com" className="text-primary underline font-bold">
            itsosmx@gmail.com
          </a>
        </SlideIn>
      </form>
    </div>
  );
}

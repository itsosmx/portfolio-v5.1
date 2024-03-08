"use client";

import React from "react";
import { BackButton, SlideIn } from "@/components";
// import { sendEmail } from "@/lib/actions/emails";
import emailjs, { init } from "@emailjs/browser";
import toast from "react-hot-toast";

init(process.env.NEXT_PUBLIC_EMAILJS_KEY as string);

export default function Contact() {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      toast.promise(
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          e.target as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_KEY as string
        ),
        {
          loading: "Sending...",
          success: "Message sent successfully!",
          error: "Failed to send message, please try again later.",
        }
      );
    } catch (error) {
      console.log("FAILED...", error);
      toast.error("Failed to send message, please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 flex-col w-full mobile:mb-8 h-screen">
      <BackButton />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Thanks for taking the time to reach out.</h1>
        <p className="text-2xl tracking-widest">How can I help you today?</p>
      </div>
      <form className="flex flex-col gap-4 lg:w-1/2 w-full px-4" onSubmit={sendEmail}>
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
        <SlideIn
          axis="y"
          delay={0.4}
          renderAs="button"
          // @ts-ignore
          type="submit"
          className="rounded-lg p-4 glass-box mx-2 text-center hover:scale-105 transition-all active:scale-95">
          Submit
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

"use client";

import React from "react";
import { Container } from "@/components";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = new FormData(e.target as HTMLFormElement);
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;

      toast.promise(
        fetch("/api/contact", {
          body: JSON.stringify({
            name,
            email,
            message,
          }),
          method: "POST",
        }),
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
    <Container className="relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Contact Info */}
        <div className="relative flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-6xl font-bold mb-6">
                Let's Create
                <span className="block text-purple-500">Something Amazing</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <a href="mailto:itsosmx@gmail.com" className="inline-flex items-center gap-2 text-lg hover:text-purple-500 transition-colors">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                  itsosmx@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex items-center justify-center p-8 lg:p-16 backdrop-blur-lg">
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={sendEmail}
            className="w-full max-w-md space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </Container>
  );
}

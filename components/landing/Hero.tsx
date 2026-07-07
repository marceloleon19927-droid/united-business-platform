"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071526] text-white">
      <Image
        src="/images/hero/hero-bg.png"
        alt="United business solutions"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071526] via-[#071526]/85 to-[#071526]/30" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
            Commercial Services • Digital Solutions • AI Automation
          </p>

          <h1 className="mb-8 text-6xl font-black leading-[1.05] md:text-8xl">
            Building Better
            <span className="block text-[#C8A14A]">Businesses.</span>
          </h1>

          <p className="mb-10 max-w-2xl text-xl leading-9 text-gray-200">
            United helps companies grow through commercial cleaning, facility
            maintenance, websites, CRM systems, digital marketing and AI-powered
            automation.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#contact"
              className="flex items-center gap-3 rounded-full bg-[#C8A14A] px-10 py-5 font-bold text-[#071526] transition hover:scale-105"
            >
              Request Proposal <ArrowRight size={20} />
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/30 px-10 py-5 font-bold text-white transition hover:bg-white hover:text-[#071526]"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              "Commercial Cleaning",
              "Facility Maintenance",
              "Business Technology",
              "AI Automation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#C8A14A]" size={22} />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#071526] px-6 pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C8A14A33,transparent_35%),radial-gradient(circle_at_bottom_left,#1E3A5F,transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
            Commercial Services • Digital Solutions • AI Automation
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            Building Better Businesses.
          </h1>

          <p className="mb-9 max-w-2xl text-lg leading-8 text-gray-300">
            We help companies grow through facility services, professional
            cleaning, websites, marketing, CRM systems and AI automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#C8A14A] px-8 py-4 font-bold text-[#071526]"
            >
              Get Free Consultation
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 px-8 py-4 font-bold text-white"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="rounded-[30px] bg-white p-8 text-[#071526]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C8A14A]">
              United Platform
            </p>

            <h3 className="mb-5 text-3xl font-black">
              Services, Technology & Growth in one place.
            </h3>

            <div className="grid gap-4">
              {[
                "Commercial Cleaning",
                "Facility Maintenance",
                "Website Development",
                "AI Automation",
                "CRM Systems",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#F8FAFC] p-4 font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
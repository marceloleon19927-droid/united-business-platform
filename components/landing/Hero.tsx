"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071526] text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C8A14A40,transparent_35%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1E3A5F,transparent_40%)]" />

      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32">

        <div className="grid w-full gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity:0,y:40 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration:.8 }}
          >

            <span className="rounded-full border border-[#C8A14A]/30 bg-[#C8A14A]/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-[#C8A14A]">

              Commercial Services • Technology • AI

            </span>

            <h1 className="mt-8 text-6xl font-black leading-[1.05] md:text-8xl">

              Elevating

              <span className="block text-[#C8A14A]">

                Commercial Excellence

              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">

              United delivers commercial cleaning,
              facility maintenance,
              digital transformation,
              business automation and AI-powered
              solutions that help organizations
              operate smarter and grow faster.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="flex items-center gap-3 rounded-full bg-[#C8A14A] px-10 py-5 font-bold text-[#071526] transition hover:scale-105"
              >
                Request Proposal

                <ArrowRight size={20} />

              </a>

              <a
                href="#services"
                className="rounded-full border border-white/20 px-10 py-5 font-semibold transition hover:bg-white hover:text-[#071526]"
              >
                Explore Services
              </a>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">

              {[
                "Commercial Cleaning",
                "Facility Maintenance",
                "Business Technology",
                "Artificial Intelligence"
              ].map((item)=>(
                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-[#C8A14A]"
                    size={22}
                  />

                  <span className="text-lg">

                    {item}

                  </span>

                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity:0,scale:.9 }}
            animate={{ opacity:1,scale:1 }}
            transition={{ duration:.9 }}
            className="relative flex items-center justify-center"
          >

            <div className="absolute h-[520px] w-[520px] rounded-full bg-[#C8A14A]/10 blur-[140px]" />

            <div className="relative w-full rounded-[40px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl">

              <div className="rounded-[30px] bg-white p-10 text-[#071526]">

                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A14A]">

                  UNITED BUSINESS PLATFORM

                </p>

                <h2 className="mt-4 text-4xl font-black">

                  Everything Your Business Needs.

                </h2>

                <p className="mt-5 leading-8 text-gray-600">

                  Commercial services,
                  CRM,
                  websites,
                  digital marketing,
                  AI automation
                  and business growth
                  in one integrated platform.

                </p>

                <div className="mt-10 grid gap-4">

                  {[
                    "Commercial Cleaning",
                    "Facility Maintenance",
                    "Web Development",
                    "Digital Marketing",
                    "CRM Platform",
                    "AI Automation"
                  ].map((service)=>(
                    <div
                      key={service}
                      className="rounded-2xl bg-[#F5F7FA] p-5 font-semibold"
                    >
                      {service}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
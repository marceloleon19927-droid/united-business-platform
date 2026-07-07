"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  const links = [
    "Home",
    "Services",
    "Industries",
    "Portfolio",
    "Contact",
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#071526]/95 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-black tracking-[0.3em] text-white">
          UNITED
        </h1>

        <nav className="hidden gap-10 lg:flex">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-semibold text-white transition hover:text-[#C8A14A]"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#C8A14A] px-7 py-3 font-bold text-[#071526] transition hover:scale-105 lg:block"
        >
          Free Consultation
        </a>

        <button
          onClick={() => setMobile(!mobile)}
          className="text-white lg:hidden"
        >
          {mobile ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {mobile && (
        <div className="border-t border-white/10 bg-[#071526] lg:hidden">
          <div className="flex flex-col p-6">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-4 text-white"
                onClick={() => setMobile(false)}
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-5 rounded-full bg-[#C8A14A] py-4 text-center font-bold text-[#071526]"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Commercial Services",
    subtitle: "Facility Services",
    description:
      "Professional commercial cleaning and facility maintenance for offices, hotels, retail stores and industrial facilities.",
    image: "/images/business/commercial.png",
  },
  {
    title: "Digital Solutions",
    subtitle: "Technology",
    description:
      "Professional websites, CRM systems, digital marketing and custom software designed to accelerate growth.",
    image: "/images/business/digital.png",
  },
  {
    title: "AI Automation",
    subtitle: "Artificial Intelligence",
    description:
      "Automate repetitive processes using Artificial Intelligence, workflows and intelligent business integrations.",
    image: "/images/business/ai.png",
  },
];

export default function BusinessSolutions() {
  return (
    <section className="bg-[#F7F9FC] py-32 px-6">
      <div className="mx-auto max-w-7xl">

        <p className="text-[#C8A14A] uppercase tracking-[0.35em] font-bold mb-4">
          Business Solutions
        </p>

        <h2 className="text-6xl font-black text-[#071526] max-w-5xl leading-tight mb-24">
          Everything your business needs under one platform.
        </h2>

        <div className="space-y-20">

          {cards.map((card, index) => (

            <div
              key={card.title}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div className="relative h-[520px] overflow-hidden rounded-[40px] shadow-2xl">

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div>

                <p className="uppercase tracking-[0.35em] text-[#C8A14A] font-bold mb-5">

                  {card.subtitle}

                </p>

                <h3 className="text-5xl font-black text-[#071526] leading-tight">

                  {card.title}

                </h3>

                <p className="mt-8 text-xl leading-9 text-gray-600">

                  {card.description}

                </p>

                <button className="mt-10 rounded-full bg-[#071526] px-9 py-5 text-white font-bold flex items-center gap-3 hover:bg-[#C8A14A] hover:text-[#071526] transition">

                  Learn More

                  <ArrowRight size={18}/>

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
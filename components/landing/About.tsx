import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "Commercial services for modern businesses",
    "Digital solutions designed to generate growth",
    "AI automation to improve efficiency",
    "Florida-based business support",
  ];

  return (
    <section className="bg-[#071526] px-6 py-32 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
            About United
          </p>

          <h2 className="mb-8 text-5xl font-black leading-tight">
            We help businesses operate better and grow smarter.
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            United combines commercial cleaning, facility maintenance, digital
            transformation and AI automation into one modern business solutions
            platform.
          </p>
        </div>

        <div className="rounded-[35px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl">
          <div className="space-y-6">
            {points.map((item) => (
              <div key={item} className="flex gap-4">
                <CheckCircle2 className="text-[#C8A14A]" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
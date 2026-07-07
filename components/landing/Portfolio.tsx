import Image from "next/image";

const projects = [
  {
    title: "Commercial Cleaning",
    image: "/images/portfolio/cleaning.jpeg",
    category: "Facility Services",
  },
  {
    title: "Facility Maintenance",
    image: "/images/portfolio/maintenance.jpeg",
    category: "Maintenance",
  },
  {
    title: "Website Development",
    image: "/images/portfolio/web.jpeg",
    category: "Digital Solutions",
  },
  {
    title: "AI Automation",
    image: "/images/portfolio/ai.jpeg",
    category: "Artificial Intelligence",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#F8FAFC] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
          Portfolio
        </p>

        <h2 className="mb-16 max-w-5xl text-5xl font-black leading-tight text-[#071526]">
          Solutions designed to elevate businesses.
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A14A]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#071526]">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Premium business solution created for modern companies.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
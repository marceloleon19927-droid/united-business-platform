import { Building2, Code2, Bot, Megaphone, Wrench, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Commercial Cleaning",
      text: "Professional cleaning solutions for offices, hotels, retail spaces and commercial facilities.",
    },
    {
      icon: Wrench,
      title: "Facility Maintenance",
      text: "Reliable maintenance support to keep your business operating safely and efficiently.",
    },
    {
      icon: Code2,
      title: "Website Development",
      text: "Modern websites designed to strengthen your brand and generate more business opportunities.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      text: "SEO, social media, branding and advertising strategies to help your company grow online.",
    },
    {
      icon: Bot,
      title: "AI Automation",
      text: "Smart automation systems that save time, improve communication and increase productivity.",
    },
    {
      icon: ShieldCheck,
      title: "Business Support",
      text: "Integrated solutions for companies that need reliability, technology and long-term support.",
    },
  ];

  return (
    <section id="services" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
          Our Services
        </p>

        <h2 className="mb-16 max-w-4xl text-5xl font-black leading-tight text-[#071526]">
          Complete business solutions built for modern companies.
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C8A14A]/15 text-[#C8A14A] transition group-hover:bg-[#071526]">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-black text-[#071526]">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-600">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
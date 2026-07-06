export default function Services() {
  const services = [
    {
      title: "Commercial Services",
      text: "Professional cleaning, janitorial services, facility maintenance and property support.",
    },
    {
      title: "Digital Solutions",
      text: "Websites, branding, social media, SEO, CRM systems and business technology.",
    },
    {
      title: "AI Automation",
      text: "Smart automation tools that help companies save time and improve operations.",
    },
  ];

  return (
    <section className="bg-white px-10 py-24 text-[#0B1F3A]">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A14A]">
          What We Do
        </p>

        <h2 className="mb-12 max-w-3xl text-4xl font-bold">
          Integrated solutions designed to help businesses operate better and grow faster.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
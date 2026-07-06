export default function Services() {
  const services = [
    {
      title: "Commercial Cleaning",
      description:
        "Professional cleaning services for offices, hotels, medical facilities and commercial buildings.",
    },
    {
      title: "Facility Maintenance",
      description:
        "Preventive and corrective maintenance to keep your business operating efficiently.",
    },
    {
      title: "Website Development",
      description:
        "Modern, responsive websites designed to increase your online presence and generate leads.",
    },
    {
      title: "Digital Marketing",
      description:
        "SEO, Google Ads, Meta Ads, branding and social media management.",
    },
    {
      title: "CRM Systems",
      description:
        "Business management systems that organize customers, sales and operations.",
    },
    {
      title: "AI Automation",
      description:
        "Artificial intelligence solutions that automate repetitive tasks and improve productivity.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
          OUR SERVICES
        </p>

        <h2 className="mb-16 max-w-4xl text-5xl font-black text-[#071526]">
          Integrated business solutions designed for growth.
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 h-14 w-14 rounded-2xl bg-[#C8A14A]/15"></div>

              <h3 className="mb-4 text-2xl font-bold text-[#071526]">
                {service.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
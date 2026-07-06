export default function WhyChoose() {
  const features = [
    {
      title: "Professional Team",
      text: "Experienced professionals committed to quality and excellence.",
    },
    {
      title: "Technology Driven",
      text: "We integrate AI, CRM systems and automation into every project.",
    },
    {
      title: "Fast Response",
      text: "Quick communication and efficient project execution.",
    },
    {
      title: "Trusted Partner",
      text: "Focused on long-term relationships and measurable business results.",
    },
  ];

  return (
    <section className="bg-white py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <p className="uppercase tracking-[0.35em] text-[#C8A14A] font-bold mb-4">
          WHY UNITED
        </p>

        <h2 className="text-5xl font-black text-[#071526] max-w-4xl mb-16">
          More than a service provider. A strategic partner for your business.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 p-10 transition hover:shadow-xl hover:-translate-y-2"
            >
              <div className="mb-6 h-4 w-20 rounded-full bg-[#C8A14A]" />

              <h3 className="text-2xl font-bold text-[#071526] mb-4">
                {item.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
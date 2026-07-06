export default function Industries() {
  const industries = [
    "Hotels",
    "Restaurants",
    "Medical Offices",
    "Corporate Offices",
    "Construction",
    "Property Management",
    "Retail",
    "Logistics",
  ];

  return (
    <section className="bg-white px-10 py-24 text-[#0B1F3A]">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A14A]">
          Industries We Serve
        </p>

        <h2 className="mb-12 max-w-3xl text-4xl font-bold">
          Built for companies that need reliable support and modern growth solutions.
        </h2>

        <div className="grid gap-5 md:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-gray-200 bg-[#F5F7FA] p-6 font-semibold transition hover:-translate-y-1 hover:border-[#C8A14A]"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
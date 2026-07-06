export default function Industries() {
  const industries = [
    "Hotels",
    "Restaurants",
    "Medical Offices",
    "Corporate Offices",
    "Property Management",
    "Construction",
    "Retail Stores",
    "Logistics",
  ];

  return (
    <section id="industries" className="bg-[#F8FAFC] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
          INDUSTRIES
        </p>

        <h2 className="mb-14 max-w-4xl text-5xl font-black text-[#071526]">
          Built for companies that need reliability, image and growth.
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {industries.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center font-bold text-[#071526] shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
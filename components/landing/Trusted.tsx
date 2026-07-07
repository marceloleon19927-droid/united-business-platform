export default function Trusted() {
  const items = [
    "Hotels",
    "Restaurants",
    "Commercial Offices",
    "Medical Facilities",
    "Property Management",
    "Retail Stores",
  ];

  return (
    <section className="border-y border-white/10 bg-[#071526] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
          Trusted by businesses across multiple industries
        </p>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm font-bold text-gray-300 backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
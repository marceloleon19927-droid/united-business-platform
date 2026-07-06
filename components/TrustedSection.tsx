export default function TrustedSection() {
  const items = [
    "Hotels",
    "Restaurants",
    "Property Management",
    "Commercial Offices",
    "Healthcare",
    "Construction",
  ];

  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="mx-auto max-w-7xl px-10">

        <p className="text-center uppercase tracking-[0.35em] text-[#C8A14A] font-semibold">
          Trusted Across Multiple Industries
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-6">

          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="font-bold text-[#0B1F3A]">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
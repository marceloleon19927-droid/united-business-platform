export default function Portfolio() {
  const projects = [
    "Corporate Website",
    "Business CRM",
    "AI Automation",
    "Social Media Strategy",
  ];

  return (
    <section className="bg-[#F8FAFC] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
          PORTFOLIO
        </p>

        <h2 className="mb-14 max-w-4xl text-5xl font-black text-[#071526]">
          Digital work designed to help businesses look professional and grow.
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {projects.map((item) => (
            <div
              key={item}
              className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 h-40 rounded-3xl bg-gradient-to-br from-[#071526] to-[#C8A14A]" />
              <h3 className="text-xl font-black text-[#071526]">{item}</h3>
              <p className="mt-3 text-gray-600">
                Premium business solution created for modern companies.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Stats() {
  const stats = [
    { number: "24/7", label: "Business Support" },
    { number: "360°", label: "Business Solutions" },
    { number: "AI", label: "Automation Ready" },
    { number: "USA", label: "Florida Based" },
  ];

  return (
    <section className="bg-[#071526] px-6 pb-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-[#C8A14A]"
          >
            <h3 className="text-5xl font-black text-[#C8A14A]">
              {item.number}
            </h3>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-300">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
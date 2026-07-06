export default function Stats() {
  const stats = [
    { number: "24/7", label: "Business Support" },
    { number: "Florida", label: "United States" },
    { number: "AI", label: "Automation Ready" },
    { number: "360°", label: "Business Solutions" },
  ];

  return (
    <section className="bg-[#071526] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
          >
            <h3 className="text-4xl font-black text-[#C8A14A]">
              {item.number}
            </h3>
            <p className="mt-3 text-sm text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
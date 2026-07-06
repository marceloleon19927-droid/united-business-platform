export default function Stats() {
  const stats = [
    { number: "24/7", title: "Business Support" },
    { number: "100%", title: "Commitment" },
    { number: "USA", title: "Based in Florida" },
    { number: "AI", title: "Business Automation" },
  ];

  return (
    <section className="bg-[#08172C] py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-10 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:border-[#C8A14A]"
          >
            <h3 className="mb-2 text-5xl font-bold text-[#C8A14A]">
              {item.number}
            </h3>

            <p className="text-gray-300">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
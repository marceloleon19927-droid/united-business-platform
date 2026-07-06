export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#0B1F3A] px-10 text-white">

      <div className="absolute right-[-120px] top-32 h-[500px] w-[500px] rounded-full bg-[#C8A14A]/20 blur-3xl" />

      <div className="relative z-10 max-w-4xl">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C8A14A]">
          Commercial Services • Digital Solutions • AI Automation
        </p>

        <h1 className="mb-6 text-6xl font-bold leading-tight">
          Building Better Businesses.
        </h1>

        <p className="mb-10 max-w-2xl text-xl text-gray-300">
          We help companies grow through commercial cleaning, facility
          maintenance, websites, marketing, artificial intelligence and business
          technology.
        </p>

        <div className="flex gap-5">
          <button className="rounded-full bg-[#C8A14A] px-8 py-4 font-semibold text-[#0B1F3A] transition hover:scale-105">
            Request a Quote
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-[#0B1F3A]">
            Explore Services
          </button>
        </div>

      </div>

    </section>
  );
}
export default function BusinessAssessment() {
  return (
    <section className="bg-[#0B1F3A] py-28 text-white">

      <div className="mx-auto max-w-7xl px-10">

        <div className="rounded-[40px] bg-gradient-to-r from-[#102B4E] to-[#0B1F3A] p-16 shadow-2xl">

          <p className="mb-3 uppercase tracking-[0.3em] text-[#C8A14A]">
            FREE CONSULTATION
          </p>

          <h2 className="mb-8 text-5xl font-bold">
            Get Your Free Business Growth Assessment
          </h2>

          <p className="mb-10 max-w-3xl text-xl text-gray-300">
            Discover how United can improve your business through commercial
            services, digital transformation, automation and AI solutions.
          </p>

          <div className="grid gap-6 md:grid-cols-2">

            <input
              className="rounded-xl bg-white p-4 text-black outline-none"
              placeholder="Company Name"
            />

            <input
              className="rounded-xl bg-white p-4 text-black outline-none"
              placeholder="Business Website"
            />

            <input
              className="rounded-xl bg-white p-4 text-black outline-none"
              placeholder="Business Email"
            />

            <input
              className="rounded-xl bg-white p-4 text-black outline-none"
              placeholder="Phone Number"
            />

          </div>

          <button className="mt-8 rounded-full bg-[#C8A14A] px-10 py-4 font-bold text-[#0B1F3A] transition hover:scale-105">
            Request Free Assessment
          </button>

        </div>

      </div>

    </section>
  );
}
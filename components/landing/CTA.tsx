export default function CTA() {
  return (
    <section className="bg-[#071526] px-6 py-28">
      <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-r from-[#0B1F3A] to-[#102B52] p-16 text-center shadow-2xl">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
          READY TO GROW?
        </p>

        <h2 className="mx-auto mb-6 max-w-4xl text-5xl font-black text-white">
          Let's build something extraordinary together.
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-300">
          From commercial cleaning and facility maintenance to websites,
          CRM systems and AI automation, United provides complete business
          solutions for modern companies.
        </p>

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="#contact"
            className="rounded-full bg-[#C8A14A] px-10 py-5 font-bold text-[#071526] transition hover:scale-105"
          >
            Request Free Consultation
          </a>

          <a
            href="#services"
            className="rounded-full border border-white/20 px-10 py-5 font-bold text-white transition hover:bg-white hover:text-[#071526]"
          >
            View Services
          </a>

        </div>

      </div>
    </section>
  );
}
export default function WhyUnited() {
  return (
    <section className="bg-[#0B1F3A] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-10 lg:grid-cols-2">

        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A14A]">
            WHY UNITED
          </p>

          <h2 className="mb-8 text-5xl font-bold">
            More than a service provider.
          </h2>

          <p className="mb-6 text-lg text-gray-300">
            We become your strategic business partner by combining commercial
            services, digital transformation and AI-powered solutions.
          </p>

          <button className="rounded-full bg-[#C8A14A] px-8 py-4 font-semibold text-[#0B1F3A] transition hover:scale-105">
            Learn More
          </button>
        </div>

        <div className="grid gap-6">

          <div className="rounded-3xl bg-white/5 p-8">
            <h3 className="mb-3 text-2xl font-bold">
              Commercial Excellence
            </h3>

            <p className="text-gray-300">
              Professional cleaning, maintenance and facility support.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-8">
            <h3 className="mb-3 text-2xl font-bold">
              Digital Innovation
            </h3>

            <p className="text-gray-300">
              Websites, branding, CRM systems and digital marketing.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-8">
            <h3 className="mb-3 text-2xl font-bold">
              Artificial Intelligence
            </h3>

            <p className="text-gray-300">
              Automation, AI assistants and intelligent business workflows.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
export default function Contact() {
  return (
    <section className="bg-white px-10 py-24 text-[#0B1F3A]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A14A]">
            Contact United
          </p>

          <h2 className="mb-6 text-5xl font-bold">
            Let’s talk about your business.
          </h2>

          <p className="mb-8 text-lg text-gray-600">
            Whether you need commercial services, digital solutions or AI automation,
            our team is ready to help.
          </p>

          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> info@unitedcleanmaintenance.com</p>
            <p><strong>Phone:</strong> +1 (448) 232-4305</p>
            <p><strong>Location:</strong> Florida, United States</p>
          </div>
        </div>

        <form className="rounded-[32px] border border-gray-200 bg-[#F8FAFC] p-8 shadow-sm">
          <input className="mb-4 w-full rounded-xl border p-4" placeholder="Full Name" />
          <input className="mb-4 w-full rounded-xl border p-4" placeholder="Company Name" />
          <input className="mb-4 w-full rounded-xl border p-4" placeholder="Email Address" />
          <textarea className="mb-4 h-36 w-full rounded-xl border p-4" placeholder="How can we help?" />

          <button className="w-full rounded-full bg-[#C8A14A] px-8 py-4 font-bold text-[#0B1F3A]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
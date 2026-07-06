export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        <div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
            CONTACT US
          </p>

          <h2 className="mb-6 text-5xl font-black text-[#071526]">
            Let's discuss your next project.
          </h2>

          <p className="mb-10 text-lg leading-8 text-gray-600">
            Whether you need commercial cleaning, facility maintenance,
            web development, CRM implementation or AI automation,
            our team is ready to help your business grow.
          </p>

          <div className="space-y-6">

            <div>
              <h3 className="font-bold text-[#071526]">
                Email
              </h3>

              <p className="text-gray-600">
                info@unitedbusinesssolutions.com
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#071526]">
                Phone
              </h3>

              <p className="text-gray-600">
                +1 (448) 232-4305
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#071526]">
                Location
              </h3>

              <p className="text-gray-600">
                Panama City Beach, Florida
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-[35px] border border-gray-200 bg-white p-10 shadow-xl">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-2xl border p-4"
            />

            <input
              type="text"
              placeholder="Company"
              className="w-full rounded-2xl border p-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border p-4"
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full rounded-2xl border p-4"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-2xl border p-4"
            />

            <button
              className="w-full rounded-full bg-[#C8A14A] py-4 font-bold text-[#071526]"
            >
              Send Request
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
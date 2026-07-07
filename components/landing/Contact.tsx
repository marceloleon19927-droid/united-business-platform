import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#071526] px-6 py-32 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#C8A14A]">
            Contact United
          </p>

          <h2 className="mb-6 text-5xl font-black leading-tight">
            Let’s build something great together.
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-8 text-gray-300">
            Request a free consultation and discover how United can help your
            business grow through commercial services, digital solutions and AI
            automation.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="text-[#C8A14A]" />
              <span>info@unitedcleanmaintenance.com</span>
            </div>

            <div className="flex gap-4">
              <Phone className="text-[#C8A14A]" />
              <span>+1 (448) 232-4305</span>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-[#C8A14A]" />
              <span>Panama City Beach, Florida</span>
            </div>
          </div>
        </div>

        <form className="rounded-[35px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <div className="grid gap-5">
            <input className="rounded-2xl border border-white/10 bg-white p-4 text-[#071526]" placeholder="Full Name" />
            <input className="rounded-2xl border border-white/10 bg-white p-4 text-[#071526]" placeholder="Company Name" />
            <input className="rounded-2xl border border-white/10 bg-white p-4 text-[#071526]" placeholder="Business Email" />
            <input className="rounded-2xl border border-white/10 bg-white p-4 text-[#071526]" placeholder="Phone Number" />

            <select className="rounded-2xl border border-white/10 bg-white p-4 text-[#071526]">
              <option>Service Needed</option>
              <option>Commercial Cleaning</option>
              <option>Facility Maintenance</option>
              <option>Website Development</option>
              <option>Digital Marketing</option>
              <option>AI Automation</option>
            </select>

            <textarea
              rows={5}
              className="rounded-2xl border border-white/10 bg-white p-4 text-[#071526]"
              placeholder="Tell us about your project..."
            />

            <button className="flex items-center justify-center gap-3 rounded-full bg-[#C8A14A] py-4 font-black text-[#071526]">
              Send Request <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
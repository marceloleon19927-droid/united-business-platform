import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#06111E] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4">
        <div>
          <h2 className="text-3xl font-black tracking-widest">UNITED</h2>

          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#C8A14A]">
            Business Solutions
          </p>

          <p className="mt-6 leading-8 text-gray-400">
            Helping businesses grow through commercial services, digital
            transformation and artificial intelligence.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="rounded-xl bg-white/10 p-3">
              <FaFacebookF />
            </div>

            <div className="rounded-xl bg-white/10 p-3">
              <FaInstagram />
            </div>

            <div className="rounded-xl bg-white/10 p-3">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-bold">Services</h3>

          <ul className="space-y-4 text-gray-400">
            <li>Commercial Cleaning</li>
            <li>Facility Maintenance</li>
            <li>Website Development</li>
            <li>Digital Marketing</li>
            <li>CRM Systems</li>
            <li>AI Automation</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-bold">Company</h3>

          <ul className="space-y-4 text-gray-400">
            <li>About</li>
            <li>Industries</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-bold">Contact</h3>

          <div className="space-y-6">
            <div className="flex gap-3">
              <FiMail className="text-[#C8A14A]" size={20} />
              <span className="text-gray-400">
                info@unitedcleanmaintenance.com
              </span>
            </div>

            <div className="flex gap-3">
              <FiPhone className="text-[#C8A14A]" size={20} />
              <span className="text-gray-400">+1 (448) 232-4305</span>
            </div>

            <div className="flex gap-3">
              <FiMapPin className="text-[#C8A14A]" size={20} />
              <span className="text-gray-400">
                Panama City Beach, Florida
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 UNITED Business Solutions. All rights reserved.
      </div>
    </footer>
  );
}
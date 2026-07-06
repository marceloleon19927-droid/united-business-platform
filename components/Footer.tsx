export default function Footer() {
  return (
    <footer className="bg-[#08172C] px-10 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-3xl font-bold tracking-widest">UNITED</h2>
          <p className="mt-2 text-[#C8A14A]">Business Solutions</p>
          <p className="mt-5 text-sm text-gray-400">
            Commercial services, digital solutions and AI automation for modern businesses.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Company</h3>
          <p className="text-sm text-gray-400">About</p>
          <p className="text-sm text-gray-400">Industries</p>
          <p className="text-sm text-gray-400">Portfolio</p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Services</h3>
          <p className="text-sm text-gray-400">Commercial Cleaning</p>
          <p className="text-sm text-gray-400">Digital Solutions</p>
          <p className="text-sm text-gray-400">AI Automation</p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Contact</h3>
          <p className="text-sm text-gray-400">Florida, United States</p>
          <p className="text-sm text-gray-400">info@unitedcleanmaintenance.com</p>
          <p className="text-sm text-gray-400">+1 (448) 232-4305</p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-gray-500">
        © 2026 United Clean & Maintenance. All rights reserved.
      </div>
    </footer>
  );
}
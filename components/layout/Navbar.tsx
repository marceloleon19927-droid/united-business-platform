export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#071526]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <h2 className="text-2xl font-black tracking-widest text-white">
            UNITED
          </h2>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A14A]">
            Business Solutions
          </p>
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#industries" className="hover:text-white">Industries</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#C8A14A] px-5 py-3 text-sm font-bold text-[#071526]"
        >
          Request a Quote
        </a>
      </div>
    </header>
  );
}

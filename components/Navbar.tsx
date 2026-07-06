export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-6">
      <div>
        <h1 className="text-2xl font-bold tracking-widest">UNITED</h1>
        <p className="text-xs text-[#C8A14A]">Business Solutions</p>
      </div>

      <nav className="hidden gap-8 text-sm md:flex">
        <a>About</a>
        <a>Services</a>
        <a>Digital Solutions</a>
        <a>Industries</a>
        <a>Contact</a>
      </nav>

      <button className="rounded-full bg-[#C8A14A] px-5 py-2 text-sm font-semibold text-[#0B1F3A]">
        Request a Quote
      </button>
    </header>
  );
}
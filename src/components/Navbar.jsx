import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
          >
            TK
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="rounded-xl px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/Resume/Tejas_Khobragade_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/50"
          >
            Resume
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/Resume/Tejas_Khobragade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-center font-semibold text-white"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
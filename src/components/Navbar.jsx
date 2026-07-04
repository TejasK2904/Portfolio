function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-blue-400 tracking-wide"
          >
            TK
          </a>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 text-white/80 font-medium">

            <li>
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#experience" className="hover:text-blue-400 transition">
                Experience
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-blue-400 transition">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>

          </ul>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <div className="text-2xl font-bold text-white tracking-wide">
            TK
          </div>

          {/* Links */}
          <ul className="hidden md:flex gap-8 text-white/80 font-medium">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Skills</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
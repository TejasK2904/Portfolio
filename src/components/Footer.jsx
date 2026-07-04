function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-3xl font-bold text-blue-400">
          Tejas Khobragade
        </h3>

        <p className="text-gray-400 mt-3">
          Data Analyst | Power BI | SQL | Python | Excel
        </p>

        {/* Quick Links */}

        <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-400">

          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-blue-400 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>

        {/* Back to Top */}

        <div className="mt-8">

          <a
            href="#home"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            ↑ Back to Top
          </a>

        </div>

        <p className="text-gray-500 mt-10">
          © 2026 Tejas Khobragade. All Rights Reserved.
        </p>

        <p className="text-gray-600 text-sm mt-2">
          Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;
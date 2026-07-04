import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center pt-28 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Tejas
            <br />
            <span className="text-blue-400">Khobragade</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mt-6 text-white">
            Data Analyst
          </h2>

          <p className="text-2xl text-blue-400 mt-5 font-medium">
            Turning Data into Actionable Business Insights
          </p>

          <p className="text-gray-400 leading-8 text-lg mt-8 max-w-2xl">
            Passionate Data Analyst with experience in SQL, Power BI, Python,
            and Advanced Excel. I transform raw datasets into meaningful
            insights through dashboards, reports, and data-driven solutions
            that help businesses make smarter decisions.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["SQL", "Power BI", "Python", "Advanced Excel"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/40 text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/Resume/Tejas_Khobragade_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 px-7 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/TejasK2904"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 px-7 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tejas-tk29"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 px-7 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-400">100K+</h3>
              <p className="text-gray-400 mt-2 text-sm">Rows Processed</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-400">10+</h3>
              <p className="text-gray-400 mt-2 text-sm">Business KPIs</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-400">3+</h3>
              <p className="text-gray-400 mt-2 text-sm">Projects</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-400">2</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Virtual Internships
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
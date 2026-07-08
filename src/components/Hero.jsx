import { motion } from "framer-motion";

function Hero() {
  const skills = [
    "SQL",
    "Power BI",
    "Python",
    "Advanced Excel",
    "Tableau",
    "Data Visualization",
  ];

  const stats = [
    {
      number: "100K+",
      label: "Rows Analyzed",
    },
    {
      number: "5+",
      label: "Dashboards",
    },
    {
      number: "3+",
      label: "Projects",
    },
    {
      number: "2",
      label: "Virtual Internships",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 px-6 pt-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />

        <div className="absolute right-[-150px] bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />

      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="leading-none"
          >

            <span className="block text-6xl font-black text-white md:text-8xl">
              TEJAS
            </span>

            <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
              KHOBRAGADE
            </span>

          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 text-2xl font-semibold text-white md:text-4xl"
          >
            Data Analyst
            <span className="mx-3 text-blue-400">
              •
            </span>
            Business Intelligence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl"
          >
            Transforming complex data into
            <span className="font-semibold text-blue-400">
              {" "}
              meaningful business insights{" "}
            </span>
            using SQL, Power BI, Python, Advanced Excel and modern
            analytics tools to help businesses make smarter,
            data-driven decisions.
          </motion.p>
                    {/* Skills */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-blue-500/30 bg-white/5 px-5 py-3 text-sm font-medium text-blue-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <a
              href="/Resume/Tejas_Khobragade_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/TejasK2904"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tejas-tk29"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
            >
              LinkedIn
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-blue-500 px-8 py-4 font-semibold text-blue-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <h3 className="text-4xl font-extrabold text-blue-400">
                  {item.number}
                </h3>

                <p className="mt-3 text-sm tracking-wide text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
                    {/* Scroll Indicator */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16 flex justify-center md:justify-start"
          >
            <a
              href="#about"
              className="group flex flex-col items-center text-slate-400 transition hover:text-blue-400"
            >
              <span className="mb-3 text-sm tracking-[0.3em] uppercase">
                Scroll
              </span>

              <div className="flex h-14 w-8 justify-center rounded-full border border-slate-600">
                <motion.div
                  animate={{
                    y: [4, 22, 4],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="mt-2 h-3 w-3 rounded-full bg-blue-400"
                />
              </div>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
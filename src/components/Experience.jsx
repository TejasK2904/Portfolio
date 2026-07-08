import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "Data Analyst",
      company: "Koderz Technology Pvt. Ltd.",
      duration: "Oct 2025 – Present",
      color: "from-blue-600 to-cyan-500",
      responsibilities: [
        "Cleaned and transformed datasets containing over 100,000 records using SQL, Python and Advanced Excel.",
        "Developed interactive Power BI dashboards to monitor KPIs and improve business reporting.",
        "Optimized complex SQL queries for faster reporting and efficient data retrieval.",
        "Designed and maintained normalized MySQL databases with relational models.",
        "Created Job Portal Database Management System consisting of 15 relational tables.",
        "Designed ER Diagrams and database schemas following normalization principles.",
        "Collaborated with stakeholders to transform business requirements into analytical dashboards."
      ]
    },
    {
      role: "Data Analytics Intern",
      company: "MetaZen Digital Pvt. Ltd.",
      duration: "Mar 2024 – Dec 2024",
      color: "from-indigo-600 to-blue-500",
      responsibilities: [
        "Designed Tableau dashboards for logistics and transportation analytics.",
        "Performed data cleaning, validation and transformation using SQL and Excel.",
        "Built forecasting dashboards using Tableau trend lines and parameters.",
        "Automated recurring reports to improve reporting efficiency.",
        "Analyzed business datasets to identify trends and support strategic decisions."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-28 px-6"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-150px] top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute right-[-150px] bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Experience
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Professional
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            My professional journey reflects practical experience in SQL,
            Power BI, Tableau, Python, Business Intelligence and database
            development while delivering data-driven solutions for real
            business problems.
          </p>

        </motion.div>

        <div className="relative mt-24">

          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-500 lg:block"></div>
                    {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative mb-16 lg:pl-20"
            >
              {/* Timeline Dot */}

              <div
                className={`absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${exp.color} text-xl font-bold text-white shadow-xl lg:flex`}
              >
                💼
              </div>

              {/* Card */}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-500/10">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                  <div>

                    <span
                      className={`inline-block rounded-full bg-gradient-to-r ${exp.color} px-5 py-2 text-sm font-semibold text-white`}
                    >
                      {exp.role}
                    </span>

                    <h3 className="mt-5 text-3xl font-bold text-white">
                      {exp.company}
                    </h3>

                  </div>

                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-6 py-4 text-center">

                    <p className="text-sm uppercase tracking-widest text-blue-300">
                      Duration
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {exp.duration}
                    </p>

                  </div>

                </div>

                <div className="mt-10 grid gap-5">
                  {exp.responsibilities.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-2xl border border-white/5 bg-slate-900/40 p-5 transition hover:border-blue-500/30"
                    >
                      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                        ✓
                      </div>

                      <p className="leading-7 text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
                  </div>

        {/* Bottom Summary */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-24"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-950/90 to-slate-900/80 p-10 backdrop-blur-xl">

            <h3 className="text-center text-3xl font-bold text-white">
              Career Highlights
            </h3>

            <div className="mt-12 grid gap-8 md:grid-cols-4">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  📊
                </div>

                <h4 className="mt-5 text-4xl font-black text-blue-400">
                  100K+
                </h4>

                <p className="mt-3 text-slate-300">
                  Records Processed
                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  📈
                </div>

                <h4 className="mt-5 text-4xl font-black text-blue-400">
                  10+
                </h4>

                <p className="mt-3 text-slate-300">
                  KPI Dashboards
                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  🗄️
                </div>

                <h4 className="mt-5 text-4xl font-black text-blue-400">
                  15
                </h4>

                <p className="mt-3 text-slate-300">
                  Database Tables Designed
                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  🚀
                </div>

                <h4 className="mt-5 text-4xl font-black text-blue-400">
                  3+
                </h4>

                <p className="mt-3 text-slate-300">
                  Analytics Projects
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;
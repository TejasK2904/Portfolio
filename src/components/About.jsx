import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      icon: "💼",
      title: "Experience",
      value: "Data Analyst",
      desc: "Koderz Technology Pvt. Ltd.",
    },
    {
      icon: "📊",
      title: "Projects",
      value: "3+",
      desc: "Analytics & SQL Projects",
    },
    {
      icon: "📈",
      title: "Dashboards",
      value: "10+",
      desc: "Interactive Power BI Reports",
    },
    {
      icon: "🏆",
      title: "Internships",
      value: "2",
      desc: "Accenture & PwC",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900 py-28 px-6"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="mb-4 text-center uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold">
            About Me
          </p>

          <h2 className="text-center text-5xl md:text-6xl font-black text-white">
            Turning Data Into
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Business Value
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-slate-300">
            Passionate Data Analyst with hands-on experience in SQL,
            Power BI, Python and Advanced Excel. I specialize in
            transforming raw datasets into meaningful dashboards,
            business reports and actionable insights that help
            organizations make smarter decisions.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
                  {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold text-white">
              Professional Summary
            </h3>

            <div className="mt-8 space-y-6 text-slate-300 leading-8">

              <p>
                I am a passionate <span className="text-blue-400 font-semibold">
                Data Analyst</span> with practical experience in
                SQL, Power BI, Python, Advanced Excel and Business
                Intelligence. My passion lies in transforming complex
                datasets into meaningful business insights through
                interactive dashboards and analytical reporting.
              </p>

              <p>
                During my professional journey at
                <span className="text-blue-400 font-semibold">
                  {" "}Koderz Technology Pvt. Ltd.
                </span>,
                I have worked on data cleaning, validation,
                SQL query optimization, dashboard development,
                report automation and KPI tracking to improve
                operational efficiency.
              </p>

              <p>
                I enjoy solving real-world business problems by
                combining analytical thinking with technical skills.
                My goal is to help organizations make smarter,
                faster and more informed decisions using data.
              </p>

            </div>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                <h4 className="text-4xl font-black text-blue-400">
                  100K+
                </h4>

                <p className="mt-2 text-slate-300">
                  Records Analyzed
                </p>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                <h4 className="text-4xl font-black text-blue-400">
                  10+
                </h4>

                <p className="mt-2 text-slate-300">
                  KPI Dashboards
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >

            {highlights.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-500/10"
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl">
                    {item.icon}
                  </div>

                  <div>

                    <h4 className="text-2xl font-bold text-white">
                      {item.value}
                    </h4>

                    <p className="mt-1 text-blue-400 font-medium">
                      {item.title}
                    </p>

                    <p className="mt-2 text-slate-400 leading-7">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>

            ))}  
                      </motion.div>

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20"
        >

          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-950/80 via-slate-900/80 to-slate-950/80 p-10 backdrop-blur-xl">

            <h3 className="text-center text-3xl font-bold text-white">
              Why Hire Me?
            </h3>

            <div className="mt-10 grid gap-8 md:grid-cols-3">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  📊
                </div>

                <h4 className="mt-5 text-xl font-bold text-white">
                  Data Analytics
                </h4>

                <p className="mt-3 leading-7 text-slate-400">
                  Experienced in SQL, Python, Power BI and Excel for
                  transforming raw data into actionable business insights.
                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  📈
                </div>

                <h4 className="mt-5 text-xl font-bold text-white">
                  Business Intelligence
                </h4>

                <p className="mt-3 leading-7 text-slate-400">
                  Skilled in creating interactive dashboards, KPI reports
                  and automated reporting solutions for business users.
                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  🚀
                </div>

                <h4 className="mt-5 text-xl font-bold text-white">
                  Problem Solver
                </h4>

                <p className="mt-3 leading-7 text-slate-400">
                  Passionate about solving business challenges using
                  analytical thinking, data visualization and continuous
                  learning.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;
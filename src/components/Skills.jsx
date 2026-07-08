import {
  Database,
  BarChart3,
  FileSpreadsheet,
  Code2,
  Brain,
  PieChart,
  Table2,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      icon: <Database size={42} />,
      title: "SQL",
      level: "95%",
      description:
        "Complex Queries, Joins, Views, Stored Procedures and Query Optimization.",
    },
    {
      icon: <BarChart3 size={42} />,
      title: "Power BI",
      level: "92%",
      description:
        "Interactive Dashboards, DAX, Power Query and KPI Reporting.",
    },
    {
      icon: <Code2 size={42} />,
      title: "Python",
      level: "88%",
      description:
        "Pandas, NumPy, Data Cleaning, Automation and Analytics.",
    },
    {
      icon: <FileSpreadsheet size={42} />,
      title: "Advanced Excel",
      level: "95%",
      description:
        "Pivot Tables, XLOOKUP, Dashboards and MIS Reporting.",
    },
    {
      icon: <PieChart size={42} />,
      title: "Tableau",
      level: "85%",
      description:
        "Interactive Dashboards and Data Visualization.",
    },
    {
      icon: <Table2 size={42} />,
      title: "Database Design",
      level: "90%",
      description:
        "ER Diagrams, Normalization and Relational Database Design.",
    },
    {
      icon: <Brain size={42} />,
      title: "Problem Solving",
      level: "93%",
      description:
        "Analytical Thinking and Business Decision Making.",
    },
    {
      icon: <LineChart size={42} />,
      title: "Data Analytics",
      level: "94%",
      description:
        "Data Cleaning, Reporting and Business Insights.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-28 px-6"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold">
            Skills
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Technical
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-slate-300">
            Technologies, tools and analytical skills I use to build
            professional business intelligence solutions.
          </p>

        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:bg-blue-500/10"
            >

              {/* Icon */}

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-110">

                {skill.icon}

              </div>

              {/* Title */}

              <h3 className="mt-7 text-2xl font-bold text-white">
                {skill.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-8 text-slate-300">
                {skill.description}
              </p>

              {/* Progress */}

              <div className="mt-8">

                <div className="mb-3 flex items-center justify-between">

                  <span className="text-sm text-slate-300">
                    Proficiency
                  </span>

                  <span className="font-semibold text-blue-400">
                    {skill.level}
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
                  />

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        ></motion.div>
        <motion.div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-950/90 to-slate-900/80 p-10 backdrop-blur-xl">

            <h3 className="text-center text-3xl font-bold text-white">
              Core Competencies
            </h3>

            <div className="mt-12 grid gap-8 md:grid-cols-4">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  📊
                </div>

                <h4 className="mt-5 text-xl font-bold text-blue-400">
                  Data Analysis
                </h4>

                <p className="mt-3 leading-7 text-slate-300">
                  Cleaning, transforming and analyzing business data to
                  generate meaningful insights.
                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  📈
                </div>

                <h4 className="mt-5 text-xl font-bold text-blue-400">
                  Dashboarding
                </h4>

                <p className="mt-3 leading-7 text-slate-300">
                  Building interactive Power BI and Tableau dashboards with
                  KPIs and executive reports.
                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  🗄️
                </div>

                <h4 className="mt-5 text-xl font-bold text-blue-400">
                  Database Design
                </h4>

                <p className="mt-3 leading-7 text-slate-300">
                  Relational database design, normalization, ER diagrams
                  and SQL optimization.
                </p>

              </div>

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl">
                  🚀
                </div>

                <h4 className="mt-5 text-xl font-bold text-blue-400">
                  Business Intelligence
                </h4>

                <p className="mt-3 leading-7 text-slate-300">
                  Turning business data into actionable insights that support
                  better decision-making.
                </p>

              </div>

            </div>

          </div>

        </motion.div>
      </div>
      

    </section>
  );
}

export default Skills;
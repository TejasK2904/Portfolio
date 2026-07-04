function Projects() {
  const projects = [
    {
      title: "AI Data Analyst Pro",
      tech: "Python • Streamlit • Pandas • OpenAI",
      description:
        "An AI-powered data analytics application that lets users upload CSV or Excel files and ask questions in natural language to generate insights.",
      github: "#",
      demo: "#",
      icon: "🤖",
    },
    {
      title: "Student Performance Analysis",
      tech: "SQL • Power BI • Excel",
      description:
        "Analyzed student performance data using SQL and built interactive Power BI dashboards to identify trends and improve decision-making.",
      github: "https://github.com/TejasK2904/Student-Performance-Analysis",
      demo: "#",
      icon: "📊",
    },
    {
      title: "Job Portal Database System",
      tech: "SQL",
      description:
        "Designed and optimized a relational database with multiple interconnected tables to manage job seekers, recruiters, and applications.",
      github: "#",
      demo: "#",
      icon: "💼",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 max-w-2xl mx-auto">
          Real projects demonstrating my data analytics, SQL, Power BI,
          Python, and business intelligence skills.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:-translate-y-3 transition-all duration-300 shadow-lg"
            >

              {/* Top Section */}

              <div className="h-52 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 flex items-center justify-center">

                <div className="text-7xl">
                  {project.icon}
                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <div className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm px-4 py-2 rounded-full mb-5">
                  {project.tech}
                </div>

                <p className="text-gray-400 leading-7 mb-8">
                  {project.description}
                </p>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-slate-700 hover:border-blue-500 py-3 rounded-xl font-semibold transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
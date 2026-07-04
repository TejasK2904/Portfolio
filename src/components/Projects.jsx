function Projects() {
  const projects = [
    {
      title: "AI Data Analyst Pro",
      tech: "Python • Streamlit • Pandas • OpenAI",
      description:
        "An AI-powered data analytics application that lets users upload CSV or Excel files and ask questions in natural language to generate insights.",
      github: "#",
      demo: "#",
    },
    {
      title: "Student Performance Analysis",
      tech: "SQL • Power BI • Excel",
      description:
        "Analyzed student performance data using SQL and built interactive Power BI dashboards to identify trends and improve decision-making.",
      github: "https://github.com/TejasK2904/Student-Performance-Analysis",
      demo: "#",
    },
    {
      title: "Job Portal Database System",
      tech: "MySQL • SQL",
      description:
        "Designed and optimized a relational database with multiple interconnected tables to manage job seekers, recruiters, and applications.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Real projects demonstrating my data analytics and database skills.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center text-6xl">
                📊
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-blue-400 text-sm mb-4">
                  {project.tech}
                </p>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 px-4 py-2 rounded-lg hover:border-blue-500 transition"
                  >
                    Demo
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
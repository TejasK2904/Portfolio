function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          About Me
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
          Get to know more about my background, technical expertise, and passion
          for transforming business data into meaningful insights.
        </p>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-16">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Passionate Data Analyst
            </h3>

            <div className="space-y-6 text-gray-400 leading-8 text-lg">

              <p>
                I am a Data Analyst with hands-on experience in SQL, Power BI,
                Python, Excel. I enjoy transforming raw data into
                interactive dashboards, meaningful reports, and actionable
                business insights that support better decision-making.
              </p>

              <p>
                Throughout my professional journey, I have worked with large
                datasets, automated reporting processes, designed relational
                databases, developed Power BI dashboards, and optimized SQL
                queries to improve reporting efficiency and data accuracy.
              </p>

              <p>
                I am passionate about continuous learning and enjoy solving
                real-world business problems using data analytics,
                visualization, and business intelligence tools. My goal is to
                contribute to organizations by delivering data-driven solutions
                that create measurable business value.
              </p>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-8 text-blue-400">
              Quick Highlights
            </h3>

            <div className="space-y-5 text-lg">

              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <span>Currently working as a Data Analyst at Koderz Technology Pvt. Ltd.</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>100K+ Records Cleaned & Analyzed</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <span>Interactive Power BI Dashboards</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🗄️</span>
                <span>Advanced SQL Database Development</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span>3+ Data Analytics Projects</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <span>2 Virtual Internships (Accenture & PwC)</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        {/* Content Box */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side Text */}
          <div className="space-y-6 text-white/70 leading-7">

            <p>
              I am a passionate Data Analyst skilled in SQL, Power BI, Python, and Excel.
              I specialize in transforming raw data into meaningful business insights.
            </p>

            <p>
              I enjoy solving real-world business problems using data analysis,
              dashboards, and automation techniques.
            </p>

            <p>
              My goal is to become a highly skilled Data Analyst and contribute
              to data-driven decision making in organizations.
            </p>

          </div>

          {/* Right Side Card */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">

            <h3 className="text-2xl font-semibold mb-4">
              Quick Highlights
            </h3>

            <ul className="space-y-3 text-white/70">

              <li>📊 3+ Projects Completed</li>
              <li>💻 SQL, Python, Power BI</li>
              <li>📈 Dashboard & Reporting</li>
              <li>⚡ Automation & Data Cleaning</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
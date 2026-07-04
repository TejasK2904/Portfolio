function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Professional Experience
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Hands-on experience in Data Analytics, Business Intelligence, SQL, Power BI, Tableau, and Database Management.
        </p>

        {/* Koderz */}

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mb-10 hover:border-blue-500 transition">

          <div className="flex flex-col md:flex-row md:justify-between">

            <div>
              <h3 className="text-2xl font-bold text-blue-400">
                Data Analyst
              </h3>

              <p className="text-lg text-white mt-2">
                Koderz Technology Pvt. Ltd.
              </p>
            </div>

            <p className="text-gray-400 mt-4 md:mt-0">
              Oct 2025 – Present
            </p>

          </div>

          <ul className="list-disc ml-6 mt-8 space-y-3 text-gray-300 leading-7">

            <li>Clean and transform datasets containing more than 100,000 records using SQL, Excel, and Python.</li>

            <li>Develop interactive Power BI dashboards to monitor business KPIs and improve reporting efficiency.</li>

            <li>Design and manage MySQL databases while maintaining data integrity through normalization and database constraints.</li>

            <li>Create and optimize complex SQL queries for reporting, analysis, and faster data retrieval.</li>

            <li>Designed a Job Portal Database Management System with 15 relational tables using MySQL.</li>

            <li>Create ER diagrams and normalized database schemas for efficient database design.</li>

            <li>Collaborate with business stakeholders to convert raw data into meaningful dashboards and actionable insights.</li>

          </ul>

        </div>

        {/* MetaZen */}

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-blue-500 transition">

          <div className="flex flex-col md:flex-row md:justify-between">

            <div>

              <h3 className="text-2xl font-bold text-blue-400">
                Data Analytics Intern
              </h3>

              <p className="text-lg text-white mt-2">
                MetaZen Digital Pvt. Ltd.
              </p>

            </div>

            <p className="text-gray-400 mt-4 md:mt-0">
              Mar 2024 – Dec 2024
            </p>

          </div>

          <ul className="list-disc ml-6 mt-8 space-y-3 text-gray-300 leading-7">

            <li>Designed Tableau dashboards and SQL reports for logistics and transportation operations.</li>

            <li>Performed data cleaning, transformation, and validation to improve reporting quality.</li>

            <li>Created forecasting reports using Tableau parameters, trend lines, and reference lines.</li>

            <li>Automated recurring reports to improve operational efficiency.</li>

            <li>Analyzed business datasets to identify trends and support strategic decision-making.</li>

          </ul>

        </div>

      </div>
    </section>
  );
}

export default Experience;
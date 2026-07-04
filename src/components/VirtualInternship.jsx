function VirtualInternships() {
  return (
    <section id="virtual-internships" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Virtual Internships
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Industry-recognized virtual job simulations completed through Forage.
        </p>

        {/* Accenture */}

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 mb-8 hover:border-blue-500 transition duration-300">

          <h3 className="text-2xl font-bold text-blue-400">
            Accenture North America
          </h3>

          <p className="text-lg mt-2">
            Data Analytics & Visualization Job Simulation
          </p>

          <p className="text-gray-500 mt-2 mb-6">
            Forage • March 2024
          </p>

          <ul className="list-disc ml-6 space-y-3 text-gray-300">
            <li>Analyzed, cleaned, and modeled 7 datasets to identify content trends.</li>
            <li>Generated business insights to support strategic decision-making.</li>
            <li>Prepared a professional PowerPoint presentation for stakeholders.</li>
            <li>Strengthened data visualization, storytelling, and communication skills.</li>
          </ul>

        </div>

        {/* PwC */}

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">

          <h3 className="text-2xl font-bold text-blue-400">
            PwC Switzerland
          </h3>

          <p className="text-lg mt-2">
            Power BI Job Simulation
          </p>

          <p className="text-gray-500 mt-2 mb-6">
            Forage • April 2024
          </p>

          <ul className="list-disc ml-6 space-y-3 text-gray-300">
            <li>Created interactive Power BI dashboards to visualize KPIs and business metrics.</li>
            <li>Analyzed HR data to identify diversity and inclusion trends.</li>
            <li>Delivered business insights using Power BI visualizations.</li>
            <li>Applied data-driven decision-making to solve real business scenarios.</li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default VirtualInternships;
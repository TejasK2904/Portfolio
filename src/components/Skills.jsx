import {
  Database,
  BarChart3,
  FileSpreadsheet,
  Code2,
  Brain,
  Table2,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      icon: <Database size={40} />,
      title: "SQL",
      description: "Database design, joins, views, stored procedures and data analysis."
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Power BI",
      description: "Interactive dashboards, DAX, Power Query, and business reporting."
    },
    {
      icon: <Code2 size={40} />,
      title: "Python",
      description: "Pandas, NumPy, data cleaning, automation, and analytics."
    },
    {
      icon: <FileSpreadsheet size={40} />,
      title: "Excel",
      description: "Advanced Excel, Pivot Tables, Lookups, Charts, and MIS Reporting."
    },
    {
      icon: <Brain size={40} />,
      title: "Problem Solving",
      description: "Analytical thinking and turning business problems into data solutions."
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Technologies and tools I use to build data-driven solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >

              <div className="text-blue-400 mb-6">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {skill.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {skill.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
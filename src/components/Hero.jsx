import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 px-6 relative">

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-400 tracking-widest uppercase">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
            Tejas Khobragade
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 text-white/80">
            Data Analyst
          </h2>

          <p className="mt-6 text-white/60 leading-7 max-w-xl">
            I transform raw data into meaningful business insights using
            SQL, Power BI, Python, and Advanced Excel. I specialize in dashboards,
            reporting and Data Analysis.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition">
              Download Resume
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition">
              GitHub
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition">
              LinkedIn
            </button>

          </div>

        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md text-center">

            <div className="text-6xl">📊</div>

            <h3 className="text-2xl font-bold mt-4">
              Data Analytics
            </h3>

            <p className="text-white/60 mt-2">
              SQL • Power BI • Python
            </p>

            <p className="text-white/60">
              Excel • Reporting • Dashboards
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
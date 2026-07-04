function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          I'm actively looking for Data Analyst and MIS Executive opportunities.
          Feel free to connect with me.
        </p>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-10">

          <div className="space-y-6 text-lg">

            <div>
              <span className="font-semibold text-blue-400">Name:</span><br />
              Tejas Khobragade
            </div>

            <div>
              <span className="font-semibold text-blue-400">Email:</span><br />
              <a
                href="mailto:tejaskhobragde2918@gmail.com"
                className="hover:text-blue-400"
              >
                tejaskhobragde2918@gmail.com
              </a>
            </div>

            <div>
              <span className="font-semibold text-blue-400">Phone:</span><br />
              <a
                href="tel:+918208961816"
                className="hover:text-blue-400"
              >
                +91 8208961816
              </a>
            </div>

            <div>
              <span className="font-semibold text-blue-400">GitHub:</span><br />
              <a
                href="https://github.com/TejasK2904"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                github.com/TejasK2904
              </a>
            </div>

            <div>
              <span className="font-semibold text-blue-400">LinkedIn:</span><br />
              <a
                href="https://www.linkedin.com/in/tejas-tk29"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                linkedin.com/in/tejas-tk29
              </a>
            </div>

            <div className="pt-6">
              <a
                href="/resume/Tejas_Khobragade_Resume.pdf"
                target="_blank"
                className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
              >
                Download Resume
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
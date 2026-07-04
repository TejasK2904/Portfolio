function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 max-w-2xl mx-auto">
          I'm actively looking for Data Analyst and MIS Executive opportunities.
          If you have an opportunity or would like to connect, feel free to reach out.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

          <div className="grid md:grid-cols-2 gap-10">

            <div>

              <h3 className="text-2xl font-bold mb-8 text-blue-400">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-sm text-gray-400">👤 Name</p>
                  <p className="text-lg font-medium">
                    Tejas Khobragade
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">📧 Email</p>
                  <a
                    href="mailto:tejaskhobragde2918@gmail.com"
                    className="text-lg hover:text-blue-400 transition"
                  >
                    tejaskhobragde2918@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-400">📱 Phone</p>
                  <a
                    href="tel:+918208961816"
                    className="text-lg hover:text-blue-400 transition"
                  >
                    +91 8208961816
                  </a>
                </div>

              </div>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-8 text-blue-400">
                Professional Profiles
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-sm text-gray-400">💻 GitHub</p>
                  <a
                    href="https://github.com/TejasK2904"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg hover:text-blue-400 transition"
                  >
                    github.com/TejasK2904
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-400">💼 LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/tejas-tk29"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg hover:text-blue-400 transition"
                  >
                    linkedin.com/in/tejas-tk29
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-400">📍 Location</p>
                  <p className="text-lg">
                    Nagpur, Maharashtra, India
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div className="flex justify-center mt-12">

            <a
              href="/Resume/Tejas_Khobragade_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
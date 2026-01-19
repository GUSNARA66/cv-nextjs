export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center py-16 px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white text-center">
          <img
            src="/profile.jpg"
            className="w-36 h-36 mx-auto rounded-full border-4 border-white object-cover shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4">
            Igusti Ngurah Prayatna Rasendriya Kadwastana
          </h1>
          <p className="text-blue-100 mt-2">
            Junior Web Developer • Student
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-10 space-y-10">

          {/* ABOUT */}
          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I am a motivated junior web developer currently learning modern
              web technologies such as HTML, CSS, JavaScript, Tailwind CSS,
              and Next.js. I enjoy building clean, responsive, and user-friendly
              interfaces and continuously improving my skills through practice
              and projects.
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS",
                "Next.js",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Education
            </h2>
            <p className="text-gray-700">
              <strong>SMK TI Mengwitani</strong><br />
              Major: TJKT<br />
              2026 – 2027
            </p>
          </section>

          {/* BUTTON */}
          <div className="text-center pt-6">
            <a
              href="/blog"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600
              text-white px-10 py-3 rounded-full font-semibold shadow-lg
              hover:scale-105 transition"
            >
              View My Blog →
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}

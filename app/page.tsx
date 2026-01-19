import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      
      <div className="bg-white max-w-5xl w-full rounded-3xl shadow-2xl p-10">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase">
              Junior Frontend Developer
            </span>

            <h1 className="text-4xl font-extrabold text-gray-900 mt-3">
              Gus Nara
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              A motivated junior frontend developer with a strong interest in
              building modern, responsive, and user-friendly web interfaces.
              Experienced in using <strong>Next.js</strong> and
              <strong> Tailwind CSS</strong> to create clean and scalable UI.
            </p>

            <div className="flex gap-4 mt-6">
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-6 py-3 rounded-full
                hover:bg-blue-700 transition font-medium"
              >
                View Blog
              </Link>

              <a
                href="https://github.com/"
                target="_blank"
                className="border border-gray-300 px-6 py-3 rounded-full
                hover:bg-gray-100 transition font-medium"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="w-44 h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-blue-600">
              <Image
                src="/foto.jpg"
                alt="Profile Photo"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "HTML5 & Semantic Markup",
              "CSS3 & Responsive Design",
              "JavaScript Fundamentals",
              "Next.js (App Router)",
              "Tailwind CSS",
              "Git & GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-50 border rounded-xl p-4
                text-gray-700 font-medium hover:shadow transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Personal CV Website"
              desc="A responsive CV website built with Next.js and Tailwind CSS,
              featuring a modern UI and blog section."
            />
            <ProjectCard
              title="Learning Blog Platform"
              desc="A simple blog page to document my learning journey in frontend
              development using clean and readable UI design."
            />
          </div>
        </section>

        {/* FOOTER */}
        <p className="text-center text-gray-500 text-sm mt-16">
          Open to internship and junior frontend opportunities
        </p>

      </div>
    </main>
  );
}

function ProjectCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="border rounded-2xl p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-600">
        {title}
      </h3>
      <p className="text-gray-600 mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

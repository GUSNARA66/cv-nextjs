"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HERO BACKGROUND (SETENGAH ATAS) */}
      <div className="relative h-[50vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/anime-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-lg"
          />

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mt-4 text-center"
          >
            Igusti Ngurah Prayatna Rasendriya Kadwastana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-blue-100 mt-2"
          >
            Junior Web Developer • Student
          </motion.p>
        </div>
      </div>

      {/* CV CONTENT */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 -mt-24 relative z-20"
      >
        {/* ABOUT */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I am a motivated junior web developer who is currently learning
            modern web technologies such as HTML, CSS, JavaScript, Tailwind CSS,
            and Next.js. I enjoy building clean, responsive, and user-friendly
            interfaces while continuously improving my skills.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "Tailwind CSS", "Next.js", "Git & GitHub"].map(
              (skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-10">
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
        <div className="text-center">
          <a
            href="/blog"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600
            text-white px-10 py-3 rounded-full font-semibold shadow-lg
            hover:scale-105 transition"
          >
            View My Blog →
          </a>
        </div>
      </motion.section>

    </main>
  );
}

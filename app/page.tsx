"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <div className="relative max-w-5xl mx-auto h-[45vh] rounded-b-3xl overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/anime-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h1
            className="text-3xl md:text-4xl font-bold mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Igusti Ngurah Prayatna Rasendriya Kadwastana
          </motion.h1>

          <motion.p
            className="text-gray-300 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Junior Web Developer • Student
          </motion.p>
        </div>
      </div>

      {/* CV CARD */}
      <motion.section
        className="max-w-5xl mx-auto bg-neutral-900 rounded-3xl shadow-2xl p-10 -mt-28 relative z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* ABOUT */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am a junior web developer who is passionate about building clean,
            modern, and responsive web interfaces. I am currently learning
            modern technologies such as HTML, CSS, JavaScript, Tailwind CSS,
            and Next.js while continuously improving my skills through projects.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
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
            ].map((skill, i) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
            Education
          </h2>
          <p className="text-gray-300">
            <strong className="text-white">SMK TI Mengwitani</strong><br />
            Major: TJKT<br />
            2026 – 2027
          </p>
        </section>

        {/* BUTTON */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-block bg-white text-black px-10 py-3 rounded-full
            font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            View My Blog →
          </a>
        </div>
      </motion.section>
    </main>
  );
}

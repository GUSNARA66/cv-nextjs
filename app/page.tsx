"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white text-center">
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-36 h-36 mx-auto rounded-full border-4 border-white object-cover shadow-lg"
          />

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mt-4"
          >
            Igusti Ngurah Prayatna Rasendriya Kadwastana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-blue-100 mt-2"
          >
            Junior Web Developer • Student
          </motion.p>
        </div>

        {/* CONTENT */}
        <div className="p-10 space-y-12">

          {/* ABOUT */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I am a motivated junior web developer who is currently learning
              modern web technologies such as HTML, CSS, JavaScript, Tailwind
              CSS, and Next.js. I enjoy building clean, responsive, and
              user-friendly interfaces while continuously improving my skills
              through practice and personal projects.
            </p>
          </motion.section>

          {/* SKILLS */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
              ].map((skill, i) => (
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
              ))}
            </div>
          </motion.section>

          {/* EDUCATION */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Education
            </h2>
            <p className="text-gray-700">
              <strong>SMK TI Mengwitani</strong><br />
              Major: TJKT<br />
              2026 – 2027
            </p>
          </motion.section>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center pt-4"
          >
            <a
              href="/blog"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600
              text-white px-10 py-3 rounded-full font-semibold shadow-lg
              hover:scale-105 transition"
            >
              View My Blog →
            </a>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}

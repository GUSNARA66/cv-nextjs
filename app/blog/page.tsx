"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* TITLE */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Learning Blog
        </motion.h1>
        <p className="text-gray-400">
          A collection of my learning journey and thoughts in web development
        </p>
      </div>

      {/* BLOG LIST */}
      <div className="max-w-5xl mx-auto grid gap-8">

        {[
          {
            title: "Learning HTML Basics",
            content:
              "I started my web development journey by learning HTML. I understood how to structure web pages using semantic elements such as headers, sections, articles, and footers. This foundation helped me build clean and accessible layouts.",
          },
          {
            title: "Learning CSS & Responsive Design",
            content:
              "CSS allowed me to bring life to my HTML structure. I learned about layouts, flexbox, spacing, colors, and responsive design. Making websites adaptable across different screen sizes became one of my main focuses.",
          },
          {
            title: "Using Tailwind CSS",
            content:
              "Tailwind CSS significantly improved my development speed. By using utility classes, I could focus more on layout and design consistency without writing repetitive custom CSS.",
          },
          {
            title: "Getting Started with JavaScript",
            content:
              "JavaScript introduced me to interactivity on the web. I learned how to manipulate the DOM, handle events, and understand basic logic that makes websites dynamic and engaging.",
          },
          {
            title: "Learning Git & GitHub",
            content:
              "Version control is essential in modern development. Git taught me how to track changes, while GitHub helped me showcase my projects and collaborate more efficiently.",
          },
          {
            title: "My Goals as a Web Developer",
            content:
              "My goal is to become a professional web developer. I plan to deepen my knowledge of JavaScript, master modern frameworks like Next.js, and continuously improve my UI/UX skills.",
          },
        ].map((post, i) => (
          <motion.article
            key={i}
            className="bg-neutral-900 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-3">
              {post.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {post.content}
            </p>
          </motion.article>
        ))}
      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-16">
        <Link
          href="/"
          className="inline-block bg-white text-black px-10 py-3 rounded-full
          font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          ← Back to CV
        </Link>
      </div>

    </main>
  );
}

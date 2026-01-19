"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "My Journey Learning HTML",
    content: [
      "HTML was the first technology I learned when starting my journey as a web developer. I began by understanding the basic structure of a webpage.",
      "I learned how semantic HTML improves accessibility and SEO by using meaningful tags.",
      "This foundation gave me confidence to move forward into styling and interactivity."
    ],
  },
  {
    title: "Styling with CSS & Tailwind CSS",
    content: [
      "CSS helped me understand layout, colors, spacing, and responsive design.",
      "Tailwind CSS improved my workflow by allowing me to build UI faster using utility classes.",
      "This approach helped me create clean and consistent designs for my projects."
    ],
  },
  {
    title: "Building with Next.js",
    content: [
      "Next.js introduced me to modern React-based development.",
      "I learned file-based routing, reusable components, and project structure.",
      "This CV and blog website is one of my first real projects using Next.js."
    ],
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-700 mb-12"
        >
          My Learning Blog
        </motion.h1>

        {/* POSTS */}
        <div className="space-y-10">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {post.title}
              </h2>

              {post.content.map((text, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 leading-relaxed mb-4"
                >
                  {text}
                </p>
              ))}
            </motion.article>
          ))}
        </div>

        {/* BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="/"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            ← Back to CV
          </a>
        </motion.div>

      </div>
    </main>
  );
}

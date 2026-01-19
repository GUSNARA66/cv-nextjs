import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-white text-center mb-10">
          My Learning Blog
        </h1>

        <div className="space-y-6">

          <BlogCard
            title="Learning HTML Basics"
            content="I learned the basic structure of HTML such as headings,
            paragraphs, links, images, and lists. HTML is the foundation
            of every website."
          />

          <BlogCard
            title="Learning CSS and Layout"
            content="CSS helps me style websites by managing colors, fonts,
            spacing, and layouts to make them look clean and attractive."
          />

          <BlogCard
            title="Understanding Tailwind CSS"
            content="Tailwind CSS speeds up development by using utility
            classes directly in HTML without writing custom CSS."
          />

          <BlogCard
            title="Learning Git and GitHub"
            content="Git helps manage project versions, while GitHub
            is used to store and showcase projects online."
          />

          <BlogCard
            title="My Future Goals"
            content="I aim to improve my JavaScript skills, master responsive
            design, and build modern web applications."
          />

        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3
            rounded-full hover:bg-blue-700 transition text-lg"
          >
            ← Back to CV
          </Link>
        </div>

      </div>
    </main>
  );
}

function BlogCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition">
      <h2 className="text-2xl font-semibold text-blue-600 mb-3">
        {title}
      </h2>
      <p className="text-gray-700 leading-relaxed">
        {content}
      </p>
    </div>
  );
}

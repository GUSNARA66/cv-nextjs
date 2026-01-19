const posts = [
  {
    title: "Learning HTML & CSS",
    desc: "Understanding the fundamentals of website structure and styling.",
  },
  {
    title: "Using Tailwind CSS",
    desc: "Building modern UI faster with utility-first CSS.",
  },
  {
    title: "Getting Started with Next.js",
    desc: "Learning routing, components, and modern React workflow.",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
          My Learning Blog
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="text-blue-600 font-semibold hover:underline"
          >
            ← Back to CV
          </a>
        </div>
      </div>
    </main>
  );
}

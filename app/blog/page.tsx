const posts = [
  {
    title: "My Journey Learning HTML",
    content: [
      "HTML was the first technology I learned when starting my journey as a web developer. I began by understanding the basic structure of a webpage, including elements such as headings, paragraphs, links, images, and lists.",
      "Through practicing HTML, I learned how important semantic elements are for accessibility and SEO. Using tags like <header>, <section>, <article>, and <footer> helped me create cleaner and more meaningful page structures.",
      "This foundation gave me confidence to move forward and explore styling and interactivity in web development."
    ],
  },
  {
    title: "Styling Websites with CSS & Tailwind CSS",
    content: [
      "After learning HTML, I moved on to CSS to make my websites visually appealing. I learned how to manage layouts using flexbox and grid, apply colors, spacing, typography, and create responsive designs.",
      "Later, I discovered Tailwind CSS, which significantly improved my development workflow. Instead of writing custom CSS files, I could apply utility classes directly in my components.",
      "Tailwind helped me build consistent and modern UI designs faster, especially for personal projects like my CV and portfolio website."
    ],
  },
  {
    title: "Getting Started with JavaScript",
    content: [
      "JavaScript introduced me to the concept of interactivity on websites. I learned basic concepts such as variables, functions, conditions, loops, and events.",
      "By practicing JavaScript, I was able to add simple interactions such as button clicks, form validation, and dynamic content updates.",
      "This experience helped me understand how logic works behind user interactions and prepared me to learn modern frameworks."
    ],
  },
  {
    title: "Building Projects with Next.js",
    content: [
      "Next.js was my introduction to modern web development using React. I learned how file-based routing works, how to create reusable components, and how to structure a real-world project.",
      "Using Next.js allowed me to build this CV and blog website as a single project with multiple pages. I also learned about client and server components at a basic level.",
      "This framework helped me understand how professional web applications are built and deployed."
    ],
  },
  {
    title: "Version Control with Git & GitHub",
    content: [
      "Learning Git and GitHub was an important step in becoming a developer. Git helped me track changes in my code and manage versions efficiently.",
      "GitHub allowed me to store my projects online, collaborate, and showcase my work as a portfolio.",
      "Through using GitHub, I learned how to commit changes properly, push updates, and deploy projects using platforms like Vercel."
    ],
  },
  {
    title: "My Goals as a Junior Web Developer",
    content: [
      "As a junior web developer, my main goal is to continuously improve my skills and build more real-world projects. I aim to strengthen my JavaScript fundamentals and deepen my understanding of React and Next.js.",
      "In the future, I want to learn backend development, APIs, and databases to become a full-stack developer.",
      "I believe that consistency, curiosity, and practice are the keys to growth in the technology field."
    ],
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
          My Learning Blog
        </h1>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {post.title}
              </h2>

              {post.content.map((text, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed mb-4"
                >
                  {text}
                </p>
              ))}
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            ← Back to CV
          </a>
        </div>
      </div>
    </main>
  );
}

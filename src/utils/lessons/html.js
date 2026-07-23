module.exports = [
  {
    order: 1,
    title: "Introduction to HTML and Document Structure",
    theory: "HTML (HyperText Markup Language) is the standard markup language for building web pages. Every HTML document starts with a doctype declaration, followed by html, head, and body tags. The head contains metadata like the title and character encoding, while the body contains the visible content of the page.",
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`,
  },
  {
    order: 2,
    title: "Semantic HTML Elements",
    theory: "Semantic elements clearly describe their meaning to both the browser and the developer. Instead of using generic div tags for everything, semantic tags like header, nav, main, section, article, and footer improve accessibility and SEO.",
    code: `<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>Post content goes here.</p>
  </article>
</main>
<footer>
  <p>&copy; 2026 ButtNetworks</p>
</footer>`,
  },
];
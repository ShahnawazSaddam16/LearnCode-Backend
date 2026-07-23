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
  {
    order: 3,
    title: "Headings and Paragraphs",
    theory: "Headings from h1 to h6 define a hierarchy of importance for content, with h1 being the most significant. Paragraphs are defined with the p tag and represent blocks of text.",
    code: `<h1>Main Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<p>This is a paragraph of text explaining the section above.</p>`,
  },
  {
    order: 4,
    title: "Text Formatting Elements",
    theory: "HTML provides inline elements to emphasize or style text, such as strong for importance, em for emphasis, small for fine print, mark for highlighting, and del or ins for tracking changes.",
    code: `<p>
  This is <strong>very important</strong>, this is <em>emphasized</em>,
  this is <mark>highlighted</mark>, and this is
  <del>outdated</del> <ins>updated</ins> text.
</p>`,
  },
  {
    order: 5,
    title: "Links and Anchor Tags",
    theory: "The anchor tag creates hyperlinks to other pages, sections, or resources using the href attribute. Links can open in the same tab or a new one using the target attribute, and can point to sections within the same page using an id reference.",
    code: `<a href="https://example.com">Visit Example</a>
<a href="https://example.com" target="_blank" rel="noopener">Open in New Tab</a>
<a href="#section2">Jump to Section 2</a>
<h2 id="section2">Section 2</h2>`,
  },
  {
    order: 6,
    title: "Images and the img Tag",
    theory: "The img tag embeds images into a page using the src attribute for the image path and the alt attribute for alternative text, which improves accessibility and displays if the image fails to load.",
    code: `<img src="logo.png" alt="Company Logo" width="200" height="100" />
<figure>
  <img src="chart.png" alt="Sales Chart" />
  <figcaption>Quarterly sales performance</figcaption>
</figure>`,
  },
  {
    order: 7,
    title: "Lists: Ordered, Unordered, and Description",
    theory: "Unordered lists use ul with li items and display bullets. Ordered lists use ol and display numbers. Description lists use dl with dt for terms and dd for their descriptions.",
    code: `<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
<ol>
  <li>Step One</li>
  <li>Step Two</li>
</ol>
<dl>
  <dt>HTML</dt>
  <dd>A markup language for the web</dd>
</dl>`,
  },
  {
    order: 8,
    title: "Tables and Tabular Data",
    theory: "Tables display tabular data using table, thead, tbody, tr for rows, th for header cells, and td for data cells. Attributes like colspan and rowspan merge cells across columns or rows.",
    code: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>25</td>
    </tr>
  </tbody>
</table>`,
  },
  {
    order: 9,
    title: "Forms and Input Basics",
    theory: "The form element collects user input and submits it to a server. It contains input elements such as text fields, and defines the action URL and method (GET or POST) used to send the data.",
    code: `<form action="/submit" method="POST">
  <label for="username">Username</label>
  <input type="text" id="username" name="username" />
  <button type="submit">Submit</button>
</form>`,
  },
  {
    order: 10,
    title: "Form Input Types",
    theory: "The input element supports many types beyond text, including email, password, number, date, checkbox, radio, and file, each providing built-in validation and appropriate UI controls.",
    code: `<input type="email" placeholder="you@example.com" />
<input type="password" />
<input type="number" min="0" max="100" />
<input type="date" />
<input type="checkbox" checked />
<input type="radio" name="gender" value="male" />
<input type="file" />`,
  },
  {
    order: 11,
    title: "Select, Textarea, and Fieldset",
    theory: "The select element creates dropdown menus using option children. Textarea creates a multi-line text input. Fieldset groups related form controls together and legend provides a caption for that group.",
    code: `<fieldset>
  <legend>Contact Details</legend>
  <select name="country">
    <option value="pk">Pakistan</option>
    <option value="us">United States</option>
  </select>
  <textarea rows="4" cols="30" placeholder="Your message"></textarea>
</fieldset>`,
  },
  {
    order: 12,
    title: "Form Validation Attributes",
    theory: "HTML supports native client-side validation through attributes like required, pattern, minlength, maxlength, min, and max, reducing the need for extra JavaScript for basic checks.",
    code: `<input type="text" required minlength="3" maxlength="20" />
<input type="tel" pattern="[0-9]{11}" placeholder="03XXXXXXXXX" />
<input type="number" min="1" max="10" required />`,
  },
  {
    order: 13,
    title: "Divs, Spans, and Generic Containers",
    theory: "The div element is a block-level generic container used to group content for styling or scripting. The span element is its inline equivalent, used to wrap a portion of text without breaking the flow.",
    code: `<div class="card">
  <span class="badge">New</span>
  <p>Card content goes here.</p>
</div>`,
  },
  {
    order: 14,
    title: "Attributes: class, id, and data-*",
    theory: "The class attribute assigns one or more style hooks shared across elements. The id attribute uniquely identifies a single element. Custom data-* attributes store extra information accessible via JavaScript.",
    code: `<div id="profile-card" class="card highlighted" data-user-id="42">
  <p>Profile information</p>
</div>`,
  },
  {
    order: 15,
    title: "Audio and Video Embedding",
    theory: "The audio and video elements embed media directly in a page using the src attribute or nested source elements for multiple formats, along with the controls attribute to show playback controls.",
    code: `<video controls width="480">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
</video>
<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
</audio>`,
  },
  {
    order: 16,
    title: "iframe and Embedding External Content",
    theory: "The iframe element embeds another HTML document within the current page, commonly used for maps, videos, or third-party widgets, with attributes like width, height, and sandbox controlling its behavior.",
    code: `<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  width="560"
  height="315"
  allowfullscreen
></iframe>`,
  },
  {
    order: 17,
    title: "Meta Tags and SEO Basics",
    theory: "Meta tags in the head provide metadata about the document that browsers and search engines use, such as description, viewport settings for responsive design, and Open Graph tags for social media previews.",
    code: `<meta name="description" content="Learn HTML from scratch." />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta property="og:title" content="HTML Course" />
<meta property="og:image" content="/preview.png" />`,
  },
  {
    order: 18,
    title: "HTML Entities and Special Characters",
    theory: "Certain characters have special meaning in HTML and must be written as entities to display correctly, such as &lt; for less-than, &gt; for greater-than, &amp; for ampersand, and &nbsp; for a non-breaking space.",
    code: `<p>5 &lt; 10 &amp; 10 &gt; 5</p>
<p>Price:&nbsp;$50</p>
<p>&copy; 2026 &mdash; All rights reserved</p>`,
  },
  {
    order: 19,
    title: "Accessibility with ARIA",
    theory: "ARIA (Accessible Rich Internet Applications) attributes like role, aria-label, and aria-hidden improve accessibility for assistive technologies when native HTML semantics are not enough to convey meaning.",
    code: `<button aria-label="Close dialog">&times;</button>
<div role="alert">Your form was submitted successfully.</div>
<span aria-hidden="true">*</span>`,
  },
  {
    order: 20,
    title: "The details and summary Elements",
    theory: "The details element creates a collapsible widget that users can toggle open or closed, with the summary element defining the always-visible label shown for that widget.",
    code: `<details>
  <summary>Click to expand</summary>
  <p>Here is the hidden content that appears when expanded.</p>
</details>`,
  },
  {
    order: 21,
    title: "HTML Comments and Document Organization",
    theory: "Comments in HTML are written between markers and are ignored by the browser, useful for leaving notes or temporarily disabling code without deleting it, while keeping documents organized into logical sections.",
    code: `<section>
  <h2>Team Members</h2>
  <p>List of current team members.</p>
</section>`,
  },
  {
    order: 22,
    title: "Responsive Images with srcset and picture",
    theory: "The srcset attribute lets the browser choose the most appropriate image based on screen size and resolution. The picture element extends this by allowing different image sources for different conditions using nested source elements.",
    code: `<img
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  alt="Responsive banner"
/>
<picture>
  <source media="(min-width: 800px)" srcset="wide.jpg" />
  <img src="fallback.jpg" alt="Fallback banner" />
</picture>`,
  },
  {
    order: 23,
    title: "Linking CSS and JavaScript Files",
    theory: "External CSS files are linked in the head using the link element with rel set to stylesheet. External JavaScript files are included using the script tag, often placed before the closing body tag or with the defer attribute.",
    code: `<head>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>Page Content</h1>
  <script src="app.js" defer></script>
</body>`,
  },
  {
    order: 24,
    title: "Global Attributes and Boilerplate Best Practices",
    theory: "Global attributes such as lang, title, tabindex, and contenteditable can be applied to almost any element. Combined with a proper doctype, charset, and viewport meta tag, they form the foundation of a well-structured, accessible HTML boilerplate.",
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Boilerplate Page</title>
  </head>
  <body>
    <p title="Editable note" contenteditable="true">Click to edit this text.</p>
  </body>
</html>`,
  },
];
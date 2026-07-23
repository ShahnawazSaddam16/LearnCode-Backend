module.exports = [
  {
    order: 1,
    title: "The Box Model",
    theory: "Every element in CSS is a rectangular box made up of content, padding, border, and margin. Understanding how these layers stack determines the actual size an element takes up on the page. By default, width and height apply only to the content box unless box-sizing is set to border-box.",
    code: `.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #222;
  margin: 10px;
  box-sizing: border-box;
}`,
  },
  {
    order: 2,
    title: "Flexbox Layout",
    theory: "Flexbox is a one-dimensional layout system for arranging items in rows or columns. The parent becomes a flex container with display flex, and child items align using properties like justify-content and align-items.",
    code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`,
  },
  {
    order: 3,
    title: "Flexbox Item Properties",
    theory: "Individual flex items can control their own behavior within the flex container using flex-grow, flex-shrink, and flex-basis, often combined into the flex shorthand, along with align-self and order to override alignment or reorder items.",
    code: `.item {
  flex: 1 1 200px;
  align-self: flex-end;
  order: 2;
}`,
  },
  {
    order: 4,
    title: "CSS Grid Layout",
    theory: "Grid is a two-dimensional layout system that arranges content into rows and columns simultaneously. A container becomes a grid with display grid, and grid-template-columns and grid-template-rows define the track sizes.",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}`,
  },
  {
    order: 5,
    title: "Grid Item Placement",
    theory: "Grid items can be positioned precisely using grid-column and grid-row with line numbers or the span keyword, and named grid areas using grid-template-areas make complex layouts easier to read.",
    code: `.sidebar {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}
.main {
  grid-column: 2 / span 2;
}`,
  },
  {
    order: 6,
    title: "Positioning: static, relative, absolute, fixed, sticky",
    theory: "The position property controls how an element is placed. Static is the default flow. Relative offsets an element from its normal position. Absolute positions relative to the nearest positioned ancestor. Fixed positions relative to the viewport. Sticky toggles between relative and fixed based on scroll.",
    code: `.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.navbar {
  position: sticky;
  top: 0;
}`,
  },
  {
    order: 7,
    title: "Display Property",
    theory: "The display property determines how an element generates boxes for layout, with common values including block, inline, inline-block, flex, grid, and none, each affecting how the element sizes itself and interacts with siblings.",
    code: `.hidden {
  display: none;
}
.badge {
  display: inline-block;
  padding: 4px 8px;
}`,
  },
  {
    order: 8,
    title: "CSS Selectors",
    theory: "Selectors target elements for styling, ranging from simple type, class, and id selectors to combinators like descendant, child, and sibling selectors, allowing precise targeting based on document structure.",
    code: `div > p {
  margin: 0;
}
ul li + li {
  margin-top: 8px;
}
.card .title {
  font-weight: bold;
}`,
  },
  {
    order: 9,
    title: "Pseudo-classes",
    theory: "Pseudo-classes select elements based on state or position, such as hover for mouse interaction, focus for form fields, nth-child for positional targeting, and first-child or last-child for edge elements.",
    code: `button:hover {
  background: #333;
}
input:focus {
  outline: 2px solid blue;
}
li:nth-child(odd) {
  background: #f5f5f5;
}`,
  },
  {
    order: 10,
    title: "Pseudo-elements",
    theory: "Pseudo-elements style a specific part of an element rather than the whole thing, such as before and after for inserting generated content, first-line for the opening line of text, and first-letter for the initial character.",
    code: `.quote::before {
  content: "\\201C";
}
.quote::after {
  content: "\\201D";
}
p::first-letter {
  font-size: 2em;
}`,
  },
  {
    order: 11,
    title: "Specificity and the Cascade",
    theory: "Specificity determines which CSS rule wins when multiple rules target the same element, calculated from a combination of inline styles, ids, classes, and element selectors, with the cascade breaking ties by source order and importance.",
    code: `#header .title {
  color: red;
}
.title {
  color: blue;
}
p {
  color: green !important;
}`,
  },
  {
    order: 12,
    title: "Units: px, em, rem, %, vh, vw",
    theory: "CSS supports absolute units like px and relative units like em, rem, and percentages that scale based on font size or parent size. Viewport units vh and vw scale based on the browser window's height and width.",
    code: `.container {
  width: 80vw;
  padding: 2em;
  font-size: 1.2rem;
  min-height: 100vh;
}`,
  },
  {
    order: 13,
    title: "Colors and Backgrounds",
    theory: "Colors can be defined using keywords, hex codes, rgb, rgba, hsl, or hsla, with the alpha channel controlling transparency. Background properties control an element's fill, including images, gradients, position, and repeat behavior.",
    code: `.hero {
  background-color: rgba(20, 20, 20, 0.8);
  background-image: linear-gradient(to right, #6a11cb, #2575fc);
  background-size: cover;
  background-position: center;
}`,
  },
  {
    order: 14,
    title: "Typography",
    theory: "Typography properties control text appearance, including font-family for typeface, font-weight for boldness, line-height for vertical spacing, letter-spacing for character spacing, and text-align for horizontal alignment.",
    code: `body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.02em;
  text-align: left;
}`,
  },
  {
    order: 15,
    title: "Borders and Border Radius",
    theory: "Borders wrap the edge of an element and can be styled with width, style, and color, either together with individual side properties. Border-radius rounds the corners of an element, and can create fully circular shapes when set to 50%.",
    code: `.avatar {
  border: 3px solid #fff;
  border-radius: 50%;
}
.card {
  border-top: 4px solid #2575fc;
  border-radius: 8px;
}`,
  },
  {
    order: 16,
    title: "Box Shadow and Text Shadow",
    theory: "Box-shadow adds shadow effects around an element's frame, defined by horizontal and vertical offset, blur radius, spread radius, and color. Text-shadow applies a similar effect directly to text characters.",
    code: `.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}`,
  },
  {
    order: 17,
    title: "CSS Transitions",
    theory: "Transitions animate changes to a property's value smoothly over a defined duration, rather than changing instantly, controlled by transition-property, transition-duration, transition-timing-function, and transition-delay.",
    code: `.button {
  background: #2575fc;
  transition: background 0.3s ease-in-out;
}
.button:hover {
  background: #1a5edb;
}`,
  },
  {
    order: 18,
    title: "CSS Animations and Keyframes",
    theory: "Keyframe animations define multiple stages of a style change over time using the @keyframes rule, then are applied to elements with the animation property, allowing more complex motion than transitions alone.",
    code: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.modal {
  animation: fadeIn 0.5s ease forwards;
}`,
  },
  {
    order: 19,
    title: "Transforms",
    theory: "The transform property applies visual transformations to an element without affecting document flow, including translate for moving, scale for resizing, rotate for spinning, and skew for slanting, which can be combined together.",
    code: `.card:hover {
  transform: translateY(-5px) scale(1.02) rotate(1deg);
}`,
  },
  {
    order: 20,
    title: "Media Queries and Responsive Design",
    theory: "Media queries apply CSS rules conditionally based on characteristics like viewport width, enabling responsive layouts that adapt across devices using breakpoints defined with min-width or max-width.",
    code: `.container {
  padding: 40px;
}
@media (max-width: 768px) {
  .container {
    padding: 16px;
  }
}`,
  },
  {
    order: 21,
    title: "CSS Variables (Custom Properties)",
    theory: "Custom properties, declared with a double-dash prefix, store reusable values like colors or spacing that can be referenced throughout a stylesheet using the var function, making themes easier to maintain.",
    code: `:root {
  --primary-color: #2575fc;
  --spacing-unit: 8px;
}
.button {
  background: var(--primary-color);
  padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
}`,
  },
  {
    order: 22,
    title: "The calc() Function",
    theory: "The calc function performs mathematical calculations directly in CSS values, allowing mixed units like percentages and pixels to be combined dynamically for more flexible layouts.",
    code: `.sidebar {
  width: calc(100% - 250px);
}
.box {
  height: calc(100vh - 60px);
}`,
  },
  {
    order: 23,
    title: "Overflow and Scrolling",
    theory: "The overflow property controls what happens when content is too large for its container, with values like visible, hidden, scroll, and auto, and can be set independently for horizontal and vertical axes with overflow-x and overflow-y.",
    code: `.scroll-box {
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}`,
  },
  {
    order: 24,
    title: "Z-index and Stacking Context",
    theory: "Z-index controls the stacking order of positioned elements along the axis perpendicular to the screen, with higher values appearing on top, but only works on elements with a position value other than static.",
    code: `.overlay {
  position: absolute;
  z-index: 10;
}
.background {
  position: absolute;
  z-index: 1;
}`,
  },
  {
    order: 25,
    title: "Attribute and Combinator Selectors",
    theory: "Attribute selectors target elements based on the presence or value of an HTML attribute, while combinators like the general sibling selector target elements based on their relationship to other elements in the markup.",
    code: `input[type="email"] {
  border-color: #2575fc;
}
a[target="_blank"] {
  text-decoration: underline;
}
h2 ~ p {
  color: #555;
}`,
  },
  {
    order: 26,
    title: "CSS Reset and Normalize",
    theory: "Browsers apply different default styles to elements, so a reset or normalize stylesheet removes or standardizes these defaults, such as margins, paddings, and list styles, providing a consistent starting point.",
    code: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul, ol {
  list-style: none;
}`,
  },
  {
    order: 27,
    title: "Object-fit and Object-position",
    theory: "Object-fit controls how an image or video is resized to fit its container, with values like cover, contain, and fill, while object-position adjusts the alignment of that content within the box.",
    code: `.thumbnail {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: top;
}`,
  },
  {
    order: 28,
    title: "CSS Filters and Backdrop Filters",
    theory: "The filter property applies graphical effects like blur, brightness, contrast, and grayscale directly to an element, while backdrop-filter applies similar effects to the area behind an element, commonly used for glass-like UI.",
    code: `.image {
  filter: grayscale(50%) brightness(1.1);
}
.glass-panel {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2);
}`,
  },
  {
    order: 29,
    title: "Multi-column Layout",
    theory: "The column-count and column-width properties split content into multiple newspaper-style columns automatically, with column-gap and column-rule controlling spacing and dividing lines between them.",
    code: `.article {
  column-count: 3;
  column-gap: 24px;
  column-rule: 1px solid #ddd;
}`,
  },
  {
    order: 30,
    title: "Aspect Ratio",
    theory: "The aspect-ratio property defines a preferred width-to-height ratio for an element, so its size scales proportionally without needing manual calculations, commonly used for responsive images and video containers.",
    code: `.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
}
.square-thumb {
  aspect-ratio: 1 / 1;
}`,
  },
  {
    order: 31,
    title: "CSS Functions: clamp, min, and max",
    theory: "Clamp sets a value that scales fluidly between a minimum and maximum bound based on a preferred value, while min and max pick the smallest or largest of a list of values, all enabling more responsive sizing without media queries.",
    code: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
.container {
  width: min(90%, 1200px);
  padding: max(16px, 2vw);
}`,
  },
  {
    order: 32,
    title: "Container Queries",
    theory: "Container queries allow styles to respond to the size of a containing element rather than the viewport, enabled by declaring container-type on a parent and then querying it with the container rule.",
    code: `.card-wrapper {
  container-type: inline-size;
}
@container (min-width: 400px) {
  .card {
    display: flex;
  }
}`,
  },
];
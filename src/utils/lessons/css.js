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
];
module.exports = [
  {
    order: 1,
    title: "Components and Props",
    theory: "React apps are built from components, reusable pieces of UI that accept props as input and return JSX. Props are read only and flow one way, from parent to child.",
    code: `const Greeting = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

const App = () => {
  return <Greeting name="Shahnawaz" />;
};`,
  },
  {
    order: 2,
    title: "useState and useEffect",
    theory: "useState lets a component hold local state that persists between renders. useEffect runs side effects like data fetching after render, and can clean up when the component unmounts or dependencies change.",
    code: `import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};`,
  },
];
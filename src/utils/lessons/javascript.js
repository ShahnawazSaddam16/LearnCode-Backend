module.exports = [
  {
    order: 1,
    title: "Variables and Data Types",
    theory: "JavaScript has three ways to declare variables: var, let, and const. let and const are block scoped and preferred over var. Primitive types include string, number, boolean, null, undefined, and symbol, while objects and arrays are reference types.",
    code: `const name = "Shahnawaz";
let age = 25;
const isDeveloper = true;

console.log(typeof name, typeof age, typeof isDeveloper);`,
  },
  {
    order: 2,
    title: "Async/Await and Promises",
    theory: "Promises represent a value that may be available now, later, or never. Async functions let you write asynchronous code that reads like synchronous code by using await to pause execution until a promise resolves.",
    code: `const fetchUser = async () => {
  try {
    const res = await fetch("https://api.example.com/user");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};`,
  },
];
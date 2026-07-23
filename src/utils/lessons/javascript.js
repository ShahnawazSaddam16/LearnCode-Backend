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
  {
    order: 3,
    title: "Functions and Arrow Functions",
    theory: "Functions are reusable blocks of code declared with the function keyword or as arrow functions using a concise syntax. Arrow functions do not bind their own this value, inheriting it from the surrounding scope instead.",
    code: `function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

console.log(add(2, 3), multiply(2, 3));`,
  },
  {
    order: 4,
    title: "Template Literals",
    theory: "Template literals use backticks instead of quotes, allowing embedded expressions with dollar and curly brace syntax and multi-line strings without concatenation.",
    code: `const name = "Ali";
const age = 25;

const message = \`\${name} is \${age} years old.
Welcome aboard!\`;

console.log(message);`,
  },
  {
    order: 5,
    title: "Arrays and Basic Array Operations",
    theory: "Arrays are ordered collections of values accessed by numeric index, with a length property and methods for adding, removing, and searching elements such as push, pop, shift, and unshift.",
    code: `const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
fruits.pop();

console.log(fruits, fruits.length);`,
  },
  {
    order: 6,
    title: "Objects and Object Methods",
    theory: "Objects store key-value pairs and represent structured data. Properties can be accessed with dot or bracket notation, and built-in methods like Object.keys, Object.values, and Object.entries help iterate over their contents.",
    code: `const user = { name: "Sara", age: 22 };

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));`,
  },
  {
    order: 7,
    title: "Destructuring Arrays and Objects",
    theory: "Destructuring extracts values from arrays or properties from objects into distinct variables using a concise syntax, optionally renaming variables or assigning default values.",
    code: `const [first, second] = ["one", "two"];
const { name, age = 18 } = { name: "Zain" };

console.log(first, second, name, age);`,
  },
  {
    order: 8,
    title: "Spread and Rest Operators",
    theory: "The spread operator expands an array or object into individual elements, useful for copying or merging. The rest operator collects remaining arguments or elements into a single array within function parameters or destructuring.",
    code: `const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];

function sum(...values) {
  return values.reduce((a, b) => a + b, 0);
}

console.log(moreNums, sum(1, 2, 3));`,
  },
  {
    order: 9,
    title: "Conditional Statements",
    theory: "Conditional statements control program flow based on boolean expressions. The if-else structure branches based on conditions, while the switch statement compares a single value against multiple cases.",
    code: `const grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else {
  console.log("C");
}

switch (grade >= 80) {
  case true:
    console.log("Good job");
    break;
  default:
    console.log("Keep trying");
}`,
  },
  {
    order: 10,
    title: "Loops: for, while, and for...of",
    theory: "Loops repeat a block of code. The for loop uses a counter, while loops run based on a condition, and for...of iterates directly over the values of an iterable like an array or string.",
    code: `for (let i = 0; i < 3; i++) {
  console.log(i);
}

let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

for (const fruit of ["apple", "banana"]) {
  console.log(fruit);
}`,
  },
  {
    order: 11,
    title: "The for...in Loop",
    theory: "The for...in loop iterates over the enumerable property names of an object, making it useful for inspecting object keys, though it is generally avoided for arrays in favor of for...of.",
    code: `const car = { brand: "Toyota", model: "Corolla", year: 2022 };

for (const key in car) {
  console.log(key, car[key]);
}`,
  },
  {
    order: 12,
    title: "Ternary Operator",
    theory: "The ternary operator is a shorthand for a simple if-else statement, evaluating a condition and returning one of two values depending on whether it is true or false.",
    code: `const age = 20;
const status = age >= 18 ? "adult" : "minor";

console.log(status);`,
  },
  {
    order: 13,
    title: "Truthy and Falsy Values",
    theory: "Every value in JavaScript is either truthy or falsy when evaluated in a boolean context. Falsy values include false, 0, empty string, null, undefined, and NaN, while everything else is truthy.",
    code: `const values = [0, "", null, undefined, NaN, "hello", 1, []];

values.forEach((v) => console.log(v, Boolean(v)));`,
  },
  {
    order: 14,
    title: "Equality: == vs ===",
    theory: "The loose equality operator coerces operands to the same type before comparing, which can cause unexpected results, while the strict equality operator compares both value and type without coercion and is generally preferred.",
    code: `console.log(1 == "1");
console.log(1 === "1");
console.log(null == undefined);
console.log(null === undefined);`,
  },
  {
    order: 15,
    title: "Scope and Hoisting",
    theory: "Scope determines where variables are accessible. Function scope applies to var, while let and const are block scoped. Hoisting moves declarations to the top of their scope during compilation, though only var declarations are initialized as undefined.",
    code: `console.log(hoistedVar);
var hoistedVar = "I am hoisted";

function scopeTest() {
  if (true) {
    let blockScoped = "only visible here";
    console.log(blockScoped);
  }
}
scopeTest();`,
  },
  {
    order: 16,
    title: "Closures",
    theory: "A closure is formed when an inner function retains access to variables from its outer function's scope even after the outer function has finished executing, enabling data privacy and stateful functions.",
    code: `function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter(), counter(), counter());`,
  },
  {
    order: 17,
    title: "The this Keyword",
    theory: "The value of this depends on how a function is called. In a regular method call it refers to the object before the dot, in a standalone function call it may be undefined in strict mode, and arrow functions inherit this from their enclosing scope.",
    code: `const person = {
  name: "Hina",
  greet() {
    console.log(\`Hi, I am \${this.name}\`);
  },
};

person.greet();`,
  },
  {
    order: 18,
    title: "call, apply, and bind",
    theory: "call and apply invoke a function immediately with a specified this value, differing in how arguments are passed, while bind returns a new function permanently bound to a given this value for later use.",
    code: `function introduce(greeting) {
  console.log(\`\${greeting}, I am \${this.name}\`);
}

const user = { name: "Bilal" };

introduce.call(user, "Hello");
introduce.apply(user, ["Hi"]);
const boundIntroduce = introduce.bind(user);
boundIntroduce("Hey");`,
  },
  {
    order: 19,
    title: "Higher-Order Functions",
    theory: "A higher-order function is one that takes another function as an argument, returns a function, or both, enabling powerful abstractions like map, filter, and function factories.",
    code: `function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5));`,
  },
  {
    order: 20,
    title: "Array Methods: map, filter, and reduce",
    theory: "map transforms each element of an array into a new array. filter selects elements matching a condition. reduce accumulates array elements into a single value based on a callback function.",
    code: `const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log(doubled, evens, total);`,
  },
  {
    order: 21,
    title: "Array Methods: find, some, every, and includes",
    theory: "find returns the first element matching a condition. some checks if at least one element satisfies a condition. every checks if all elements satisfy a condition. includes checks whether a specific value exists in the array.",
    code: `const numbers = [1, 2, 3, 4, 5];

console.log(numbers.find((n) => n > 3));
console.log(numbers.some((n) => n > 4));
console.log(numbers.every((n) => n > 0));
console.log(numbers.includes(3));`,
  },
  {
    order: 22,
    title: "String Methods",
    theory: "Strings have many built-in methods for manipulation, including slice and substring for extracting parts, toUpperCase and toLowerCase for casing, trim for removing whitespace, and split for converting to an array.",
    code: `const text = "  Hello World  ";

console.log(text.trim());
console.log(text.trim().toUpperCase());
console.log(text.trim().split(" "));
console.log(text.includes("World"));`,
  },
  {
    order: 23,
    title: "Number Methods and the Math Object",
    theory: "Number methods like toFixed format decimal precision, while the Math object provides utilities such as Math.round, Math.floor, Math.ceil, Math.random, and Math.max for numeric calculations.",
    code: `console.log((3.14159).toFixed(2));
console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.random());
console.log(Math.max(3, 7, 2));`,
  },
  {
    order: 24,
    title: "The Date Object",
    theory: "The Date object represents a specific point in time and provides methods to get or set components like year, month, day, and time, as well as formatting and comparison between dates.",
    code: `const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.toISOString());`,
  },
  {
    order: 25,
    title: "JSON: parse and stringify",
    theory: "JSON.stringify converts a JavaScript object into a JSON string, commonly used when sending data over a network. JSON.parse converts a JSON string back into a usable JavaScript object.",
    code: `const user = { name: "Ayesha", age: 27 };

const jsonString = JSON.stringify(user);
const parsedBack = JSON.parse(jsonString);

console.log(jsonString, parsedBack);`,
  },
  {
    order: 26,
    title: "Error Handling: try, catch, and finally",
    theory: "The try block contains code that might throw an error, the catch block handles that error if it occurs, and the finally block runs regardless of whether an error was thrown, often used for cleanup.",
    code: `try {
  const result = JSON.parse("invalid json");
} catch (err) {
  console.log("Something went wrong:", err.message);
} finally {
  console.log("Done attempting to parse");
}`,
  },
  {
    order: 27,
    title: "Custom Errors",
    theory: "Custom error classes extend the built-in Error class to represent specific failure types in an application, allowing more descriptive error handling and easier identification with instanceof checks.",
    code: `class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input");
} catch (err) {
  console.log(err.name, err.message);
}`,
  },
  {
    order: 28,
    title: "Classes and Constructors",
    theory: "Classes provide a template for creating objects with shared properties and methods. The constructor method runs when a new instance is created, initializing that instance's properties.",
    code: `class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(\`\${this.name} says \${this.sound}\`);
  }
}

const dog = new Animal("Dog", "Woof");
dog.makeSound();`,
  },
  {
    order: 29,
    title: "Class Inheritance",
    theory: "Classes can extend other classes using the extends keyword, inheriting their properties and methods. The super keyword calls the parent class's constructor or methods from within a child class.",
    code: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(\`\${this.name} barks\`);
  }
}

new Dog("Rex").speak();`,
  },
  {
    order: 30,
    title: "Getters and Setters",
    theory: "Getters and setters are special class methods that allow properties to be accessed or assigned like normal fields while running custom logic behind the scenes, using the get and set keywords.",
    code: `class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get area() {
    return Math.PI * this._radius ** 2;
  }
  set radius(value) {
    this._radius = value;
  }
}

const c = new Circle(5);
console.log(c.area);
c.radius = 10;
console.log(c.area);`,
  },
  {
    order: 31,
    title: "Static Methods and Properties",
    theory: "Static members belong to the class itself rather than to instances, commonly used for utility functions or constants related to the class that do not depend on individual instance data.",
    code: `class MathHelper {
  static PI = 3.14159;
  static square(n) {
    return n * n;
  }
}

console.log(MathHelper.PI);
console.log(MathHelper.square(4));`,
  },
  {
    order: 32,
    title: "Prototypes and Prototypal Inheritance",
    theory: "Every JavaScript object has an internal prototype it inherits properties and methods from. Classes are largely syntactic sugar over this prototype-based inheritance model, which can also be set up manually using Object.create.",
    code: `const animal = {
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  },
};

const dog = Object.create(animal);
dog.name = "Buddy";
dog.speak();`,
  },
  {
    order: 33,
    title: "Modules: import and export",
    theory: "ES modules split code across files using export to expose values and import to bring them into another file, supporting both named exports for multiple values and a default export for a file's primary value.",
    code: `export const PI = 3.14159;
export default function square(n) {
  return n * n;
}

import square, { PI } from "./mathUtils.js";`,
  },
  {
    order: 34,
    title: "setTimeout and setInterval",
    theory: "setTimeout schedules a function to run once after a specified delay, while setInterval repeatedly runs a function at a fixed time interval until cleared with clearInterval or clearTimeout.",
    code: `setTimeout(() => {
  console.log("Runs once after 1 second");
}, 1000);

const intervalId = setInterval(() => {
  console.log("Runs every 2 seconds");
}, 2000);

setTimeout(() => clearInterval(intervalId), 6000);`,
  },
  {
    order: 35,
    title: "The Event Loop and Call Stack",
    theory: "JavaScript runs on a single call stack that executes code line by line. Asynchronous operations are handed off to the browser or runtime, and their callbacks are placed in a queue that the event loop pushes back onto the stack once it is empty.",
    code: `console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");`,
  },
  {
    order: 36,
    title: "Microtasks vs Macrotasks",
    theory: "Promise callbacks are queued as microtasks, which run immediately after the current synchronous code finishes and before any macrotasks like setTimeout callbacks, leading to a predictable but sometimes surprising execution order.",
    code: `console.log("Start");

setTimeout(() => console.log("Macrotask"), 0);

Promise.resolve().then(() => console.log("Microtask"));

console.log("End");`,
  },
  {
    order: 37,
    title: "DOM Selection and Manipulation",
    theory: "The Document Object Model represents the page as a tree of nodes. Methods like querySelector and getElementById select elements, while properties like textContent, innerHTML, and classList allow reading or modifying their content and styling.",
    code: `const heading = document.querySelector("h1");
heading.textContent = "Updated Title";
heading.classList.add("highlighted");

const items = document.querySelectorAll(".item");
items.forEach((item) => item.classList.add("visible"));`,
  },
  {
    order: 38,
    title: "DOM Events and Event Listeners",
    theory: "Event listeners attach functions that run in response to user interactions or browser events, such as clicks, input changes, or page load, using the addEventListener method with an event type and callback.",
    code: `const button = document.querySelector("#submitBtn");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Button clicked");
});`,
  },
  {
    order: 39,
    title: "Event Delegation and Bubbling",
    theory: "Events bubble up from the target element through its ancestors, allowing a single listener on a parent element to handle events from many children, which is more efficient than attaching listeners to each child individually.",
    code: `document.querySelector("#list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked item:", event.target.textContent);
  }
});`,
  },
  {
    order: 40,
    title: "Fetch API and HTTP Requests",
    theory: "The fetch function makes HTTP requests to servers and returns a promise that resolves to a response object, which can be parsed as JSON, text, or other formats, and supports custom methods, headers, and bodies for POST requests.",
    code: `const createUser = async (userData) => {
  const res = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};`,
  },
  {
    order: 41,
    title: "Promise.all, Promise.race, and Promise.allSettled",
    theory: "Promise.all resolves when every promise in an array resolves, rejecting if any one fails. Promise.race settles as soon as the first promise settles. Promise.allSettled waits for all promises and returns their outcomes regardless of success or failure.",
    code: `const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject("error");

Promise.all([p1, p2]).then(console.log);
Promise.race([p1, p2]).then(console.log);
Promise.allSettled([p1, p3]).then(console.log);`,
  },
  {
    order: 42,
    title: "Optional Chaining and Nullish Coalescing",
    theory: "Optional chaining safely accesses nested object properties without throwing an error if an intermediate value is null or undefined, while nullish coalescing provides a fallback value only when the left side is null or undefined.",
    code: `const user = { profile: { name: "Zara" } };

console.log(user?.profile?.name);
console.log(user?.address?.city);
console.log(user?.address?.city ?? "Unknown");`,
  },
  {
    order: 43,
    title: "Map and Set Data Structures",
    theory: "Map stores key-value pairs with keys of any type and preserves insertion order, offering better performance for frequent additions and removals than plain objects. Set stores unique values with no duplicates.",
    code: `const map = new Map();
map.set("name", "Fahad");
map.set("age", 30);

const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);

console.log(map.get("name"), [...uniqueNumbers]);`,
  },
  {
    order: 44,
    title: "WeakMap and WeakSet",
    theory: "WeakMap and WeakSet hold weak references to their key objects, allowing those objects to be garbage collected when no other references exist, making them useful for storing metadata without causing memory leaks.",
    code: `const wm = new WeakMap();
let obj = { id: 1 };

wm.set(obj, "some metadata");
console.log(wm.get(obj));

obj = null;`,
  },
  {
    order: 45,
    title: "Generators and Iterators",
    theory: "Generator functions, defined with an asterisk, can pause and resume execution using the yield keyword, producing a sequence of values on demand rather than all at once, and are consumed using the next method or for...of loops.",
    code: `function* countUpTo(max) {
  let count = 1;
  while (count <= max) {
    yield count;
    count++;
  }
}

for (const num of countUpTo(3)) {
  console.log(num);
}`,
  },
  {
    order: 46,
    title: "Symbols",
    theory: "Symbol is a primitive type that creates unique and immutable identifiers, often used as object property keys to avoid naming collisions, since every symbol value is guaranteed to be different from every other.",
    code: `const id = Symbol("id");
const user = {
  [id]: 123,
  name: "Noor",
};

console.log(user[id], user.name);`,
  },
  {
    order: 47,
    title: "Immediately Invoked Function Expressions (IIFE)",
    theory: "An IIFE is a function that runs as soon as it is defined, wrapped in parentheses to be treated as an expression, historically used to create a private scope and avoid polluting the global namespace.",
    code: `(function () {
  const secret = "hidden value";
  console.log(secret);
})();

(() => {
  console.log("Arrow IIFE runs immediately");
})();`,
  },
  {
    order: 48,
    title: "Currying and Function Composition",
    theory: "Currying transforms a function that takes multiple arguments into a sequence of functions that each take a single argument. Function composition combines multiple functions so the output of one becomes the input of the next.",
    code: `const curryAdd = (a) => (b) => (c) => a + b + c;
console.log(curryAdd(1)(2)(3));

const compose = (f, g) => (x) => f(g(x));
const addOne = (x) => x + 1;
const double = (x) => x * 2;
const addThenDouble = compose(double, addOne);
console.log(addThenDouble(3));`,
  },
];
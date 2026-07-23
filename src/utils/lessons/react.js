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
  {
    order: 3,
    title: "Conditional Rendering",
    theory: "React lets you render different UI based on state or props using JavaScript expressions like ternaries, logical AND, or early returns inside JSX.",
    code: `const Status = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back</p> : <p>Please log in</p>}
      {isLoggedIn && <button>Logout</button>}
    </div>
  );
};`,
  },
  {
    order: 4,
    title: "Lists and Keys",
    theory: "Arrays of data are rendered using map to produce JSX elements. Each element needs a unique key prop so React can efficiently track changes between renders.",
    code: `const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};`,
  },
  {
    order: 5,
    title: "Event Handling",
    theory: "React wraps native DOM events in a SyntheticEvent system. Handlers are passed as camelCase props like onClick or onChange and receive the event object as an argument.",
    code: `const ClickButton = () => {
  const handleClick = (event) => {
    console.log("Clicked", event.target);
  };

  return <button onClick={handleClick}>Click me</button>;
};`,
  },
  {
    order: 6,
    title: "Forms and Controlled Components",
    theory: "A controlled component keeps input values in React state, updating them via onChange. This gives full control over validation and formatting as the user types.",
    code: `const NameForm = () => {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};`,
  },
  {
    order: 7,
    title: "Lifting State Up",
    theory: "When two components need to share state, that state is moved to their closest common parent, which passes it down as props along with updater functions.",
    code: `const Parent = () => {
  const [temp, setTemp] = useState(20);

  return (
    <div>
      <Display temp={temp} />
      <Slider temp={temp} onChange={setTemp} />
    </div>
  );
};`,
  },
  {
    order: 8,
    title: "Component Composition and Children",
    theory: "The children prop lets a component render whatever is placed between its opening and closing tags, enabling flexible wrapper and layout components.",
    code: `const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const App = () => {
  return (
    <Card>
      <p>Content inside the card</p>
    </Card>
  );
};`,
  },
  {
    order: 9,
    title: "useRef",
    theory: "useRef creates a mutable object that persists across renders without causing re-renders when changed. It is commonly used to access DOM nodes directly.",
    code: `const FocusInput = () => {
  const inputRef = useRef(null);

  const focus = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  );
};`,
  },
  {
    order: 10,
    title: "useContext",
    theory: "Context lets data be shared across a component tree without passing props manually at every level. useContext reads the nearest matching Provider value.",
    code: `const ThemeContext = createContext("light");

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
};`,
  },
  {
    order: 11,
    title: "useReducer",
    theory: "useReducer manages complex state transitions using a reducer function and dispatched actions, similar to Redux but scoped to a single component.",
    code: `const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      {state.count}
    </button>
  );
};`,
  },
  {
    order: 12,
    title: "Custom Hooks",
    theory: "Custom hooks are functions starting with use that extract and reuse stateful logic across multiple components, following the same rules as built in hooks.",
    code: `const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return width;
};`,
  },
  {
    order: 13,
    title: "useMemo",
    theory: "useMemo caches the result of an expensive calculation between renders, recomputing only when its dependencies change, which helps avoid unnecessary work.",
    code: `const ExpensiveList = ({ items }) => {
  const sorted = useMemo(() => {
    return [...items].sort((a, b) => a - b);
  }, [items]);

  return <ul>{sorted.map((n) => <li key={n}>{n}</li>)}</ul>;
};`,
  },
  {
    order: 14,
    title: "useCallback",
    theory: "useCallback memoizes a function reference so it does not get recreated on every render, which is useful when passing callbacks to memoized child components.",
    code: `const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return <Child onClick={handleClick} />;
};`,
  },
  {
    order: 15,
    title: "React.memo",
    theory: "React.memo wraps a component to skip re-rendering when its props have not changed, which can improve performance for components that render frequently.",
    code: `const Row = React.memo(({ label }) => {
  return <li>{label}</li>;
});

export default Row;`,
  },
  {
    order: 16,
    title: "Fragments",
    theory: "Fragments let a component return multiple elements without adding an extra wrapper node to the DOM, using either React.Fragment or the shorthand syntax.",
    code: `const Pair = () => {
  return (
    <>
      <td>Name</td>
      <td>Shahnawaz</td>
    </>
  );
};`,
  },
  {
    order: 17,
    title: "Portals",
    theory: "Portals render children into a DOM node outside the parent hierarchy, which is useful for modals, tooltips, and dropdowns that must escape overflow containers.",
    code: `import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
};`,
  },
  {
    order: 18,
    title: "Error Boundaries",
    theory: "Error boundaries are class components that catch JavaScript errors in their child tree during rendering and display a fallback UI instead of crashing the app.",
    code: `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong</h1>;
    return this.props.children;
  }
}`,
  },
  {
    order: 19,
    title: "Higher-Order Components",
    theory: "A higher-order component is a function that takes a component and returns a new component with added props or behavior, enabling logic reuse across components.",
    code: `const withLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
};`,
  },
  {
    order: 20,
    title: "Render Props",
    theory: "The render props pattern shares logic between components by passing a function as a prop, which the component calls to determine what to render.",
    code: `const MouseTracker = ({ render }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)}
    </div>
  );
};`,
  },
  {
    order: 21,
    title: "Context API Deep Dive",
    theory: "Combining useReducer with Context creates a lightweight global store, letting deeply nested components dispatch actions and read shared state without prop drilling.",
    code: `const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};`,
  },
  {
    order: 22,
    title: "React Router Basics",
    theory: "React Router maps URL paths to components, letting a single page application render different views without a full page reload as the user navigates.",
    code: `import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};`,
  },
  {
    order: 23,
    title: "Dynamic Routing and Params",
    theory: "Route paths can include dynamic segments like :id, which the useParams hook reads so a component can fetch or display data for that specific resource.",
    code: `import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  return <p>Viewing user {id}</p>;
};`,
  },
  {
    order: 24,
    title: "Nested Routes",
    theory: "Routes can be nested inside other routes, sharing a common layout. The Outlet component marks where the matched child route should render.",
    code: `const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};`,
  },
  {
    order: 25,
    title: "Programmatic Navigation",
    theory: "The useNavigate hook lets you redirect users in response to events like form submission or button clicks, instead of relying only on Link components.",
    code: `import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  return <button onClick={handleSubmit}>Log In</button>;
};`,
  },
  {
    order: 26,
    title: "Protected Routes",
    theory: "A protected route checks authentication status before rendering its content, redirecting unauthenticated users to a login page using Navigate.",
    code: `const ProtectedRoute = ({ isAuthed, children }) => {
  if (!isAuthed) return <Navigate to="/login" />;
  return children;
};`,
  },
  {
    order: 27,
    title: "Fetching Data with fetch",
    theory: "Data fetching is typically done inside useEffect, storing the result in state and handling the asynchronous request with async and await or promise chains.",
    code: `const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
};`,
  },
  {
    order: 28,
    title: "Loading and Error States",
    theory: "Well behaved data fetching components track loading and error states separately from the data itself, so the UI can show spinners or error messages appropriately.",
    code: `const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;
  return <ul>{posts.map((p) => <li key={p.id}>{p.title}</li>)}</ul>;
};`,
  },
  {
    order: 29,
    title: "Debouncing Input",
    theory: "Debouncing delays a function call until the user has stopped typing for a set period, reducing unnecessary API calls during search input.",
    code: `const SearchBox = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(\`/api/search?q=\${query}\`);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
};`,
  },
  {
    order: 30,
    title: "Pagination",
    theory: "Pagination splits large data sets into pages, tracking the current page in state and requesting only the relevant slice of data from the server.",
    code: `const List = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(\`/api/items?page=\${page}\`)
      .then((res) => res.json())
      .then(setItems);
  }, [page]);

  return (
    <div>
      <ul>{items.map((i) => <li key={i.id}>{i.name}</li>)}</ul>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
};`,
  },
  {
    order: 31,
    title: "Infinite Scroll",
    theory: "Infinite scroll loads more data automatically as the user nears the bottom of the page, often implemented with the IntersectionObserver API on a sentinel element.",
    code: `const Feed = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={loaderRef} />;
};`,
  },
  {
    order: 32,
    title: "Form Validation",
    theory: "Client side validation checks input values against rules before submission, updating an errors object in state to show relevant messages to the user.",
    code: `const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setError("Invalid email");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {error && <p>{error}</p>}
      <button onClick={validate}>Submit</button>
    </div>
  );
};`,
  },
  {
    order: 33,
    title: "Controlled vs Uncontrolled Inputs",
    theory: "Uncontrolled inputs manage their own state internally and are read via refs, while controlled inputs are fully driven by React state, offering different tradeoffs.",
    code: `const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} defaultValue="Shahnawaz" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};`,
  },
  {
    order: 34,
    title: "useLayoutEffect",
    theory: "useLayoutEffect runs synchronously after DOM mutations but before the browser paints, useful for measuring layout or preventing visual flicker.",
    code: `const Box = () => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const height = boxRef.current.getBoundingClientRect().height;
    console.log("Measured height", height);
  }, []);

  return <div ref={boxRef}>Content</div>;
};`,
  },
  {
    order: 35,
    title: "Suspense and Lazy Loading",
    theory: "React.lazy loads a component only when it is needed, and Suspense shows a fallback UI while the component's code is being fetched.",
    code: `const Settings = React.lazy(() => import("./Settings"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Settings />
    </Suspense>
  );
};`,
  },
  {
    order: 36,
    title: "Code Splitting",
    theory: "Code splitting breaks a large bundle into smaller chunks that load on demand, reducing initial load time by combining dynamic imports with lazy loading.",
    code: `const loadChart = () => import("./Chart");

const Dashboard = () => {
  const [Chart, setChart] = useState(null);

  useEffect(() => {
    loadChart().then((mod) => setChart(() => mod.default));
  }, []);

  return Chart ? <Chart /> : <p>Loading chart...</p>;
};`,
  },
  {
    order: 37,
    title: "Performance Optimization Basics",
    theory: "Common performance techniques include memoizing components and callbacks, avoiding inline object creation in render, and windowing long lists.",
    code: `const Item = React.memo(({ value, onSelect }) => {
  return <li onClick={() => onSelect(value)}>{value}</li>;
});`,
  },
  {
    order: 38,
    title: "Virtual DOM and Reconciliation",
    theory: "React keeps a virtual representation of the UI in memory and diffs it against the previous version to compute the minimal set of real DOM updates needed.",
    code: `const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};`,
  },
  {
    order: 39,
    title: "Keys and Reconciliation Pitfalls",
    theory: "Using array indices as keys can cause subtle bugs when list order changes, since React may reuse the wrong DOM node for a shifted item.",
    code: `const items = [{ id: "a1", text: "First" }, { id: "b2", text: "Second" }];

const List = () => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};`,
  },
  {
    order: 40,
    title: "CSS Modules",
    theory: "CSS Modules scope class names locally to a component file by default, preventing style collisions across the app while still writing plain CSS.",
    code: `import styles from "./Button.module.css";

const Button = () => {
  return <button className={styles.primary}>Click</button>;
};`,
  },
  {
    order: 41,
    title: "Styled Components",
    theory: "Styled components let you write CSS directly inside JavaScript using tagged template literals, generating scoped styled React components.",
    code: `import styled from "styled-components";

const Button = styled.button\`
  background: teal;
  color: white;
  padding: 8px 16px;
\`;`,
  },
  {
    order: 42,
    title: "Tailwind Integration",
    theory: "Tailwind CSS provides utility classes applied directly in JSX className attributes, allowing rapid styling without writing separate CSS files.",
    code: `const Card = () => {
  return (
    <div className="bg-slate-800 text-white rounded-lg p-4 shadow-lg">
      Tailwind styled card
    </div>
  );
};`,
  },
  {
    order: 43,
    title: "Animations with Framer Motion",
    theory: "Framer Motion adds declarative animations to React components using the motion component, animating properties between defined states.",
    code: `import { motion } from "framer-motion";

const FadeIn = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello
    </motion.div>
  );
};`,
  },
  {
    order: 44,
    title: "Redux Basics",
    theory: "Redux centralizes application state in a single store, updated only through dispatched actions processed by pure reducer functions.",
    code: `const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);`,
  },
  {
    order: 45,
    title: "Redux Toolkit",
    theory: "Redux Toolkit simplifies Redux setup with createSlice and configureStore, reducing boilerplate while still following the same core principles.",
    code: `import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

const store = configureStore({ reducer: counterSlice.reducer });`,
  },
  {
    order: 46,
    title: "Zustand",
    theory: "Zustand is a minimal state management library that creates a store using a hook, avoiding providers and reducing boilerplate compared to Redux.",
    code: `import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));`,
  },
  {
    order: 47,
    title: "TanStack Query",
    theory: "TanStack Query manages server state with caching, background refetching, and loading states built in, replacing manual useEffect data fetching patterns.",
    code: `import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  return <ul>{data.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
};`,
  },
  {
    order: 48,
    title: "Testing with Jest",
    theory: "Jest is a test runner that provides assertions and mocking utilities, commonly used to test pure functions and component logic in isolation.",
    code: `const add = (a, b) => a + b;

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});`,
  },
  {
    order: 49,
    title: "Testing with React Testing Library",
    theory: "React Testing Library renders components in a simulated DOM and lets tests query elements the way a user would, focusing on behavior over implementation.",
    code: `import { render, screen, fireEvent } from "@testing-library/react";

test("increments count", () => {
  render(<Counter />);
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByText("1")).toBeInTheDocument();
});`,
  },
  {
    order: 50,
    title: "Accessibility Basics",
    theory: "Accessible React apps use semantic HTML, proper aria attributes, and keyboard navigable interactive elements so all users can operate the interface.",
    code: `const IconButton = ({ onClick }) => {
  return (
    <button aria-label="Close dialog" onClick={onClick}>
      X
    </button>
  );
};`,
  },
  {
    order: 51,
    title: "Server-Side Rendering Concepts",
    theory: "Server-side rendering generates HTML on the server for each request, improving initial load performance and search engine indexing compared to pure client rendering.",
    code: `const renderPage = (req, res) => {
  const html = renderToString(<App />);
  res.send(\`<html><body><div id="root">\${html}</div></body></html>\`);
};`,
  },
  {
    order: 52,
    title: "Next.js Basics",
    theory: "Next.js is a React framework that adds file based routing, server-side rendering, and built in optimizations on top of the React library.",
    code: `const HomePage = () => {
  return <h1>Welcome to Next.js</h1>;
};

export default HomePage;`,
  },
  {
    order: 53,
    title: "Static vs Dynamic Rendering",
    theory: "Next.js pages can be statically generated at build time for speed, or rendered dynamically per request when data changes frequently or depends on the user.",
    code: `export const getStaticProps = async () => {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();
  return { props: { posts } };
};`,
  },
  {
    order: 54,
    title: "API Routes in Next.js",
    theory: "Next.js API routes let you write backend endpoints inside the same project, handling requests directly from files in the api directory.",
    code: `export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Hello" });
  }
}`,
  },
  {
    order: 55,
    title: "Environment Variables and Config",
    theory: "Environment variables store secrets and configuration outside the codebase, with framework specific prefixes like NEXT_PUBLIC controlling client side exposure.",
    code: `const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchData = () => {
  return fetch(apiUrl).then((res) => res.json());
};`,
  },
  {
    order: 56,
    title: "Deploying a React App",
    theory: "Deploying involves building an optimized production bundle and hosting it on a platform such as Vercel, Netlify, or a VPS with a process manager like PM2.",
    code: `{
  "build": "next build",
  "start": "next start"
}

pm2 start npm --name "app" -- start`,
  },
];
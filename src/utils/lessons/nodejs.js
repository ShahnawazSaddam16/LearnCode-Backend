module.exports = [
  {
    order: 1,
    title: "Building a REST API with Express",
    theory: "Express is a minimal Node.js framework for building web servers and APIs. Routes map HTTP methods and paths to handler functions, and middleware runs logic before those handlers, like parsing JSON or checking authentication.",
    code: `const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  res.status(200).json({ users: [] });
});

app.listen(5000, () => console.log("Server running"));`,
  },
  {
    order: 2,
    title: "JWT Authentication Middleware",
    theory: "JWTs allow stateless authentication by encoding user data into a signed token. A middleware function verifies the token on protected routes and attaches the decoded user to the request object.",
    code: `const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};`,
  },
];
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
  {
    order: 3,
    title: "Error Handling Middleware in Express",
    theory: "Express supports centralized error handling through a special middleware with four arguments. Any error passed to next(err) skips normal middleware and lands here, keeping error formatting consistent across the app.",
    code: `const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  const status = err.statusCode || 500;
  res.status(status).json({ message: err.message || "Server error" });
};

app.get("/api/fail", (req, res, next) => {
  try {
    throw new Error("Something broke");
  } catch (err) {
    next(err);
  }
});

app.use(errorHandler);`,
  },
  {
    order: 4,
    title: "Environment Variables with dotenv",
    theory: "Secrets and config values like API keys and database URLs shouldn't be hardcoded. dotenv loads key-value pairs from a .env file into process.env at runtime, keeping sensitive values out of source control.",
    code: `require("dotenv").config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DATABASE_URL;

console.log("Starting server on port", PORT);
console.log("Connecting to", DB_URL);`,
  },
  {
    order: 5,
    title: "Connecting to MongoDB with Mongoose",
    theory: "Mongoose is an ODM that maps JavaScript objects to MongoDB documents. It manages the connection lifecycle and provides schema validation on top of MongoDB's flexible document model.",
    code: `const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();`,
  },
  {
    order: 6,
    title: "Mongoose Schemas and Models",
    theory: "A schema defines the shape and validation rules for documents in a collection. A model is compiled from a schema and provides the interface for querying and manipulating documents.",
    code: `const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);`,
  },
  {
    order: 7,
    title: "CRUD Operations with Mongoose",
    theory: "Mongoose models expose methods like find, findById, create, updateOne, and deleteOne. Combined with Express routes, these form the standard create, read, update, delete pattern for a resource.",
    code: `const User = require("./User");

app.post("/api/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "Not found" });
  res.json(user);
});

app.put("/api/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

app.delete("/api/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});`,
  },
  {
    order: 8,
    title: "Password Hashing with bcrypt",
    theory: "Storing plaintext passwords is unsafe. bcrypt hashes passwords with a salt so the original value can't be recovered, and compares a submitted password against the stored hash during login.",
    code: `const bcrypt = require("bcrypt");

const hashPassword = async (plain) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
};

const comparePassword = async (plain, hash) => {
  return bcrypt.compare(plain, hash);
};

module.exports = { hashPassword, comparePassword };`,
  },
  {
    order: 9,
    title: "Refresh Tokens and Token Rotation",
    theory: "Access tokens are short-lived to limit exposure if leaked. A longer-lived refresh token, stored securely, is used to request a new access token without forcing the user to log in again.",
    code: `const jwt = require("jsonwebtoken");

const generateTokens = (userId) => {
  const accessToken = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign({ id: userId }, process.env.REFRESH_SECRET, { expiresIn: "7d" });
  return { accessToken, refreshToken };
};

app.post("/api/refresh", (req, res) => {
  const { refreshToken } = req.cookies;
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const tokens = generateTokens(decoded.id);
    res.json(tokens);
  } catch (err) {
    res.status(401).json({ message: "Invalid refresh token" });
  }
});`,
  },
  {
    order: 10,
    title: "Role-Based Access Control",
    theory: "RBAC restricts actions based on a user's assigned role. A middleware checks the role attached to the request (usually set during authentication) before allowing access to a route.",
    code: `const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

app.delete("/api/users/:id", protect, authorize("admin"), async (req, res) => {
  res.json({ message: "User deleted" });
});`,
  },
  {
    order: 11,
    title: "Input Validation with Zod",
    theory: "Validating request bodies before they reach business logic prevents malformed data from causing bugs or security issues. Zod defines schemas and parses incoming data against them, throwing on mismatch.",
    code: `const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten().fieldErrors });
  }
  req.body = result.data;
  next();
};

app.post("/api/users", validate(userSchema), (req, res) => {
  res.status(201).json(req.body);
});`,
  },
  {
    order: 12,
    title: "Rate Limiting with express-rate-limit",
    theory: "Rate limiting protects an API from abuse and brute-force attacks by capping how many requests a client can make within a time window, returning a 429 status once the limit is exceeded.",
    code: `const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { message: "Too many requests, try again later" },
});

app.use("/api/", limiter);`,
  },
  {
    order: 13,
    title: "CORS Configuration",
    theory: "Browsers block cross-origin requests by default. The cors middleware sets response headers that tell the browser which origins, methods, and credentials are permitted for a given API.",
    code: `const cors = require("cors");

const allowedOrigins = ["https://buttnetworks.com", "https://admin-dashboard.buttnetworks.com"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);`,
  },
  {
    order: 14,
    title: "File Uploads with Multer",
    theory: "Multer is middleware for handling multipart/form-data, the encoding used for file uploads. It parses incoming files, stores them to disk or memory, and attaches metadata to the request.",
    code: `const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("avatar"), (req, res) => {
  res.json({ path: req.file.path });
});`,
  },
  {
    order: 15,
    title: "Pagination and Filtering",
    theory: "Returning entire collections in one response doesn't scale. Pagination uses query parameters like page and limit to return a subset of results, often alongside filters for narrowing results further.",
    code: `app.get("/api/users", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const filter = {};
  if (req.query.role) filter.role = req.query.role;

  const users = await User.find(filter).skip(skip).limit(limit);
  const total = await User.countDocuments(filter);

  res.json({ users, total, page, pages: Math.ceil(total / limit) });
});`,
  },
  {
    order: 16,
    title: "Async/Await Error Handling Patterns",
    theory: "Wrapping every async route handler in try/catch gets repetitive. A wrapper function catches rejected promises and forwards them to next(), letting the central error handler deal with them.",
    code: `const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get(
  "/api/users/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) throw Object.assign(new Error("Not found"), { statusCode: 404 });
    res.json(user);
  })
);`,
  },
  {
    order: 17,
    title: "Building a Logger with Winston",
    theory: "console.log doesn't scale for production monitoring. Winston provides structured, leveled logging with multiple transports, so logs can be written to files, consoles, or external services consistently.",
    code: `const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

logger.info("Server started");
logger.error("Something failed");

module.exports = logger;`,
  },
  {
    order: 18,
    title: "Request Validation Middleware Composition",
    theory: "Larger APIs benefit from separating validation schemas per route and composing them as reusable middleware, keeping route handlers focused purely on business logic rather than input checking.",
    code: `const { z } = require("zod");

const schemas = {
  createUser: z.object({ name: z.string(), email: z.string().email() }),
  updateUser: z.object({ name: z.string().optional(), email: z.string().email().optional() }),
};

const validateBody = (key) => (req, res, next) => {
  const result = schemas[key].safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error.flatten());
  req.body = result.data;
  next();
};

app.post("/api/users", validateBody("createUser"), (req, res) => res.status(201).json(req.body));
app.patch("/api/users/:id", validateBody("updateUser"), (req, res) => res.json(req.body));`,
  },
  {
    order: 19,
    title: "Connecting to PostgreSQL with pg",
    theory: "The pg package provides a connection pool for PostgreSQL, reusing connections across queries instead of opening a new one each time, which is important for performance under load.",
    code: `const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

module.exports = { pool, getUsers };`,
  },
  {
    order: 20,
    title: "Using the Supabase Client in Node.js",
    theory: "Supabase provides a JavaScript client that wraps its REST and realtime APIs over a Postgres backend, letting you query tables, manage auth, and handle storage without writing raw SQL for simple cases.",
    code: `const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const getDocuments = async () => {
  const { data, error } = await supabase.from("documents").select("*");
  if (error) throw error;
  return data;
};

module.exports = { supabase, getDocuments };`,
  },
  {
    order: 21,
    title: "Vector Embeddings and pgvector Basics",
    theory: "Embeddings represent text as high-dimensional vectors capturing semantic meaning. pgvector adds a vector column type to Postgres, enabling similarity search with operators like cosine distance directly in SQL.",
    code: `-- Enable extension and create table
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding VECTOR(1536)
);

-- Similarity search by cosine distance
SELECT id, content, 1 - (embedding <=> $1) AS similarity
FROM documents
ORDER BY embedding <=> $1
LIMIT 5;`,
  },
  {
    order: 22,
    title: "Building a RAG Pipeline",
    theory: "Retrieval-Augmented Generation combines a vector search step with an LLM completion step. Relevant chunks are retrieved based on similarity to the query, then passed as context so the model answers grounded in real data.",
    code: `const getRelevantChunks = async (queryEmbedding) => {
  const { data } = await supabase.rpc("match_documents", {
    query_embedding: queryEmbedding,
    match_threshold: 0.75,
    match_count: 5,
  });
  return data;
};

const buildPrompt = (chunks, question) => {
  const context = chunks.map((c) => c.content).join("\\n\\n");
  return \`Context:\\n\${context}\\n\\nQuestion: \${question}\\nAnswer using only the context above.\`;
};`,
  },
  {
    order: 23,
    title: "Integrating Groq API for Completions",
    theory: "Groq exposes an OpenAI-compatible chat completions endpoint that runs open models at high inference speed. A single POST request with a messages array returns a generated response.",
    code: `const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const getCompletion = async (systemPrompt, userMessage) => {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
  });
  return response.choices[0].message.content;
};

module.exports = { getCompletion };`,
  },
  {
    order: 24,
    title: "WebSockets with Socket.io",
    theory: "Unlike HTTP's request-response cycle, WebSockets keep a persistent connection open for real-time, bidirectional communication. Socket.io wraps this with automatic reconnection and event-based messaging.",
    code: `const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Client connected", socket.id);

  socket.on("message", (data) => {
    io.emit("message", data);
  });

  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(5000);`,
  },
  {
    order: 25,
    title: "Building a Webhook Handler",
    theory: "Webhooks let external services notify your server when events occur. A handler verifies the payload signature to confirm authenticity, then processes the event asynchronously.",
    code: `const crypto = require("crypto");

app.post("/webhooks/provider", express.raw({ type: "application/json" }), (req, res) => {
  const signature = req.headers["x-signature"];
  const expected = crypto
    .createHmac("sha256", process.env.WEBHOOK_SECRET)
    .update(req.body)
    .digest("hex");

  if (signature !== expected) {
    return res.status(401).json({ message: "Invalid signature" });
  }

  const event = JSON.parse(req.body);
  console.log("Received event:", event.type);
  res.status(200).send("OK");
});`,
  },
  {
    order: 26,
    title: "WhatsApp Cloud API Integration",
    theory: "The WhatsApp Cloud API delivers incoming messages to a webhook URL and accepts outgoing messages via a REST endpoint authenticated with a permanent access token tied to a phone number ID.",
    code: `const axios = require("axios");

const sendMessage = async (to, body) => {
  await axios.post(
    \`https://graph.facebook.com/v20.0/\${process.env.PHONE_NUMBER_ID}/messages\`,
    {
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body },
    },
    { headers: { Authorization: \`Bearer \${process.env.WHATSAPP_TOKEN}\` } }
  );
};

app.post("/webhook", express.json(), async (req, res) => {
  const message = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  if (message) {
    await sendMessage(message.from, "Got your message!");
  }
  res.sendStatus(200);
});`,
  },
  {
    order: 27,
    title: "Queueing Jobs with BullMQ",
    theory: "Long-running or bursty tasks like sending emails or processing files shouldn't block request handlers. BullMQ, backed by Redis, lets you push jobs onto a queue and process them separately with retry and concurrency control.",
    code: `const { Queue, Worker } = require("bullmq");

const connection = { host: "127.0.0.1", port: 6379 };

const emailQueue = new Queue("emails", { connection });

const addEmailJob = (data) => emailQueue.add("send-email", data);

new Worker(
  "emails",
  async (job) => {
    console.log("Sending email to", job.data.to);
  },
  { connection }
);

module.exports = { addEmailJob };`,
  },
  {
    order: 28,
    title: "Caching with Redis",
    theory: "Redis is an in-memory key-value store often used as a cache layer in front of a database. Frequently read, rarely changed data can be cached with a TTL to reduce database load and latency.",
    code: `const { createClient } = require("redis");

const redisClient = createClient({ url: process.env.REDIS_URL });
redisClient.connect();

const getUserCached = async (id) => {
  const cached = await redisClient.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached);

  const user = await User.findById(id);
  await redisClient.setEx(\`user:\${id}\`, 300, JSON.stringify(user));
  return user;
};`,
  },
  {
    order: 29,
    title: "API Versioning Strategies",
    theory: "As an API evolves, breaking changes need a way to coexist with older clients. Common strategies include prefixing routes with a version number or passing the version in a request header.",
    code: `const v1Router = express.Router();
const v2Router = express.Router();

v1Router.get("/users", (req, res) => res.json({ version: 1, users: [] }));
v2Router.get("/users", (req, res) => res.json({ version: 2, users: [], meta: {} }));

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);`,
  },
  {
    order: 30,
    title: "Testing Express APIs with Jest and Supertest",
    theory: "Supertest wraps an Express app and lets tests make HTTP requests against it directly without starting a real server. Combined with Jest, this enables fast, isolated integration tests for routes.",
    code: `const request = require("supertest");
const app = require("../app");

describe("GET /api/users", () => {
  it("returns a list of users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.users)).toBe(true);
  });
});`,
  },
  {
    order: 31,
    title: "Dockerizing a Node.js App",
    theory: "Docker packages an application with its runtime and dependencies into a portable image. A Dockerfile defines the build steps, and multi-stage builds keep the final image lean by excluding dev dependencies.",
    code: `FROM node:20-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 5000
CMD ["node", "server.js"]`,
  },
  {
    order: 32,
    title: "Deploying to a VPS with PM2",
    theory: "PM2 is a process manager for Node.js that keeps an app running in the background, restarts it on crashes, and handles log rotation, making it a common choice for deploying to a bare VPS.",
    code: `# Install PM2 globally
npm install -g pm2

# Start the app under PM2
pm2 start server.js --name butt-networks-api

# Save the process list and enable startup on reboot
pm2 save
pm2 startup

# View logs
pm2 logs butt-networks-api`,
  },
  {
    order: 33,
    title: "Structuring a Scalable Express Project",
    theory: "As an API grows, splitting code into routes, controllers, services, and models keeps concerns separated. Routes define endpoints, controllers handle request/response, and services hold business logic reused across controllers.",
    code: `// project structure
// src/
//   routes/user.routes.js
//   controllers/user.controller.js
//   services/user.service.js
//   models/User.js
//   middleware/
//   app.js

// routes/user.routes.js
const router = require("express").Router();
const { getUser, createUser } = require("../controllers/user.controller");

router.get("/:id", getUser);
router.post("/", createUser);

module.exports = router;`,
  },
  {
    order: 34,
    title: "Building a GitHub App with Octokit",
    theory: "Octokit is the official SDK for the GitHub API. A GitHub App authenticates using a private key to generate installation tokens, allowing automated actions like commenting on pull requests or reading repo contents.",
    code: `const { App } = require("octokit");

const app = new App({
  appId: process.env.GITHUB_APP_ID,
  privateKey: process.env.GITHUB_PRIVATE_KEY,
});

app.webhooks.on("pull_request.opened", async ({ octokit, payload }) => {
  await octokit.rest.issues.createComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: payload.pull_request.number,
    body: "Thanks for the PR, reviewing now.",
  });
});`,
  },
  {
    order: 35,
    title: "Sending Emails with Nodemailer",
    theory: "Nodemailer connects to an SMTP server to send emails from a Node.js app. A reusable transporter is configured once with credentials, then used to send messages with templated HTML content.",
    code: `const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendWelcomeEmail = async (to, name) => {
  await transporter.sendMail({
    from: '"Butt Networks" <hello@buttnetworks.dev>',
    to,
    subject: "Welcome!",
    html: \`<p>Hi \${name}, welcome aboard.</p>\`,
  });
};

module.exports = { sendWelcomeEmail };`,
  },
  {
    order: 36,
    title: "Building a Simple CLI Tool with Node.js",
    theory: "Node scripts can be turned into command-line tools using process.argv for arguments and a shebang line for direct execution. Libraries like commander add structured argument parsing and help output.",
    code: `#!/usr/bin/env node
const { Command } = require("commander");

const program = new Command();

program
  .name("bn-cli")
  .description("Butt Networks internal CLI")
  .version("1.0.0");

program
  .command("greet <name>")
  .description("Print a greeting")
  .action((name) => {
    console.log(\`Hello, \${name}!\`);
  });

program.parse(process.argv);`,
  },
  {
    order: 37,
    title: "Securing Headers with Helmet",
    theory: "Helmet sets a collection of HTTP response headers that harden an Express app against common attacks like clickjacking, MIME sniffing, and cross-site scripting, with sensible defaults out of the box.",
    code: `const helmet = require("helmet");

app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
    },
  })
);`,
  },
  {
    order: 38,
    title: "Session Management with express-session",
    theory: "Session-based auth stores a session identifier in a cookie while the actual user data lives server-side, often in a store like Redis. This differs from JWTs, which keep all state client-side.",
    code: `const session = require("express-session");
const RedisStore = require("connect-redis").default;
const redisClient = require("./redisClient");

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.post("/api/login", (req, res) => {
  req.session.userId = req.body.userId;
  res.json({ message: "Logged in" });
});`,
  },
  {
    order: 39,
    title: "OAuth2 Login with Google",
    theory: "OAuth2 lets users authenticate through a trusted provider instead of a password. The server redirects to Google's consent screen, then exchanges the returned authorization code for an access token and user profile.",
    code: `const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

app.get("/auth/google/callback", async (req, res) => {
  const { tokens } = await client.getToken(req.query.code);
  client.setCredentials(tokens);

  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const profile = ticket.getPayload();
  res.json({ email: profile.email, name: profile.name });
});`,
  },
  {
    order: 40,
    title: "Server-Sent Events for Real-Time Updates",
    theory: "Server-Sent Events let a server push a one-way stream of updates to a client over a single long-lived HTTP connection, simpler than WebSockets when only server-to-client updates are needed.",
    code: `app.get("/api/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const interval = setInterval(() => {
    res.write(\`data: \${JSON.stringify({ time: Date.now() })}\\n\\n\`);
  }, 3000);

  req.on("close", () => clearInterval(interval));
});`,
  },
  {
    order: 41,
    title: "Scheduling Jobs with node-cron",
    theory: "node-cron runs functions on a recurring schedule defined by cron syntax, useful for tasks like nightly cleanup, sending digest emails, or refreshing cached data without an external scheduler.",
    code: `const cron = require("node-cron");

cron.schedule("0 2 * * *", async () => {
  console.log("Running nightly cleanup job");
  await User.deleteMany({ verified: false, createdAt: { $lt: new Date(Date.now() - 7 * 86400000) } });
});

cron.schedule("*/15 * * * *", () => {
  console.log("Refreshing cache every 15 minutes");
});`,
  },
  {
    order: 42,
    title: "GraphQL API with Apollo Server",
    theory: "GraphQL lets clients request exactly the fields they need through a single endpoint. Apollo Server defines a schema of types and resolvers that fetch the data for each field when a query runs.",
    code: `const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }
\`;

const resolvers = {
  Query: {
    users: async () => User.find(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
server.applyMiddleware({ app });`,
  },
  {
    order: 43,
    title: "API Documentation with Swagger",
    theory: "swagger-jsdoc generates an OpenAPI spec from JSDoc comments above route handlers, and swagger-ui-express serves an interactive docs page from that spec, keeping documentation close to the code it describes.",
    code: `const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const spec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "Butt Networks API", version: "1.0.0" },
  },
  apis: ["./routes/*.js"],
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: List users
 *     responses:
 *       200:
 *         description: A list of users
 */
app.get("/api/users", (req, res) => res.json({ users: [] }));`,
  },
  {
    order: 44,
    title: "Health Check Endpoints",
    theory: "A health check endpoint reports whether a service and its dependencies are up, letting load balancers, orchestrators, or uptime monitors detect failures and route traffic away from unhealthy instances.",
    code: `app.get("/health", async (req, res) => {
  const checks = { server: "ok" };

  try {
    await mongoose.connection.db.admin().ping();
    checks.database = "ok";
  } catch (err) {
    checks.database = "down";
  }

  const healthy = Object.values(checks).every((v) => v === "ok");
  res.status(healthy ? 200 : 503).json(checks);
});`,
  },
  {
    order: 45,
    title: "Microservices Communication with gRPC",
    theory: "gRPC uses Protocol Buffers to define strongly typed service contracts and communicates over HTTP/2, making it a fast, efficient choice for internal service-to-service communication compared to REST/JSON.",
    code: `// user.proto
// service UserService {
//   rpc GetUser (UserRequest) returns (UserResponse);
// }

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("user.proto");
const proto = grpc.loadPackageDefinition(packageDef);

const server = new grpc.Server();
server.addService(proto.UserService.service, {
  getUser: (call, callback) => {
    callback(null, { id: call.request.id, name: "Shahnawaz" });
  },
});

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => server.start());`,
  },
  {
    order: 46,
    title: "Message Queues with RabbitMQ",
    theory: "RabbitMQ decouples producers and consumers through durable message queues, allowing services to communicate asynchronously and reliably even if a consumer is temporarily offline.",
    code: `const amqp = require("amqplib");

const publishMessage = async (queue, message) => {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  setTimeout(() => connection.close(), 500);
};

const consumeMessages = async (queue) => {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => {
    console.log(JSON.parse(msg.content.toString()));
    channel.ack(msg);
  });
};`,
  },
  {
    order: 47,
    title: "Multi-Tenancy Patterns in SaaS APIs",
    theory: "Multi-tenant SaaS apps serve multiple customers from shared infrastructure. A common approach tags every row with a tenantId and enforces it in a query middleware, preventing one tenant from seeing another's data.",
    code: `const tenantScope = (req, res, next) => {
  req.tenantId = req.user.tenantId;
  next();
};

const getInvoices = async (tenantId) => {
  return Invoice.find({ tenantId });
};

app.get("/api/invoices", protect, tenantScope, async (req, res) => {
  const invoices = await getInvoices(req.tenantId);
  res.json(invoices);
});`,
  },
  {
    order: 48,
    title: "Building Serverless Functions",
    theory: "Serverless platforms run individual functions on demand without managing a persistent server. Each function receives an event object and returns a response, scaling automatically with request volume.",
    code: `exports.handler = async (event) => {
  const { name } = JSON.parse(event.body || "{}");

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: \`Hello, \${name || "world"}!\` }),
  };
};`,
  },
  {
    order: 49,
    title: "Idempotency Keys for Safe Retries",
    theory: "Network failures can cause clients to retry requests like payments. An idempotency key sent by the client lets the server recognize a retried request and return the original result instead of processing it twice.",
    code: `const processedKeys = new Map();

app.post("/api/payments", async (req, res) => {
  const key = req.headers["idempotency-key"];
  if (!key) return res.status(400).json({ message: "Missing idempotency key" });

  if (processedKeys.has(key)) {
    return res.json(processedKeys.get(key));
  }

  const result = { id: Date.now(), status: "completed" };
  processedKeys.set(key, result);
  res.json(result);
});`,
  },
  {
    order: 50,
    title: "Graceful Shutdown in Node.js",
    theory: "When a process receives a termination signal, abruptly killing it can drop in-flight requests or leave connections open. A graceful shutdown stops accepting new requests, finishes existing ones, then closes resources.",
    code: `const server = app.listen(5000);

const shutdown = async () => {
  console.log("Shutting down gracefully");
  server.close(async () => {
    await mongoose.connection.close();
    process.exit(0);
  });

  setTimeout(() => process.exit(1), 10000);
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);`,
  },
];
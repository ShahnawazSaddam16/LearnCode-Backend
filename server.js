const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./src/config/dbConnection");
const cookieParser = require("cookie-parser");
const authRoutes = require("./src/routes/authRoutes");
const courseRoutes = require("./src/routes/courseRoutes");
const { stripeWebhook } = require("./src/controllers/course");
const contactRoutes = require("./src/routes/contactRoutes");

dotenv.config();

const app = express();
const Port = process.env.PORT;

app.set("trust proxy", 1);

app.post("/api/courses/stripeWebhook", express.raw({ type: "application/json" }), stripeWebhook);

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ["http://localhost:3000", "https://learncode.buttnetworks.com"],
  credentials: true
}));

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api", contactRoutes);

dbConnection();

app.listen(Port, (err) => {
  if (err) {
    console.error("❌❌ Error Connecting Server", err);
  } else {
    console.log(`✅✅ Server Running at http://localhost:${Port}`);
  }
});
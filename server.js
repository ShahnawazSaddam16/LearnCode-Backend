const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./src/config/dbConnection");
const cookieParser = require("cookie-parser");
const authRoutes = require("./src/routes/authRoutes");

dotenv.config();

const app = express();
const Port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser()); 


app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);

// Mongoose connect
dbConnection();

app.listen(Port, (err) => {
  if (err) {
    console.error("❌❌ Error Connecting Server", err);
  } else {
    console.log(`✅✅ Server Running at http://localhost:${Port}`);
  }
});
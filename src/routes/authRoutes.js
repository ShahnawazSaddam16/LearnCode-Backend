const express = require("express");
const { signin, login, me, logout } = require("../controllers/auth");
const limiter = require("../utils/limiter");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signin", limiter, signin);
router.post("/login", limiter, login);
router.get("/me", limiter, authMiddleware, me);
router.post("/logout", limiter, authMiddleware, logout);

module.exports = router;

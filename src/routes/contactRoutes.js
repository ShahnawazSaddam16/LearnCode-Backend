const express = require("express");
const router = express.Router();
const limiter = require("../utils/limiter");
const {authMiddleware} = require("../middleware/authMiddleware");
const {createContact} = require("../controllers/contact");

router.post("/create-contact", limiter, authMiddleware, createContact);

module.exports = router;
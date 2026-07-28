const express = require("express");
const router = express.Router();
const limiter = require("../utils/limiter");
const {createContact} = require("../controllers/contact");

router.post("/create-contact", limiter, createContact);

module.exports = router;

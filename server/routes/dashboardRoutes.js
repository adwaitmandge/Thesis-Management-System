const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { protect } = require("../middleware/authMiddleware");
const { getGoals } = require("../controllers/goalControllers");

router.get("/goals", protect, getGoals);

module.exports = router;

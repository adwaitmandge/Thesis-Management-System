const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  uploadThesis,
  fetchThesis,
  fetchFeedback,
} = require("../controllers/thesisControllers");
const router = require("express").Router();

router.post("/", protect, uploadThesis);
router.get("/", protect, fetchThesis);
router.get("/feedback", protect, fetchFeedback);

module.exports = router;

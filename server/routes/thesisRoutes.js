const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  uploadThesis,
  fetchThesis,
  fetchFeedback,
  changeStatus,
} = require("../controllers/thesisControllers");
const router = require("express").Router();

router.post("/", protect, uploadThesis);
router.get("/", protect, fetchThesis);
router.patch("/", protect, changeStatus);
router.get("/feedback", protect, fetchFeedback);

module.exports = router;

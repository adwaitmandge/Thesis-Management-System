const express = require("express");
const {
  assignTask,
  fetchStudents,
  getGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/professorControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, assignTask);
router.get("/", protect, fetchStudents);
router.get("/goals", protect, getGoals);
router.put("/", protect, updateGoal);
router.delete("/", protect, deleteGoal);

module.exports = router;

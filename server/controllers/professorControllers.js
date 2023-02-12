const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const compare = (a, b) => {
  if (a.deadline < b.deadline) return -1;
  if (a.deadline > b.deadline) return 1;
  return 0;
};

const assignTask = asyncHandler(async (req, res) => {
  console.log("Inside assign tasks at the backend");
  const student = await User.findById(req.body.id);

  console.log(req.body);
  const { newTask } = req.body;
  newTask.deadline = new Date(`${newTask.date} ${newTask.time}`);
  console.log("The deadline is ", newTask.deadline);
  newTask.creator = req.user._id;
  newTask.assigned_to = req.body.id;

  student.goals.sort(compare);
  console.log("The sorted goals are", student.goals);
  console.log("The student is ", student);
  student.goals.push(newTask);
  await student.save();
  res.json(newTask);
});

const getGoals = asyncHandler(async (req, res) => {
  console.log(req.headers);
  console.log(req.header("id"));
  const student = await User.findById(req.header("id"));
  console.log("The student is ", student);
  student.goals.sort(compare);
  res.json(student.goals);
});

const fetchStudents = asyncHandler(async (req, res) => {
  const professor = await User.findById(req.user._id).populate("students");
  res.json(professor.students);
});

const updateGoal = asyncHandler(async (req, res) => {
  const { task, newTitle, date, time } = req.body;
  const foundUser = await User.findById(req.body.id);
  const foundGoal = foundUser.goals.find((goal) => goal._id == task._id);
  foundGoal.task = newTitle;
  foundGoal.deadline = new Date(`${date} ${time}`);
  await foundUser.save();
  foundUser.goals.sort(compare);

  res.json(foundUser.goals);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const { id, task } = req.body;
  console.log("The request body contains", req.body);
  const foundUser = await User.findById(id);
  const newGoals = foundUser.goals.filter((goal) => goal._id != task._id);
  foundUser.goals = newGoals;
  await foundUser.save();
  foundUser.goals.sort(compare);
  res.json(foundUser.goals);
});

module.exports = {
  assignTask,
  fetchStudents,
  getGoals,
  updateGoal,
  deleteGoal,
};

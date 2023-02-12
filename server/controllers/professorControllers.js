const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const assignTask = asyncHandler(async (req, res) => {
  console.log("Inside assign tasks at the backend");
  const student = await User.findById(req.body.id);

  console.log(req.body);
  const { newTask } = req.body;
  newTask.creator = req.user._id;
  newTask.assigned_to = req.body.id;

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
  res.json(student.goals);
});

const fetchStudents = asyncHandler(async (req, res) => {
  const professor = await User.findById(req.user._id).populate("students");
  res.json(professor.students);
});

const updateGoal = asyncHandler(async (req, res) => {
  const { task, newTitle } = req.body;
  const foundUser = await User.findById(req.body.id);
  const foundGoal = foundUser.goals.find((goal) => goal._id == task._id);
  foundGoal.task = newTitle;
  await foundUser.save();
  res.json(foundUser.goals);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const { id, task } = req.body;
  console.log("The request body contains", req.body);
  const foundUser = await User.findById(id);
  const newGoals = foundUser.goals.filter((goal) => goal._id != task._id);
  foundUser.goals = newGoals;
  await foundUser.save();
  res.json(foundUser.goals);
});

module.exports = { assignTask, fetchStudents, getGoals, updateGoal, deleteGoal };

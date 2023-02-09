const Goal = require("../models/goalModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// Fetch all goals
const getGoals = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user.goals);
  } catch (error) {
    console.log("Error occurred while fetching goals at the backend");
    console.log(error);
  }
});

/////////////////////////////////// CREATE A NEW GOAL //////////////////////////////

const createGoal = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const newGoal = req.body;
    newGoal.assigned_to = req.user._id;
    newGoal.creator = req.user._id;
    user.goals.push(newGoal);
    await user.save();
    res.json(newGoal);
  } catch (err) {
    console.error(err.message);
  }
});

/////////////////////////////////////// MARK AS DONE OR UNDONE ////////////////////////////////

const completeGoal = asyncHandler(async (req, res) => {
  const goal = req.body;
  console.log(req.body);
  const user = await User.findById(req.user._id);
  const allGoals = user.goals;
  const foundGoal = allGoals.find((someGoal) => someGoal._id == goal._id);
  foundGoal.isCompleted = !foundGoal.isCompleted;
  await user.save();
  console.log(user);
  res.json(user.goals);
});

/////////////////////////////////////// UPDATE EXISTING GOAL ////////////////////////////////

const updateGoal = asyncHandler(async (req, res) => {
  const { task, newTitle } = req.body;
  const foundUser = await User.findById(req.user._id);
  const foundGoal = foundUser.goals.find((goal) => goal._id == task._id);
  foundGoal.task = newTitle;
  await foundUser.save();
  res.json(foundUser.goals);
});

/////////////////////////////////////// DELETE GOAL ////////////////////////////////

const deleteGoal = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  const foundUser = await User.findById(req.user._id);
  const newGoals = foundUser.goals.filter((goal) => goal._id != _id);
  foundUser.goals = newGoals;
  await foundUser.save();
  res.json(foundUser.goals);
});
module.exports = { getGoals, createGoal, deleteGoal, completeGoal, updateGoal };

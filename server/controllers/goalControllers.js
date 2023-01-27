const Goal = require("../models/goalModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// Fetch all goals
const getGoals = asyncHandler(async (req, res) => {
  try {
    console.log("req.user is ", req.user);
    const user = await User.findById(req.user._id).populate("goals");
    res.json(user.goals);
  } catch (error) {
    console.log("Error occurred while fetching goals at the backend");
    console.log(error);
  }
});

// Create a new task
const createGoal = asyncHandler(async (req, res) => {
  console.log("INSIDE THE CREATE GOAL ROUTE");
  console.log(req.body);
  console.log("req.user is", req.user);
  try {
    const user = await User.findById(req.user._id);
    const newGoal = new Goal(req.body);
    newGoal.creator = user;
    newGoal.assigned_to = user;
    user.goals.push(newGoal);
    await newGoal.save();
    await user.save();
    res.json(newGoal);
  } catch (err) {
    console.error(err.message);
  }
});

const completeGoal = asyncHandler(async (req, res) => {
  console.log("Inside complete Goal at the backend");
  const goal = req.body;
  console.log("The req.body is ");
  console.log(req.body);
  const foundGoal = await Goal.findOne({ _id: goal._id });
  foundGoal.isCompleted = !foundGoal.isCompleted;
  await foundGoal.save();
  const user = await User.findOne({ _id: req.user._id }).populate("goals");
  console.log(user);
  res.json(user.goals);
});

const updateGoal = asyncHandler(async (req, res) => {});

const deleteGoal = asyncHandler(async (req, res) => {});
module.exports = { getGoals, createGoal, deleteGoal, completeGoal, updateGoal };

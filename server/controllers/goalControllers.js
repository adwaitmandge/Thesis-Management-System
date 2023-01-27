const Goal = require("../models/goalModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  try {
    console.log("req.user is ", req.user);
    const user = await User.findById(req.user._id).populate("goals");
    console.log(user);
    res.json(user.goals);
  } catch (error) {
    console.log("Error occurred while fetching goals at the backend");
    console.log(error);
  }
});

module.exports = { getGoals };

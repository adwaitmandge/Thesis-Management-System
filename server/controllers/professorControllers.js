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

const getThesis = asyncHandler(async (req, res) => {
  try {
    const allUsers = await User.find({
      "thesis.professor": req.user._id,
    })
      .populate("thesis.professor")
      .populate("thesis.creator_student");

    const allThesis = [];

    console.log(allUsers);
    for (let user of allUsers) {
      for (let individualThesis of user.thesis) {
        if (individualThesis.professor.name == req.user.name) {
          allThesis.push(individualThesis);
        }
      }
    }

    res.json(allThesis);

    console.log("After for loop", allThesis);
  } catch (err) {
    console.error(err.message);
  }
});

const postFeedback = asyncHandler(async (req, res) => {
  try {
    console.log("Inside the postfeedback route at the backend");
    console.log("The request body is", req.body);
    const { id: thesisId, feedback } = req.body;
    const foundUser = await User.findOne({ "thesis._id": thesisId });
    console.log("The foundUser is  ", foundUser);
    const foundThesis = foundUser.thesis.find(
      (thesis) => thesis._id == thesisId
    );

    console.log("The foundThesis is", foundThesis);
    foundThesis.feedback.push(feedback);
    console.log("Found User before saving is", foundUser);
    await foundUser.save();
    console.log("Found User after saving is", foundUser);
    res.json("FEEDBACK POSTED")
  } catch (error) {
    console.log("Error occurred while posting at backend");
    console.log(error);
  }
});

module.exports = {
  assignTask,
  fetchStudents,
  getGoals,
  updateGoal,
  deleteGoal,
  getThesis,
  postFeedback,
};

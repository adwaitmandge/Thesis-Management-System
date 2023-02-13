const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Thesis = require("../models/thesisModel");

const uploadThesis = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const professor = await User.findOne({ name: req.body.professor });
    const thesis = req.body;
    thesis.professor = professor;
    thesis.path = `${req.user.name}/${thesis.title}`;
    thesis.creator_student = req.user;
    const student = await User.findById(req.user._id)
      .populate("thesis.professor")
      .populate("thesis.creator_student");
    student.thesis.push(thesis);
    await student.save();
    res.json(student.thesis);
  } catch (error) {
    console.log("Error occurred while uploading at backend");
    console.log(error);
  }
});

const fetchThesis = asyncHandler(async (req, res) => {
  try {
    const student = await User.findById(req.user._id)
      .populate("thesis.professor")
      .populate("thesis.creator_student");
    res.json(student.thesis);
  } catch (error) {
    console.log("Error occurred while fetching thesis from the backend ");
    console.log(error);
  }
});

const fetchFeedback = asyncHandler(async (req, res) => {
  try {
    const foundUser = await User.findById(req.user._id);
    const allThesis = foundUser.thesis;
    console.log(req.query);
    const { id } = req.query;
    const foundThesis = allThesis.find((thesis) => thesis._id == id);
    res.json(foundThesis.feedback);
  } catch (error) {}
});

const changeStatus = asyncHandler(async (req, res) => {
  try {
    const { newStatus, id } = req.body;
    const foundUser = await User.findById(req.user._id)
      .populate("thesis.professor")
      .populate("thesis.creator_student");
    const foundThesis = foundUser.thesis.find((thesis) => thesis._id == id);
    foundThesis.status = newStatus;
    await foundUser.save();
    res.json(foundUser.thesis);
  } catch (error) {
    console.log("Error occurred while changing status at the backend");
    console.log(error);
  }
});

module.exports = { uploadThesis, fetchThesis, fetchFeedback, changeStatus };

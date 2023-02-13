const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Thesis = require("../models/thesisModel");

const uploadThesis = asyncHandler(async (req, res) => {
  try {
    console.log("Inside upload thesis at the backend");
    console.log(req.body);
    const professor = await User.findOne({ name: req.body.professor });
    console.log("The professor is", professor);
    console.log("The student is", req.user.name);
    const thesis = req.body;
    thesis.professor = professor;
    thesis.path = `${req.user.name}/${thesis.title}`;
    thesis.creator_student = req.user;
    console.log("here");
    const student = await User.findById(req.user._id);
    console.log("The student before successfull upload is ", student);
    student.thesis.push(thesis);
    console.log("The thesis is ", thesis);
    console.log("The student after pushing is", student);
    console.log("here");
    await student.save();
    console.log("here");
    console.log("The student after uploading the theis is", student);
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
    console.log("I am", student);
    console.log("My thesises are  ", student.thesis);
    res.json(student.thesis);
  } catch (error) {
    console.log("Error occurred while fetching thesis from the backend ");
    console.log(error);
  }
});

const fetchFeedback = asyncHandler(async (req, res) => {
  try {
    console.log("Inside fetch feedback");
    const foundUser = await User.findById(req.user._id);
    console.log("The foundUser is", foundUser);
    const allThesis = foundUser.thesis;
    console.log(req.query);
    console.log("The allThesis is", allThesis);
    const { id } = req.query;
    const foundThesis = allThesis.find((thesis) => thesis._id == id);
    console.log("The feedback is", foundThesis.feedback);
    res.json(foundThesis.feedback);
  } catch (error) {}
});

module.exports = { uploadThesis, fetchThesis, fetchFeedback };

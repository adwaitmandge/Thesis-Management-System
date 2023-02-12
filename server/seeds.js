const mongoose = require("mongoose");
const User = require("./models/userModel");

mongoose
  .connect("mongodb://127.0.0.1:27017/chatSystem")
  .then(() => {
    console.log("Connected to MONGODB successfully");
  })
  .catch((err) => {
    console.log("Couldn't connect to db");
    console.log(err);
  });

const addStudent = async () => {
  const professor = await User.findOne({ email: "khedkar@ce.vjti.ac.in" });
  const student = await User.findOne({ name: "Siddhesh Singh Tanwar" });
  console.log(professor);
  console.log(student);
  student.professor.push(professor);
  await student.save();
};

const addGoal = async () => {
  const professor = await User.findOne({ email: "shingade@vjti.ac.in" });
  const student = await User.findOne({ name: "Kunal Goudani" });
  console.log(professor);
  const newGoal = {
    task: "Attend all lectures",
    isCompleted: false,
    deadline: new Date("2023-02-14"),
  };
  newGoal.creator = professor;
  newGoal.assigned_to = student;
  student.goals.push(newGoal);
  await student.save();
};

const deleteUser = async () => {
  const user = await User.findOneAndDelete({ name: "Om Doiphode" });
};

const updateUser = async () => {
  const user = await User.findOne({ name: "Kunal Goudani" });
  user.goals = [];
  await user.save();
};

const populateStudents = async () => {
  const kunal = await User.findOne({ name: "Kunal Goudani" });
  const pranav = await User.findOne({ name: "Pranav Janjani" });
  const shinghade = await User.findOne({ name: "Sandeep Shinghade" });
  shinghade.students.push(kunal._id);
  shinghade.students.push(pranav._id);
  console.log(shinghade);
  await shinghade.save();
};

addGoal();
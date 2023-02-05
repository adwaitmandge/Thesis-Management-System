const mongoose = require("mongoose");
const Goal = require("./models/goalModel");
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
  const professor = await User.findOne({ email: "khedkar@ce.vjti.ac.in" });
  const student = await User.findOne({ name: "Om Doiphode" });
  console.log(professor);
  const newGoal = new Goal({
    task: "Design a circuit board",
    isCompleted: false,
    deadline: new Date("2023-02-12"),
  });
  newGoal.creator = professor;
  newGoal.assigned_to.push(student);

  student.goals.push(newGoal);
  await newGoal.save();
  await student.save();
};

const deleteUser = async () => {
  const user = await User.findOneAndDelete({ name: "Om Doiphode" });
};

const updateUser = async() => {
  const user = await User.findOne({name:"Om Doiphode"});
  user.goals = [];
  await user.save();
}

updateUser();

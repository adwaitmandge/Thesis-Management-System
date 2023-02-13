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
  const om = await User.findOne({ name: "Om Doiphode" });
  const shinghade = await User.findOne({ name: "Sandeep Shinghade" });
  shinghade.students.push(om._id);
  console.log(shinghade);
  await shinghade.save();
};

const removeThesis = async () => {
  const kunal = await User.findOne({
    "thesis.title": "Data Interpretation And Analysis",
  });

  const newThesis = kunal.thesis.filter(
    (someThesis) => someThesis.title != "Data Interpretation And Analysis"
  );
  console.log(newThesis);
  kunal.thesis = newThesis;
  await kunal.save();
};

removeThesis();

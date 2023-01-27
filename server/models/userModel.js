const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Goal = require("./goalModel");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    registrationId: {
      type: String,
    },
    education: {
      type: String,
    },
    fieldOfInterest: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Professor", "Student"],
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    thesis: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thesis",
      },
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    professor: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    goals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goal",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.post("findOneAndDelete", async (data) => {
  console.log("Post middleware");
  if (data.goals.length) {
    const res = await Goal.deleteMany({ _id: { $in: data.goals } });
    console.log(res);
  }
  console.log("All goals deleted");
});

const User = new mongoose.model("User", userSchema);

module.exports = User;

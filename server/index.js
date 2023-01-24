const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

const { default: mongoose } = require("mongoose");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const File = require("./models/fileModal");
mongoose
  .connect("mongodb://127.0.0.1:27017/chatSystem")
  .then(() => {
    console.log("Connected to MONGODB successfully");
  })
  .catch((err) => {
    console.log("Couldn't connect to db");
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.get("/upload", async (req, res) => {
  try {
    console.log("Inside get upload");
    const allFiles = await File.find({});
    console.log("Files fetched successfully");
    res.json(allFiles);
  } catch (err) {
    console.log("Error occurred while fetching the files");
    console.error(err.message);
  }
});

app.post("/upload", async (req, res) => {
  try {
    console.log("Inside upload");
    console.log(req.body);
    const newFile = await File.insertMany([req.body]);
    console.log("File uploaded successfully");
  } catch (err) {
    console.log("Error occurred while uploading the file");
    console.error(err.message);
  }
});

app.use(notFound);
app.use(errorHandler);

const server = app.listen("5000", () => {
  console.log("ON PORT 5000");
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});

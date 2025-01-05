const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.jsx");
const cors = require("cors");
const connectDB = require("./config/db.jsx");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes.jsx");
const chatRoutes = require("./routes/chatRoutes.jsx");
const messageRoutes = require("./routes/messageRoutes.jsx");
const { notFound, errorHandler } =
  require("./middleware/errorMiddleware.jsx").default;
const app = express();
dotenv.config();
connectDB();
app.use(
  cors({
    origin: "http://localhost:5174",
  })
);
app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send(`API is running succesfully`);
});

app.use("/api/user", userRoutes);

app.use("/api/chat", chatRoutes);

app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  5000,
  console.log(`Server started on port ${PORT}`.yellow.bold)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000, //wait 60 secs to close connection to save bandwidth
  cors: {
    origin: "http://localhost:5174",
  },
});

io.on("connection", (socket) => {
  console.log("connected with socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id); //creates a room for the perticular user im passing
    // console.log(userData._id);//gives the user id as soon as a user is connected
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log(`User joined room ${room}`);
  }); // updates when ever a user clicks on any chats

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing")); //to check if the other user has started typing or has stopped typing

  socket.on("new message", (newMessageRecieved) => {
    let chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.user is not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) {
        return;
      }
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("User Disconnected");
    socket.leave(userData._id);//closing
  });
});

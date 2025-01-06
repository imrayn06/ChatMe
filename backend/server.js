const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const cors = require("cors");
const connectDB = require("./config/db.js");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const messageRoutes = require("./routes/messageRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const path = require("path");

const app = express();
dotenv.config();
connectDB();

// Enable CORS
const allowedOrigins = [
  "http://localhost:5174", // for local development
  "https://chatme-frontend.onrender.com" // for production deployment
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // allow cookies if needed
  })
);

app.use(express.json()); // to accept JSON data

//  routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// ---------------------Deployment-------------------------//
const __dirname1 = path.resolve();

// Uncomment for production deployment
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "frontend", "dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"));
//   });
// } else {
//   console.log(path.join(__dirname1, "frontend", "dist"));
//   app.get("/", (req, res) => {
//     res.send("API is running successfully");
//   });
// }

// default route
app.get("/", (req, res) => {
  res.send("API is running successfully");
});
// ---------------------Deployment-------------------------//

// middleware for handling errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

// start the server
const server = app.listen(
  PORT,
  console.log(`Server started on port ${PORT}`.yellow.bold)
);

// socket.io setup
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  },
});

io.on("connection", (socket) => {
  console.log("Connected with socket.io");

  // handles user setup and room creation
  socket.on("setup", (userData) => {
    socket.join(userData._id); // Creates a room for the particular user
    socket.emit("connected");
  });

  // handles user joining a chat room
  socket.on("join chat", (room) => {
    socket.join(room);
  });

  // emits typing status to the room
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  // ahndles receiving a new message and notifying users in the chat
  socket.on("new message", (newMessageRecieved) => {
    let chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users is not defined");

    chat.users.forEach((user) => {
      if (user._id === newMessageRecieved.sender._id) return;
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  // handles user disconnection
  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });

  socket.off("setup", () => {
    console.log("User Disconnected from setup");
    socket.leave(userData._id); // closes the user's room
  });
});

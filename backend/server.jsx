const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.jsx");
const cors = require("cors");
const connectDB = require("./config/db.jsx");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes.jsx");
const chatRoutes = require("./routes/chatRoutes.jsx")
const { notFound, errorHandler } = require("./middleware/errorMiddleware.jsx").default;
const app = express();
dotenv.config();
connectDB();
app.use(cors({
  origin: "http://localhost:5174", 
}));
app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send(`API is running succesfully`);
});

app.use("/api/user", userRoutes);

app.use("/api/chat",chatRoutes)

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on port ${PORT}`.yellow.bold));

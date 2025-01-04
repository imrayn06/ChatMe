const express = require("express");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers.jsx");
const { protect } = require("../middleware/authMiddleware.jsx");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;

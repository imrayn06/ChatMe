const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers.js");
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.route(`/`).post(registerUser).get(protect, allUsers); //chain multiple request

router.post(`/login`, authUser); //can write this too single req

// router.route('/').get(allUser)

module.exports = router;

const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers.jsx");
const router = express.Router();

router.route(`/`).post(registerUser); //chain multiple request

router.post(`/login`,authUser)//can write this too single req

module.exports = router;

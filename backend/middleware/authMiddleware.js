const jwt = require("jsonwebtoken");
const User = require("../models/UserModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Bearer token : we will remove the bearer and take the token

      //decode the token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized ! , token failed...");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token...");
  }
});
module.exports = { protect };

const express = require("express");
const userRouter = express.Router();

const {
  registeruser,
  loginUser,
  LogOutUser,
} = require("../controllers/user-controller");
const { UsreAuthVerification } = require("../MiddleWare/Auth-Middleware");

userRouter.post("/register", registeruser);
userRouter.post("/login", loginUser);
userRouter.post("/auth", UsreAuthVerification);
userRouter.post("/logout", LogOutUser);

module.exports = userRouter;

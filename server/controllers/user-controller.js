// to register user
// to login user
// to logout user

const Joi = require("joi");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  Password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  Password: Joi.string().min(6).required(),
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.DEFAULT_SECRET_KEY || "key", {
    // DEFAULT_SECRET_KEY remove
    expiresIn: 3 * 24 * 60 * 60,
    // expiresIn: "3d",
  });
};

const registeruser = async (req, res, next) => {
  const { name, email, Password } = req.body; //remove await

  const { error } = registerSchema.validate({ name, email, Password });

  if (error) {
    console.log(error);

    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const isUserAlredyExist = await User.findOne({ email });

    if (isUserAlredyExist) {
      return res.status(400).json({
        success: false,
        message: "user alredy Exists!",
      });
    } else {
      const hashPassword = await bcrypt.hash(Password, 12);

      const NewlyCreatedUser = await User.create({
        name,
        email,
        Password: hashPassword,
      });

      if (NewlyCreatedUser) {
        const token = generateToken(NewlyCreatedUser?._id);

        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });

        res.status(201).json({
          success: true,
          message: "user register done!!!",
          userData: {
            name: NewlyCreatedUser.name,
            email: NewlyCreatedUser.email,
            Password: NewlyCreatedUser.Password,
            _id: NewlyCreatedUser._id,
          },
        });
        next();
      }
    }
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "something wrong please see again",
    });
  }
};

const loginUser = async (req, res, next) => {
  const { Password, email } = await req.body;
  const { error } = loginSchema.validate({ email, Password });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const getUser = await User.findOne({ email });
    if (!getUser) {
      return res.json({
        success: false,
        message: "Incorrect email!",
      });
    }

    const CheckAuth = await bcrypt.compare(Password, getUser.Password);
    if (!CheckAuth) {
      return res.json({
        success: false,
        message: "Incorrect Password!",
      });
    }

    const token = generateToken(getUser?._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      success: true,
      message: "User logged in",
    });
    next();
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "something wrong please see again",
    });
  }
};

const LogOutUser = async (req, res, next) => {
  res.cookie("token", "", {
    withCredentials: true,
    httpOnly: false,
  });

  return res.status(200).json({
    success: true,
    message: "LogOut Done!!",
  });
};

module.exports = { registeruser, loginUser, LogOutUser };

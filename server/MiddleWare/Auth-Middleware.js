const jwt = require("jsonwebtoken");
const user = require("../Models/User");
require("dotenv").config();

const UsreAuthVerification = async (req, res) => {
  const token = req.cookies.token;

  //   console.log(token);

  if (!token) {
    return res.json({
      success: false,
      message: "Token not Available",
    });
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.DEFAULT_SECRET_KEY);
      //   console.log(process.env.DEFAULT_SECRET_KEY, "keyyy");

      const userInfo = await user.findById(decoded.id);

      if (userInfo) {
        return res.status(200).json({
          success: true,
          userInfo,
        });
      }
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "User not Verifyed",
      });
    }
  }
};

module.exports = { UsreAuthVerification };

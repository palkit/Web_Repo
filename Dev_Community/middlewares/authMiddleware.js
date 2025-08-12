const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const USER = require("../models/userModel");

dotenv.config();

const authMiddleWare = async (req, res, next) => {
  const { authorization } = req.headers || {}; // lowercase + fallback

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authorization token missing or invalid" });
  }

  try {
    const token = authorization.split(" ")[1]; // get the token part
    const tokenObject = jwt.verify(token, process.env.SECRET_KEY);

    // If you want to attach the user to req for next handlers:
    req.user = await USER.findById(tokenObject._id).select("-password");

    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = { authMiddleWare };
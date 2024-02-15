const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

async function generateToken(user) {
  if (typeof user !== "object" || user === null || Array.isArray(user)) {
    throw new Error("Invalid user object");
  }

  return jwt.sign({ ...user.toObject() }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
}
function verifyToken(token) {
  console.log(token);
  return jwt.verify(token, process.env.SECRET_KEY);
}

async function registerUser(username, password) {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser = new User({ username, password });
  await newUser.save();
  return newUser;
}

async function getUserByUsername(username) {
  return await User.findOne({ username });
}

module.exports = {
  generateToken,
  verifyToken,
  registerUser,
  getUserByUsername,
};

const authService = require("../services/authService");

async function register(req, res, next) {
  try {
    const { username, password } = req.body;
    await authService.registerUser(username, password);
    res.json({ message: "Registration successful" });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await authService.getUserByUsername(username);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await authService.generateToken(user);
    res.json({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
};

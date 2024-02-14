// middleware/authMiddleware.js
const authService = require("../services/authService");
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Missing token" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      console.error("Token verification error:", err);
      return res.status(403).json({ error: "Unauthorized - Invalid token" });
    }
    console.log("Token verified successfully:", user);
    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken,
};

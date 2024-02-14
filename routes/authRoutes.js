const express = require("express");
const authController = require("../controllers/authController");
const { errorHandler } = require("../middlewares/errorMiddleware");
const { loggingMiddleware } = require("../middlewares/loggingMiddleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.use(errorHandler);

module.exports = router;

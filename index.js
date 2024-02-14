require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const { loggingMiddleware } = require("./middlewares/loggingMiddleware");
const fileRoutes = require("./routes/fileRoutes");
const authRoutes = require("./routes/authRoutes");
//MongoDb Connection
connectDB();

//middlewares
app.use(express.json());
app.use(cors());
//app.use(loggingMiddleware);
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello Welcome to File Manager");
});
app.use("/api/files", fileRoutes);
app.use("/api/auth", authRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

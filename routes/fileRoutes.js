const express = require("express");
const multer = require("multer");
const fileController = require("../controllers/fileController");
const authMiddleware = require("../middlewares/authMiddleware");
const { errorHandler } = require("../middlewares/errorMiddleware");
const { loggingMiddleware } = require("../middlewares/loggingMiddleware");

const router = express.Router();
const upload = multer();

router.post(
  "/upload",
  upload.single("file"),
  authMiddleware.authenticateToken,
  fileController.uploadFile
);
router.delete(
  "/delete/:filePath",
  authMiddleware.authenticateToken,
  fileController.deleteFile
);
router.get(
  "/allfiles",
  authMiddleware.authenticateToken,
  fileController.getAllFiles
);

router.post(
  "/secure-upload",
  upload.single("file"),
  authMiddleware.authenticateToken,
  fileController.encryptAndUploadFile
);
router.get(
  "/secure-download/:filePath",
  authMiddleware.authenticateToken,
  fileController.decryptAndDownloadFile
);
router.get(
  "/search/:keyword",
  authMiddleware.authenticateToken,
  fileController.searchFiles
);
router.get("/categories", fileController.getPredefinedCategories);
router.post(
  "/categorize",
  authMiddleware.authenticateToken,
  fileController.categorizeFile
);
router.get(
  "/category/:category",
  authMiddleware.authenticateToken,
  fileController.findFilesByCategory
);

// Error handling middleware
router.use(errorHandler);

module.exports = router;

const fileService = require("../services/fileService");
const fileUtils = require("../utils/fileUtils");

async function uploadFile(req, res, next) {
  try {
    const file = req.file;
    const filePath = await fileService.uploadFile(file);
    res.json({ message: "File uploaded successfully", filePath });
  } catch (error) {
    next(error);
  }
}

async function deleteFile(req, res, next) {
  try {
    const filePath = req.params.filePath;
    await fileService.deleteFile(filePath);
    res.json({ message: "File deleted successfully" });
  } catch (error) {
    next(error);
  }
}

async function getAllFiles(req, res) {
  try {
    const files = await fileService.getAllFiles();
    res.status(200).json(files);
  } catch (error) {
    console.error("Error in getAllFiles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function encryptAndUploadFile(req, res, next) {
  try {
    const file = req.file;
    const filePath = await fileService.encryptAndUploadFile(file);
    res.json({ message: "Secure file uploaded successfully", filePath });
  } catch (error) {
    next(error);
  }
}

async function decryptAndDownloadFile(req, res, next) {
  try {
    const filePath = req.params.filePath;
    const fileData = await fileService.decryptAndDownloadFile(filePath);
    res.set("Content-Type", "application/octet-stream");
    res.send(fileData.buffer);
  } catch (error) {
    next(error);
  }
}

async function searchFiles(req, res, next) {
  try {
    const keyword = req.params.keyword;
    const searchResults = await fileService.searchFiles(keyword);
    res.json({ results: searchResults });
  } catch (error) {
    next(error);
  }
}

async function getPredefinedCategories(req, res) {
  try {
    const categories = await fileService.getPredefinedCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error in getPredefinedCategories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function categorizeFile(req, res) {
  console.log(req.body);
  const filePath = Object.values(req.body)[0];
  const category = Object.values(req.body)[1];
  //console.log(filePath);
  try {
    await fileService.categorizeFile(filePath, category);

    res.status(200).json({ message: "File categorized successfully" });
  } catch (error) {
    console.error("Error in categorizeFile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function findFilesByCategory(req, res) {
  const { category } = req.params;

  try {
    const files = await fileService.findFilesByCategory(category);

    res.status(200).json(files);
  } catch (error) {
    console.error("Error in findFilesByCategory:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  uploadFile,
  deleteFile,
  getAllFiles,
  encryptAndUploadFile,
  decryptAndDownloadFile,
  searchFiles,
  categorizeFile,
  getPredefinedCategories,
  findFilesByCategory,
};

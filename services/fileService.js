const fs = require("fs/promises");
const path = require("path");
const { encryptData, decryptData } = require("../utils/encryptionUtils");
const FileModel = require("../models/fileModel");

async function uploadFile(file) {
  const uploadDir = path.join(__dirname, "..", process.env.UPLOADS_DIRECTORY);
  const filePath = path.join(uploadDir, file.originalname);

  await fs.writeFile(filePath, file.buffer);

  const fileDocument = new FileModel({
    name: file.originalname,
    path: filePath,
  });
  await fileDocument.save();

  return filePath;
}

async function deleteFile(filePath) {
  const uploadDir = path.join(__dirname, "..", process.env.UPLOADS_DIRECTORY);
  const filePath1 = path.join(uploadDir, filePath);
  await fs.unlink(filePath1);
  await FileModel.findOneAndDelete({ path: filePath1 });
}
async function getAllFiles() {
  try {
    const uploadDir = path.join(__dirname, "..", process.env.UPLOADS_DIRECTORY);
    const files = await fs.readdir(uploadDir);
    return files;
  } catch (error) {
    throw error;
  }
}
async function encryptAndUploadFile(file) {
  try {
    if (!file || !file.buffer) {
      throw new Error("Invalid file format");
    }

    const encryptedData = encryptData(file.buffer.toString("utf-8"));
    const encryptedFile = {
      ...file,
      buffer: Buffer.from(encryptedData, "utf-8"),
    };

    return uploadFile(encryptedFile);
  } catch (error) {
    console.error("Error in encryptAndUploadFile:", error);
    throw error;
  }
}

async function decryptAndDownloadFile(filePath) {
  const uploadDir = path.join(__dirname, "..", process.env.UPLOADS_DIRECTORY);
  const filePath1 = path.join(uploadDir, filePath);

  const encryptedData = await fs.readFile(filePath1, "utf-8");
  const decryptedData = decryptData(encryptedData);

  return { buffer: Buffer.from(decryptedData, "utf-8") };
}

async function searchFiles(keyword) {
  const uploadDir = path.join(__dirname, "..", process.env.UPLOADS_DIRECTORY);

  try {
    const files = await fs.readdir(uploadDir);
    const matchingFiles = files.filter((file) => file.includes(keyword));
    return matchingFiles;
  } catch (error) {
    throw error;
  }
}

async function getPredefinedCategories() {
  return ["Documents", "Images", "Videos", "Others"];
}

async function categorizeFile(filePath, chosenCategory) {
  console.log(filePath);
  const uploadDir = path.join(__dirname, "..", process.env.UPLOADS_DIRECTORY);
  const sourcePath = path.join(uploadDir, filePath);

  try {
    const predefinedCategories = await getPredefinedCategories();

    if (!predefinedCategories.includes(chosenCategory)) {
      throw new Error("Invalid category");
    }

    const destinationPath = path.join(uploadDir, chosenCategory, filePath);

    await fs.mkdir(path.join(uploadDir, chosenCategory), { recursive: true });

    await fs.rename(sourcePath, destinationPath);
  } catch (error) {
    throw error;
  }
}

async function findFilesByCategory(category) {
  try {
    const uploadDir = path.join(__dirname, "..", process.env.UPLOADS_DIRECTORY);

    const files = await fs.readdir(path.join(uploadDir, category));

    return files;
  } catch (error) {
    throw error;
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

const crypto = require("crypto");

function encryptData(data) {
  const cipher = crypto.createCipher("aes-256-cbc", process.env.SECRET_KEY);
  let encrypted = cipher.update(data, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decryptData(encryptedData) {
  const decipher = crypto.createDecipher("aes-256-cbc", process.env.SECRET_KEY);
  let decrypted = decipher.update(encryptedData, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}

module.exports = {
  encryptData,
  decryptData,
};

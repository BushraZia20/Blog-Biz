const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFile = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    console.log("cloudinary upload successfull: ", result);
    return result;
  } catch (error) {
    console.error("cloudinary upload failed: ", error);
  }
};

module.exports = { uploadFile };

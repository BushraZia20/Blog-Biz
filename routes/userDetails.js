const express = require("express");
const multer = require("multer");
const UserProfile = require("../models/UserProfile");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

//SET UP PROFILE UPLOAD
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { userId, phone, location } = req.body;
    if (
      !req.body.phone ||
      !req.body.location ||
      !req.file ||
      !req.file.buffer
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUserDetails = new UserProfile({
      userId,
      img: {
        data: req.file?.buffer,
        contentType: req.file?.mimetype,
      },
      phone,
      location,
    });

    await newUserDetails.save();
    res.json({
      message: "User profile has been set up successfully",
      userdetails: {
        _id: newUserDetails._id,
        userId: newUserDetails.userId,
        img: {
          data: newUserDetails.img.data.toString("base64"),
          contentType: newUserDetails.img.contentType,
        },
        phone: newUserDetails.phone,
        location: newUserDetails.location,
      },
    });
  } catch (error) {
    console.error("Error uploading user details:", error);
    res.status(500).json({ message: "Error uploading details", error });
  }
});

//GET PROFILE DETAILS
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ message: "UserId is required" });
    }

    const profileDetails = await UserProfile.findOne({ userId }).populate(
      "userId",
      "username email"
    );
    if (!profileDetails) {
      return res.status(404).json({ message: "No user details found" });
    }

    res.status(200).json({
      message: "Fetched user details successfully",
      _id: profileDetails._id,
      userId: profileDetails.userId,
      img: profileDetails.img
        ? `data:${
            profileDetails.img.contentType
          };base64,${profileDetails.img.data.toString("base64")}`
        : null,
      phone: profileDetails.phone,
      location: profileDetails.location,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch user details",
      error: error.message,
    });
  }
});

module.exports = router;

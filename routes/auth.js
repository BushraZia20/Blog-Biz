const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

//// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({
      message: "User registered successfully.",
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to register! Try Again.",
    });
  }
});

////LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "404 User Not Found!" });
    const isPassword = await bcrypt.compare(password, existingUser.password);
    if (!isPassword)
      return res.status(401).json({ message: "Invalid Password! Try Again." });

    //generating jwt token for authentication
    const token = jwt.sign(
      { userId: existingUser._id, authorName: existingUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      token,
      message: "User Logged In Successfully.",
      userId: existingUser._id,
      authorName: existingUser.username,
      email: existingUser.email,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed To Login! Try Again.",
    });
  }
});

module.exports = router;

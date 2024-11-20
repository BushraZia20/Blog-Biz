const express = require("express");
const multer = require("multer");
const Post = require("../models/Image");
const UserProfile = require("../models/UserProfile");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

//CREATE
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { userId, username, title, content, category } = req.body;
    if (
      !req.body.title ||
      !req.body.content ||
      !req.body.category ||
      !req.file ||
      !req.file.buffer
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Post({
      category,
      title,
      content,
      img: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      userId,
      username,
    });

    await newPost.save();

    res.status(201).json({
      message: "Post uploaded successfully",
      post: {
        id: newPost._id,
        category: newPost.category,
        title: newPost.title,
        content: newPost.content,
        img: {
          data: newPost.img.data.toString("base64"),
          contentType: newPost.img.contentType,
        },
        userId: newPost.userId,
        username: newPost.username,
        createdAt: newPost.createdAt,
        updatedAt: newPost.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error uploading post:", error);
    res
      .status(500)
      .json({ message: "Error uploading post", error: error.message });
  }
});

//READ ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(
      posts.map((post) => ({
        id: post._id,
        category: post.category,
        title: post.title,
        content: post.content,
        img: `data:${post.img.contentType};base64,${post.img.data.toString(
          "base64"
        )}`,
        userId: post.userId,
        username: post.username,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      }))
    );
  } catch (error) {
    res.status(500).json({ message: "Error retrieving posts", error });
  }
});

//READ SPECIFIC USER POSTS
router.get("/myposts", async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }
    const userPosts = await Post.find({ userId });
    if (userPosts.length === 0) {
      return res.status(400).json({ message: "no user posts found" });
    }
    res.json(
      userPosts.map((post) => ({
        _id: post._id,
        category: post.category,
        title: post.title,
        content: post.content,
        img: `data:${post.img.contentType};base64,${post.img.data.toString(
          "base64"
        )}`,
        userId: post.userId,
        username: post.username,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      }))
    );
  } catch (error) {
    res.status(500).json({ message: "Failed to get User Posts", error });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
});

//EDIT
router.patch("/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { category, title, content } = req.body;
    console.log("req.body ", req.body);
    console.log("post._id ", id);

    const updateData = {};

    if (category) updateData.category = category;
    if (title) updateData.title = title;
    if (content) updateData.content = content;

    if (req.file && req.file.buffer) {
      console.log("updating image");
      updateData.img = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updatedPost = await Post.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    await updatedPost.save();

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({
      message: "Post updated successfully",
      post: {
        id: updatedPost._id,
        category: updatedPost.category,
        title: updatedPost.title,
        content: updatedPost.content,
        img: `data:${
          updatedPost.img.contentType
        };base64,${updatedPost.img.data.toString("base64")}`,
        userId: updatedPost.userId,
        username: updatedPost.username,
        createdAt: updatedPost.createdAt,
        updatedAt: updatedPost.updatedAt,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
});

//EACH POST DETAILS
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const eachPost = await Post.find({ _id: id });

    if (!eachPost || eachPost.length === 0) {
      return res.status(400).json({ message: "Post Not Found" });
    }

    res.status(200).json(
      eachPost.map((post) => ({
        id: post._id,
        category: post.category,
        title: post.title,
        content: post.content,
        img: `data:${post.img.contentType};base64,${post.img.data.toString(
          "base64"
        )}`,
        userId: post.userId,
        username: post.username,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      }))
    );
  } catch (error) {
    res.status(500).json({ message: `Failed to get details of this post` });
  }
});

router.post("/userdetails", upload.single("image"), async (req, res) => {
  try {
    const { userId, username, userEmail, phone, location } = req.body;
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
      username,
      userEmail,
      img: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      phone,
      location,
    });

    await newUserDetails.save();

    res.status(201).json({
      message: "User details uploaded successfully",
      userDetails: {
        id: newUserDetails._id,
        username: newUserDetails.username,
        userEmail: newUserDetails.userEmail,
        img: {
          data: newUserDetails.img.data.toString("base64"),
          contentType: newUserDetails.img.contentType,
        },
        phone: newUserDetails.phone,
        location: newUserDetails.location,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error uploading userdetails" });
  }
});

module.exports = router;

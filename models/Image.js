// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema(
//   {
//     category: String,
//     title: String,
//     content: String,
//     img: {
//       data: Buffer,
//       contentType: String,
//     },
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Image", postSchema);

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    category: String,
    title: String,
    content: String,
    img: {
      data: Buffer,
      contentType: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", postSchema);

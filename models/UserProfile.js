// const mongoose = require("mongoose");

// const UserProfileSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   img: {
//     data: Buffer,
//     contentType: String,
//   },
//   phone: {
//     type: Number,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("UserProfile", UserProfileSchema);

const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  phone: Number,
  location: String,
});

module.exports = mongoose.model("UserProfile", UserProfileSchema);

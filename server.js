// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();
// const path = require("path");
// const authRoutes = require("./routes/auth");
// const imageRoutes = require("./routes/imageRoutes");
// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("Connection failed", error));

// app.use("/api/auth", authRoutes);
// app.use("/api/images", imageRoutes);

// app.listen(PORT, () => {
//   console.log(`server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const authRoutes = require("./routes/auth");
const imageRoutes = require("./routes/imageRoutes");
const userDetails = require("./routes/userDetails");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Connection failed", error));

app.use("/api/auth", authRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/profile", userDetails);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

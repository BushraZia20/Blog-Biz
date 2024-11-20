const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token Not Found! Authorization Denied! " });
  }

  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verify;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;

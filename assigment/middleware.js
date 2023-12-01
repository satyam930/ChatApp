const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Invalid token format",
    });
  }

  const tokenValue = token.split(" ")[1];
  try {
    const decoded = jwt.verify(tokenValue, "vivek");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({
      message: "error in middleware",
    });
  }
};

module.exports = authenticateToken;

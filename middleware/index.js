const jwt = require("jsonwebtoken");
const secret = process.env.REACT_APP_SESSION_SECRET;

const withAuth = function (req, res, next) {
  try {
    const token =
      req.body.token ||
      req.query.token ||
      req.headers["x-access-token"] ||
      req.cookies.token;

    if (!token) {
      res.status(401).send("Unauthorized: No token provided");
    } else {
      jwt.verify(token, secret, function (err, decoded) {
        if (err) {
          res.status(401).send("Unauthorized: Invalid token");
        } else {
          req.email = decoded.email;
          req.id = decoded.id;
          req.name = decoded.name;
          next();
        }
      });
    }
  } catch (err) {
    console.log(err);
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token Expired. Please log in again.",
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal error. Unable to process request.",
    });
  }
};

module.exports = withAuth;

import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token." });
    }
    req.user = user;
    next();
  });
};


// The `authenticateToken` middleware function is used for authentication using JSON Web Tokens (JWT):

// - It extracts the token from the "Authorization" header.
// - If there's no token, it responds with a 401 (unauthorized) status and a "Token missing" message.
// - It verifies the token with the specified secret using `jwt.verify`.
// - If the verification fails (invalid token), it responds with a 403 (forbidden) status and an "Invalid token" message.
// - If the token is valid, it attaches the user information to the request object (`req.user`) and allows the request to proceed by calling `next()`.
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const login = async (req, res) => {
  const { username, password } = req.query;
  try {
    const dummyUser = {
      username: "admin",
      password: "123",
      role: "admin",
    };

    if (password != dummyUser.password) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const token = jwt.sign(
      { user: dummyUser._id, role: dummyUser.role },
      config.jwtSecret,
      { expiresIn: "12h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "An error occurred." });
  }
};

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

// The `login` function handles user authentication based on a username and password provided
// as query parameters. It uses a dummy user with predefined credentials for simplicity:

// - Checks if the provided password matches the dummy user's password. If not, it returns a
// 401 unauthorized response.

// - If the password is valid, it generates a JSON Web Token (JWT) using the `jsonwebtoken`
//  library, signing it with a secret from the configuration. This token includes the user's
//   ID and role and has an expiration of 12 hours.

// - Finally, it sends the JWT as a response if successful, or a 500 internal server error
// response in case of an error.

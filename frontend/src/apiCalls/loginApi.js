import {  baseUrl } from "../config";

export const loginApi = async () => {
  try {
    const response = await fetch(`flagright-transactions-backend2.onrender.com/auth/login?username=admin&password=123`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to Login");
    }
  } catch (error) {
    console.error("Error Logging in:", error);
    throw error;
  }
};

// This code defines an asynchronous function, `addTransaction`, which sends a POST request to a local
// server to create a transaction. It includes headers for authentication using a JWT token. If successful,
// it returns the response data; otherwise, it handles and logs errors.

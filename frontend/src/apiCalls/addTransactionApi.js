import { baseUrl } from "../config";

export const addTransaction = async (JWTtoken,newTransaction) => {
  console.log(newTransaction);
  try {
    const response = await fetch(`${baseUrl}/transactions/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: JWTtoken,
      },
      body: JSON.stringify(newTransaction),
    });
    console.log(response);
    if (response.ok) {
      // Transaction created successfully
      return response.json();
    } else {
      throw new Error("Failed to create transaction");
    }
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
};

// This code defines an asynchronous function, `addTransaction`, which sends a POST request to a local
// server to create a transaction. It includes headers for authentication using a JWT token. If successful,
// it returns the response data; otherwise, it handles and logs errors.

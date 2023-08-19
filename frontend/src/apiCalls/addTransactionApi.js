import { JWTtoken } from "../config";

export const addTransaction = async (newTransaction) => {
  console.log(newTransaction);
  try {
    const response = await fetch("http://localhost:3000/transactions/create", {
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

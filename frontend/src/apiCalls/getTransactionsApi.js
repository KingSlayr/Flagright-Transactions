import { baseUrl } from "../config";
import { buildURLWithFilters } from "../generateUrlFromFilters";

export const getTransactions = async (JWTtoken,filters, page = 1, sortOption) => {
  try {
    const url = buildURLWithFilters(
      `${baseUrl}/transactions/search`,
      filters,
      page
    );
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: JWTtoken,
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch transactions");
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

// This code defines an asynchronous function, `getTransactions`, which retrieves transactions by sending a
//  GET request to a server. It constructs the request URL based on provided filters, page number, and includes
//  JWT token-based authorization.
// Errors during the request are logged and thrown for handling.

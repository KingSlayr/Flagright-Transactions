import { JWTtoken } from "../config";
import { buildURLWithFilters } from "../generateUrlFromFilters";

export const getTransactions = async (filters, page = 1, sortOption) => {
  try {
    const url = buildURLWithFilters(
      "http://localhost:3000/transactions/search",
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

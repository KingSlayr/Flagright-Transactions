import { JWTtoken } from "../config";
import { buildURLWithFilters } from "../generateUrlFromFilters";

export const generateReport = async (reportCriteria) => {
  try {
    const url = buildURLWithFilters(
      "http://localhost:3000/transactions/report",
      reportCriteria
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
      throw new Error("Failed to generate report");
    }
  } catch (error) {
    console.error("Error generating report:", error);
    throw error;
  }
};

// This code defines an asynchronous function, `generateReport`, which generates a report by
//  sending a GET request to a server. It builds the request URL based on provided criteria, includes
//  JWT token-based authorization, and handles responses with appropriate error logging and handling.

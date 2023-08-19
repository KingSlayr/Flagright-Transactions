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

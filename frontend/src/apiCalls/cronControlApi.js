import { baseUrl } from "../config";

export const startCronJob = async (JWTtoken) => {
  try {
    const response = await fetch(
      `${baseUrl}/transactions/cron/start`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: JWTtoken,
        },
      }
    );

    if (response.ok) {
      // Cron job started successfully
      return response.json();
    } else {
      throw new Error("Failed to start cron job");
    }
  } catch (error) {
    console.error("Error starting cron job:", error);
    throw error;
  }
};

export const stopCronJob = async (JWTtoken) => {
  try {
    const response = await fetch(
      `${baseUrl}/transactions/cron/stop`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: JWTtoken,
        },
      }
    );

    if (response.ok) {
      // Cron job stopped successfully
      return response.json();
    } else {
      throw new Error("Failed to stop cron job");
    }
  } catch (error) {
    console.error("Error stopping cron job:", error);
    throw error;
  }
};

// This code exports two asynchronous functions, `startCronJob` and `stopCronJob`, both responsible for interacting
//  with a server to control a cron job. They send HTTP POST requests to specific endpoints on `localhost:3000`,
//   utilizing JSON data and JWT token-based authorization.

// The `startCronJob` function initiates a cron job, while `stopCronJob` halts it. They handle responses, returning data
// if successful or throwing an error if the operation fails. Any errors encountered during these processes are logged
// to the console, and the respective error is thrown for further handling. These functions provide control over cron job
//  management within the specified server environment, with appropriate error handling and authorization.

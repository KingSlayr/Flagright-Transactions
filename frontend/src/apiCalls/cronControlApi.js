import { JWTtoken } from "../config";

export const startCronJob = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/transactions/cron/start",
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

export const stopCronJob = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/transactions/cron/stop",
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

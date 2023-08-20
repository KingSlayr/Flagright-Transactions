import cron from "node-cron";
import { createTransactionService } from "../services/transactionService.js";
import { generateTransactionID } from "../utils/generateTransactionId.js";

let cronJob;

export const startCronJob = () => {
  let requestCount = 0;
  const maxRequests = 50;

  cronJob = cron.schedule("*/1 * * * * *", async () => {
    if (requestCount >= maxRequests) {
      console.log("Request limit reached. Stopping cron job.");
      cronJob.stop();
      return;
    }
    const newTransaction = {
      transactionID: generateTransactionID(),
      amount: Math.random() * 100,
      description: "Generated Transaction",
    };
    requestCount++;
    await createTransactionService(newTransaction);
  });

  console.log("cron start");
  cronJob.start();
};

export const stopCronJob = () => {
  if (cronJob) {
    console.log("cron stop");
    cronJob.stop();
  }
};

// This code defines a cron job using the "node-cron" library to periodically create new
//  transactions at fixed intervals.

// - `startCronJob`: Initiates the cron job to run every second (`"*/1 * * * * *"`).
//   - It generates a new transaction with a random amount and a description.
//   - Then, it calls the `createTransactionService` function to create the transaction.

// - `stopCronJob`: Stops the cron job if it's running.

// The cron job is set up to generate transactions at regular intervals, simulating automated
//  transaction creation.

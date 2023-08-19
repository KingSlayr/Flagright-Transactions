import cron from "node-cron";
import { createTransactionService } from "../services/transactionService.js";
import { generateTransactionID } from "../utils/generateTransactionId.js";

let cronJob;

export const startCronJob = () => {
  cronJob = cron.schedule("*/1 * * * * *", async () => {
    const newTransaction = {
      transactionID: generateTransactionID(),
      amount: Math.random() * 100,
      description: "Generated Transaction",
    };
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

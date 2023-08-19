import express from "express";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import {
  createTransaction,
  getTransaction,
  searchTransactions,
  generateTransactionReport,
} from "../controllers/transactionController.js";
import { startCronJob, stopCronJob } from "../controllers/cronController.js";

const transactionRoutes = express.Router();

transactionRoutes.post("/create", authenticateToken, createTransaction);
transactionRoutes.get(
  "/getTransactionById/:transactionID",
  authenticateToken,
  getTransaction
);
transactionRoutes.get("/search", authenticateToken, searchTransactions);
transactionRoutes.get("/report", authenticateToken, generateTransactionReport);
transactionRoutes.post("/cron/start", authenticateToken, (req, res) => {
  startCronJob();
  res.json({ message: "CRON job started" });
});

transactionRoutes.post("/cron/stop", authenticateToken, (req, res) => {
  stopCronJob();
  res.json({ message: "CRON job stopped" });
});

export default transactionRoutes;

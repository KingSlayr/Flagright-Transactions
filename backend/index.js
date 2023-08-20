import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config/config.js";
import Transaction from "./models/transaction.js";

import transactionRoutes from "./routes/transactionRoutes.js";
import authRoutes from "./routes/authRoutes.js";
const PORT = process.env.PORT || 3030;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/transactions", transactionRoutes);
app.use("/auth", authRoutes);
mongoose
  .connect(config.mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");
    await Transaction.createIndexes();
    app.listen(PORT, () => {
      console.log("Server is running on port ",PORT);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

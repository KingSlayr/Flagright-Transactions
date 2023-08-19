import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  transactionID: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
});

// indexes
transactionSchema.index({ transactionID: 1 }, { unique: true }); // Unique index on transactionID
transactionSchema.index({ dateTime: -1 }); // Index on dateTime in descending order

const Transaction = mongoose.model("transaction", transactionSchema);

export default Transaction;

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


// This Mongoose schema defines a "Transaction" model with fields for transaction ID, amount,
//  description, and date-time. It includes two indexes: one for ensuring uniqueness on the transaction 
//  ID and another for efficient querying based on date-time in descending order. This model is used to 
//  interact with a MongoDB database for managing transaction data.
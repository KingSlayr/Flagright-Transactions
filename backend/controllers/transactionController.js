import {
  createTransactionService,
  getTransactionByIDService,
  searchTransactionsService,
  generateTransactionReportService,
} from "../services/transactionService.js";

export const createTransaction = async (req, res) => {
  try {
    const transaction = await createTransactionService(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTransaction = async (req, res) => {
  try {
    const transaction = await getTransactionByIDService(
      req.params.transactionID
    );
    if (!transaction) {
      res.status(404).json({ error: "Transaction not found" });
    } else {
      res.json(transaction);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const searchTransactions = async (req, res) => {
  try {
    const searchCriteria = req.query;
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const sortBy = req.query.sortBy || "dateTime";
    const sortOrder = req.query.sortOrder || "desc";
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "asc" ? 1 : -1;
    const result = await searchTransactionsService(
      searchCriteria,
      page,
      pageSize,
      sortOptions
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const generateTransactionReport = async (req, res) => {
  try {
    const reportCriteria = req.query;
    const report = await generateTransactionReportService(reportCriteria);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// These API controller functions manage transactions: `createTransaction` creates a new transaction,
//  `getTransaction` retrieves a specific one, `searchTransactions` searches and sorts transactions with pagination,
//   and `generateTransactionReport` generates reports. They handle errors with appropriate status codes and messages
//    for client feedback.

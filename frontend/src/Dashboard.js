import React, { useEffect, useState } from "react";
import TransactionList from "./components/TransactionList";
import TransactionFilter from "./components/TransactionFilter";
import TransactionSort from "./components/TransactionSort";
import AddTransaction from "./components/AddTransaction";
import GenerateReport from "./components/GenerateReport";
import CronControl from "./components/CronControl";

import "./Dashboard.css";
import { addTransaction } from "./apiCalls/addTransactionApi.js";
import { getTransactions } from "./apiCalls/getTransactionsApi";
import { generateReport } from "./apiCalls/generateReportApi";
import { startCronJob, stopCronJob } from "./apiCalls/cronControlApi";
import TransactionReportResult from "./components/TransactionReportResult";
import JsonToCsvConverter from "./components/JsonToCsvConverter";

function Dashboard({ JWTtoken }) {
  const [tableLoading, settableLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [totalPage, settotalPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(0);
  const [transactionReport, settransactionReport] = useState({});
  const [showtransactionReport, setshowtransactionReport] = useState(false);
  const [reportDuration, setreportDuration] = useState();
  const [isCronRunning, setIsCronRunning] = useState(false);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
    sortBy: "dateTime",
    sortOrder: "desc",
    description: "",
  });

  // Handle filter changes
  const handleFilter = (filterData) => {
    setFilters(filterData);
  };

  // Handle sorting changes
  const handleSort = (sortOption, order) => {
    setFilters({ ...filters, sortBy: sortOption, sortOrder: order });
  };

  // Add a new transaction
  const handleAddTransaction = (newTransaction) => {
    addTransaction(JWTtoken, newTransaction);
  };

  // Generate a report
  const handleGenerateReport = (reportCriteria) => {
    setreportDuration(reportCriteria);
  };

  // Start the cron job
  const handleStartCron = () => {
    startCronJob(JWTtoken);
    setIsCronRunning(true);
  };

  // Stop the cron job
  const handleStopCron = () => {
    stopCronJob(JWTtoken);
    setIsCronRunning(false);
  };

  const handleReportClose = () => {
    setshowtransactionReport(false);
  };

  useEffect(() => {
    settableLoading(true);
    getTransactions(JWTtoken, filters)
      .then((res) => {
        setTransactions(res?.transactions);
        settotalPage(res?.totalPages);
        setcurrentPage(res?.currentPage);
        settableLoading(false);
      })
      .catch((err) => {
        settableLoading(false);
      });
  }, []);

  useEffect(() => {
    settableLoading(true);
    getTransactions(JWTtoken, filters, currentPage)
      .then((res) => {
        setTransactions(res?.transactions);
        settableLoading(false);
      })
      .catch((err) => {
        settableLoading(false);
      });
  }, [currentPage, filters]);

  useEffect(() => {
    settableLoading(true);
    getTransactions(JWTtoken, filters)
      .then((res) => {
        setTransactions(res?.transactions);
        settotalPage(res?.totalPages);
        setcurrentPage(res?.currentPage);
        settableLoading(false);
      })
      .catch((err) => {
        settableLoading(false);
      });
  }, [filters]);

  useEffect(() => {
    if (reportDuration) {
      settableLoading(true);
      generateReport(JWTtoken, reportDuration)
        .then((res) => {
          settransactionReport(res);
          setshowtransactionReport(true);
          settableLoading(false);
        })
        .catch((err) => {
          settableLoading(false);
        });
    }
  }, [reportDuration]);

  const handleNextPage = () => {
    let nextPage = currentPage + 1;
    if (nextPage > totalPage) nextPage = 1;
    setcurrentPage(nextPage);
  };
  window.addEventListener("unload", function () {
    if (!isCronRunning) return;
    stopCronJob(JWTtoken);
    setIsCronRunning(false);
  });

  return (
    <div className="dashboard">
      <h2>Transaction Dashboard</h2>
      <div>
        <div className="dashboard_left">
          <TransactionList
            tableLoading={tableLoading}
            transactions={transactions}
            totalPage={totalPage}
            currentPage={currentPage}
            onPage={handleNextPage}
          />
        </div>
        <div className="dashboard_right">
          <CronControl
            isCronRunning={isCronRunning}
            onStartCron={handleStartCron}
            onStopCron={handleStopCron}
          />
          <TransactionFilter onFilter={handleFilter} />
          <TransactionSort onSort={handleSort} />
          <AddTransaction onAdd={handleAddTransaction} />
          <GenerateReport onGenerate={handleGenerateReport} />
          <JsonToCsvConverter transactions={transactions} />
        </div>
      </div>
      {showtransactionReport && (
        <TransactionReportResult
          handleReportClose={handleReportClose}
          reportDuration={reportDuration}
          transactionReport={transactionReport}
        />
      )}
    </div>
  );
}

export default Dashboard;

// The `Dashboard` component is a React-based dashboard that provides various features for managing and
// analyzing transaction data. Here's an explanation of its key functionalities:

// 1. **State Management**:
//    - `transactions`: Stores an array of transaction data.
//    - `totalPage` and `currentPage`: Keep track of pagination details.
//    - `transactionReport`: Holds data related to transaction reports.
//    - `showtransactionReport`: Controls the visibility of the transaction report.
//    - `reportDuration`: Stores the date range for generating reports.
//    - `isCronRunning`: Tracks the status of a cron job.
//    - `filters`: Manages filters for transaction data.

// 2. **Filtering and Sorting**:
//    - `handleFilter`: Handles filter changes and updates the `filters` state.
//    - `handleSort`: Manages sorting options and updates the `filters` state.

// 3. **Transaction Management**:
//    - `handleAddTransaction`: Adds a new transaction and triggers a page reload.
//    - `handleGenerateReport`: Initiates the generation of a transaction report based on specified criteria.
//    - `handleStartCron` and `handleStopCron`: Start and stop a cron job, updating the `isCronRunning` state.

// 4. **Data Fetching**:
//    - Uses `useEffect` hooks to fetch transaction data based on filters and pagination.
//    - Fetches data when the component mounts and when filters or pagination change.

// 5. **UI Components**:
//    - Utilizes several reusable UI components such as `TransactionList`, `CronControl`, `TransactionFilter`, `TransactionSort`, `AddTransaction`, `GenerateReport`, `JsonToCsvConverter`, and `TransactionReportResult` to build the dashboard's interface.

// 6. **Event Handling**:
//    - `handleNextPage`: Handles pagination to move to the next page of transactions.
//    - `handleReportClose`: Closes the transaction report when the "X" button is clicked.

// 7. **Lifecycle Management**:
//    - Uses `window.addEventListener` to stop the cron job when the page unloads (e.g., when the user navigates away).

// Overall, this `Dashboard` component provides a comprehensive user interface for managing transactions, applying
//  filters and sorting, generating reports, controlling a cron job, and exporting data to CSV within a React
//   application. It leverages reusable components and manages state to offer a rich user experience for transaction
//    management and analysis.

import React from "react";
import "../styles/TransactionList.css";
import { convertISOToHumanReadable } from "../convertISOToHumanReadable";

const TransactionList = ({ transactions, onPage, currentPage, totalPage }) => {
  return (
    <div className="transactionList">
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{convertISOToHumanReadable(transaction.dateTime)}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => onPage()}>Next Page</button>
      <div className="transactionList-pagenum">
        Page
        <span>{currentPage}</span>
        of
        <span>{totalPage}</span>
      </div>
    </div>
  );
};

export default TransactionList;

// The `TransactionList` component in React displays a list of transactions in a table format.
//  It takes in `transactions` as a prop, which is an array of transaction data. It also receives
//  `onPage`, `currentPage`, and `totalPage` props for pagination.

// The component iterates over the `transactions` array and displays each transaction's date,
// amount, and description in table rows. It uses the `convertISOToHumanReadable` function to format
//  the date from ISO format to a human-readable format.

// Additionally, it provides a "Next Page" button to trigger the `onPage` function for pagination.
//  The current page number and the total number of pages are displayed below the table.

// Overall, this component is designed to visualize a list of transactions with pagination controls
//  within a React application.

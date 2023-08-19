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

import React, { useState } from "react";
import "../styles/TransactionFilter.css";

const TransactionFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

  const handleFilter = () => {
    onFilter({ startDate, endDate, minAmount, maxAmount });
  };

  return (
    <div className="transactionFilter">
      <h2>Transaction Filter</h2>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <label>Min Amount:</label>
        <input
          type="number"
          value={minAmount}
          onChange={(e) => setMinAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Max Amount:</label>
        <input
          type="number"
          value={maxAmount}
          onChange={(e) => setMaxAmount(e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default TransactionFilter;

// The `TransactionFilter` component in React provides a user interface for filtering transactions based
//  on various criteria. It allows the user to input a start date, an end date, a minimum amount, and
//  a maximum amount. When the "Apply Filters" button is clicked, it sends this filter criteria to a parent
//  component through the `onFilter` prop. The component offers a straightforward and intuitive interface
//  for specifying filter conditions for transactions within a React application.

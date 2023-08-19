import React, { useState } from "react";
import "../styles/TransactionSort.css";

const TransactionSort = ({ onSort }) => {
  const [sortOption, setSortOption] = useState("dateTime");
  const [sortingOrder, setsortingOrder] = useState("desc");

  const handleSort = () => {
    onSort(sortOption, sortingOrder);
  };

  return (
    <div className="transactionSort">
      <h2>Transaction Sorting</h2>
      <div>
        <label>Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="dateTime">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
      <div>
        <label>Sorting Order:</label>
        <select
          value={sortingOrder}
          onChange={(e) => setsortingOrder(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <button onClick={handleSort}>Apply Sorting</button>
    </div>
  );
};

export default TransactionSort;

import React, { useState } from "react";
import "../styles/GenerateReport.css";
const GenerateReport = ({ onGenerate }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleGenerate = () => {
    // Pass report criteria to the parent component for processing
    onGenerate({ startDate, endDate });
  };

  return (
    <div className="generateReport">
      <h2>Generate Report</h2>
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
      <button onClick={handleGenerate}>Generate Report</button>
    </div>
  );
};

export default GenerateReport;

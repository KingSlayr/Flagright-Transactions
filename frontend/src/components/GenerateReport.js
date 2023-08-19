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


// The `GenerateReport` component in React provides a user interface for generating a 
// report based on date criteria. It allows the user to input a start date and an end date, 
// and when the "Generate Report" button is clicked, it sends this data to a parent component
//  through the `onGenerate` prop. The component has a straightforward and intuitive interface
//   for specifying date ranges and initiating report generation within a React application.
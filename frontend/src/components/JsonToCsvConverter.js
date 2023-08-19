import React, { useState } from "react";
import "../styles/JsonToCsvConverter.css";
import { downloadCSV } from "../downloadCsv";

function JsonToCsvConverter({ transactions }) {
  const handleExportToCsv = () => {
    if (transactions.length > 0) {
      downloadCSV(transactions);
    }
  };

  return (
    <div className="jsonToCsvConverter">
      <h2>JSON to CSV Converter</h2>
      <button onClick={handleExportToCsv}>Export to CSV</button>
    </div>
  );
}

export default JsonToCsvConverter;


// The `JsonToCsvConverter` component in React provides a user interface for exporting data 
// from JSON format to CSV format. It has a single button labeled "Export to CSV." When this 
// button is clicked, it triggers the `handleExportToCsv` function. This function checks
//  if there are transactions in the provided `transactions` array, and if so, it initiates the CSV 
//  download using the `downloadCSV` function. This component is a simple way to convert and export 
//  JSON data to a CSV file within a React application.
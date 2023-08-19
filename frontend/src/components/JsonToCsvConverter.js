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

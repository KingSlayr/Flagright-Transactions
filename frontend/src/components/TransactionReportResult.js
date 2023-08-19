import React from "react";
import "../styles/TransactionReportResult.css";

function TransactionReportResult({
  reportDuration,
  transactionReport,
  handleReportClose,
}) {
  return (
    <div className="transactionReportResult">
      <div>
        <span onClick={handleReportClose}>X</span>
        <h2>Transaction Report Result</h2>
        <h4>From - {reportDuration?.startDate}</h4>
        <h4>To - {reportDuration?.endDate}</h4>
        <div>Number of Transactions - {transactionReport?.count}</div>
        <div>
          Total amount of Transactions - {transactionReport?.totalAmount}
        </div>
      </div>
    </div>
  );
}

export default TransactionReportResult;

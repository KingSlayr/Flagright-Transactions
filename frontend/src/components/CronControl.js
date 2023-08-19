import React from "react";
import "../styles/CronControl.css";
const CronControl = ({ isCronRunning, onStartCron, onStopCron }) => {
  return (
    <div className="cronControl">
      <h2>Cron Control</h2>
      <div>
        <button onClick={onStartCron} disabled={isCronRunning}>
          Start Cron Job
        </button>
        <button onClick={onStopCron} disabled={!isCronRunning}>
          Stop Cron Job
        </button>
      </div>
      <p>{isCronRunning ? "Cron Job is running" : "Cron Job is stopped"}</p>
    </div>
  );
};

export default CronControl;

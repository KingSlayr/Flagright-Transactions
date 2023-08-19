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

// The `CronControl` component in React provides a user interface for controlling a cron job.
// It displays two buttons: "Start Cron Job" and "Stop Cron Job," along with a status message
// indicating whether the cron job is currently running or stopped. The `onStartCron` and `onStopCron`
// functions are invoked when the respective buttons are clicked, and they can be used to trigger actions
//  related to starting or stopping the cron job. The component has a simple and straightforward
//  interface for managing cron job control within a React application.

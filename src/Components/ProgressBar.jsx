import React from "react";

function ProgressBar() {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: "75%" }}
      />
    </div>
  );
}

export default ProgressBar;

import React from "react";

const ErrorDisplay = ({ err }) => {
  return (
    <article>
      <h4 className="error">{err ? err : "Path not found :("}</h4>
    </article>
  );
};

export default ErrorDisplay;

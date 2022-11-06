import React from "react";

export const ProgressBar = (props: { progress: any; }) => {
  const { progress } = props;

  const dimensions = {
    height: 20,
    width: `${progress}%`,
  };

  return (
    <div className="progress-container">
      <div className="progress-fill" style={dimensions}>
      </div>
    </div>
  );
};

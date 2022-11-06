import React from "react";

export const ProgressBar = (props: { progress: any; }) => {
  const { progress } = props;

  const containerStyles = {
    width: '100%',
    backgroundColor: "#3A3E41",
    height: 20
  };

  const fillerStyles = {
    height: 20,
    width: `${progress}%`,
    backgroundColor: "#F6F7EB",
    transition: 'width 1s ease-in-out'
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

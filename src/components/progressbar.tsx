import React from "react";

export const ProgressBar = (props: { completed: any; }) => {
  const { completed } = props;

  const containerStyles = {
    width: '100%',
    backgroundColor: "#3A3E41",
    height: 20
  };

  const fillerStyles = {
    height: 20,
    width: `${completed}%`,
    backgroundColor: "#F6F7EB",
    transition: 'width 1s ease-in-out'
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span></span>
      </div>
    </div>
  );
};

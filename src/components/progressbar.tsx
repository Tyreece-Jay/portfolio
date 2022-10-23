import React from "react";

export const ProgressBar = (props: { completed: any; }) => {
  const { completed } = props;

  const containerStyles = {
    width: '100%',
    backgroundColor: "#283528"
  };

  const fillerStyles = {
    height: 8,
    width: `${completed}%`,
    backgroundColor: "#F0F0F0",
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

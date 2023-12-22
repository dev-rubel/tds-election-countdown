import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={"each-digit cell large-2 medium-3 small-12 text-center "}>
      <h2 className="count-digit">{value}</h2>
      <p className="text">{type}</p>
    </div>
  );
};

export default DateTimeDisplay;

import React from 'react';
import Month from './Month';

const Months = ({ months, rate }) => {
  var ytd = 0;

  return (
    <div className="months">
      <h1>Months</h1>
      {months.map((month) => (
        <Month key={month.id} month={month} rate={rate} ytd={ytd} />
      ))}
    </div>
  );
};

export default Months;

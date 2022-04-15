import React from 'react';
import { useState } from 'react';
import Months from './components/Months';
import './style.css';

export default function App() {
  const rate = 40;
  const [months, setMonths] = useState([
    {
      id: 4,
      name: 'April',
      tuesday: {
        subs: 209,
        weekly: 5,
        weeks: 4,
        vacation: 0,
      },
      thursday: {
        subs: 230,
        weekly: 10,
        weeks: 4,
        vacation: 0,
      },
    },
    {
      id: 5,
      name: 'May',
      tuesday: {
        subs: 10,
        weekly: 0,
        weeks: 5,
        vacation: 0,
      },
      thursday: {
        subs: 10,
        weekly: 0,
        weeks: 4,
        vacation: 0,
      },
    },
  ]);

  return (
    <div className="container">
      <Months months={months} rate={rate} />
    </div>
  );
}

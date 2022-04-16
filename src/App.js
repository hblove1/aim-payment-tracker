import React from 'react';
import { useState } from 'react';
// import Players from '/components/Players';
import Months from './components/Months';
import './style.css';

export default function App() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      firstName: 'Tony',
      lastName: 'Love',
      subscriber: true,
      email: 'anthony.r.love@boeing.com',
      balance: 0,
    },
    {
      id: 2,
      firstName: 'Al',
      lastName: 'Dawson',
      subscriber: true,
      email: 'big.al@boeing.com',
      balance: 21,
    },
    {
      id: 3,
      firstName: 'Reggie',
      lastName: 'Coquia',
      subscriber: false,
      email: 'reggie.coquia@boeing.com',
      balance: 0,
    },
  ]);
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

  class Screen {
    static Players = new Screen('Players');
    static Months = new Screen('Months');

    // private constructor() {}
    constructor(name) {
      this.name = name;
    }
  }

  var screen = Screen.Players;

  const onUpdate = (updatedMonth) => {
    console.log('current months:', months);
    console.log('new month:', updatedMonth);
    setMonths(
      months.map((month) =>
        month.id !== updatedMonth.id ? month : updatedMonth
      )
    );
    console.log('new months:', months);
  };

  return (
    <div className="container">
      {/* {screen === Screen.Players && <Players players={players} />} */}
      {screen === Screen.Months && (
        <Months months={months} rate={rate} onUpdate={onUpdate} />
      )}
    </div>
  );
}

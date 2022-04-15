import React from 'react';
import { useState } from 'react';

const Month = ({ month, rate, ytd }) => {
  const [tuesdayVacation, setTuesdayVacation] = useState(
    month.tuesday.vacation
  );
  const [thursdayVacation, setThursdayVacation] = useState(
    month.thursday.vacation
  );
  const collected =
    month.tuesday.subs +
    month.tuesday.weekly +
    month.thursday.subs +
    month.thursday.weekly;
  const owed =
    (month.tuesday.weeks +
      month.thursday.weeks -
      tuesdayVacation -
      thursdayVacation) *
    rate;
  const net = collected - owed;

  ytd = ytd + net;

  return (
    <div className="month">
      <div className="subcomponent header">
        <h3>{month.name}</h3>
        <div className="subcomponent bottomline">
          <div className="bottomline-section">
            <label>Collected: </label>
            <label>${collected}</label>
          </div>
          <div className="bottomline-section">
            <label>Owed: </label>
            <label>${owed}</label>
          </div>
          <div className="bottomline-section">
            <label>Net: </label>
            <label>${net}</label>
          </div>
          <div className="bottomline-section">
            <label>YTD: </label>
            <label>${ytd}</label>
          </div>
        </div>
      </div>
      <div className="subcomponent collected">
        <label>Tuesday Subs</label>
        <label>Tuesday Weekly</label>
        <label>Thursday Subs</label>
        <label>Thursday Weekly</label>
        <label>Total</label>
        <label>${month.tuesday.subs}</label>
        <label>${month.tuesday.weekly}</label>
        <label>${month.thursday.subs}</label>
        <label>${month.thursday.weekly}</label>
        <label>${collected}</label>
      </div>
      <div className="subcomponent owed">
        <label>Tuesday Weeks</label>
        <label>Tuesday Vacation</label>
        <label>Thursday Weeks</label>
        <label>Thursday Vacation</label>
        <label>Total</label>
        <label>{month.tuesday.weeks}</label>
        <input
          type="text"
          value={tuesdayVacation}
          onChange={(e) => setTuesdayVacation(e.target.value)}
        />
        <label>{month.thursday.weeks}</label>
        <input
          type="text"
          value={thursdayVacation}
          onChange={(e) => setThursdayVacation(e.target.value)}
        />
        <label>${owed}</label>
      </div>
    </div>
  );
};

export default Month;

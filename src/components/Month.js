import React from 'react';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Month = ({ month, days, rate, onUpdate, ytd }) => {
  const [tuesdayVacation, setTuesdayVacation] = useState(
    month.tuesday.vacation
  );
  const [thursdayVacation, setThursdayVacation] = useState(
    month.thursday.vacation
  );
  const [expanded, setExpanded] = useState(true);
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

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="month">
      <header>
        <div className="subcomponent header" onClick={toggleExpanded}>
          <h2>{month.name}</h2>
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
        {expanded ? (
          <IoIosArrowUp className="arrow" size="24" />
        ) : (
          <IoIosArrowDown className="arrow" size="24" />
        )}
      </header>
      {expanded && (
        <body>
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
              onChange={(e) => {
                setTuesdayVacation(e.target.value);
                var newMonth = {
                  ...month,
                  tuesday: { ...month.tuesday, vacation: tuesdayVacation },
                };
                onUpdate(newMonth);
              }}
            />
            <label>{month.thursday.weeks}</label>
            <input
              type="text"
              value={thursdayVacation}
              onChange={(e) => {
                setThursdayVacation(e.target.value);
                var newMonth = {
                  ...month,
                  thursday: { ...month.thursday, vacation: thursdayVacation },
                };
                onUpdate(newMonth);
              }}
            />
            <label>${owed}</label>
          </div>
        </body>
      )}
    </div>
  );
};

export default Month;

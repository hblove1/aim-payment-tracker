import React from 'react';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

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
              <div>Collected: </div>
              <div>${collected}</div>
            </div>
            <div className="bottomline-section">
              <div>Owed: </div>
              <div>${owed}</div>
            </div>
            <div className="bottomline-section">
              <div>Net: </div>
              <div>${net}</div>
            </div>
            <div className="bottomline-section">
              <div>YTD: </div>
              <div>${ytd}</div>
            </div>
          </div>
        </div>
        {expanded ? (
          <FaArrowUp className="arrow" />
        ) : (
          <FaArrowDown className="arrow" />
        )}
      </header>
      {expanded && (
        <body>
          <div className="subcomponent collected">
            <div>Tuesday Subs</div>
            <div>Tuesday Weekly</div>
            <div>Thursday Subs</div>
            <div>Thursday Weekly</div>
            <div>Total</div>
            <div>${month.tuesday.subs}</div>
            <div>${month.tuesday.weekly}</div>
            <div>${month.thursday.subs}</div>
            <div>${month.thursday.weekly}</div>
            <div>${collected}</div>
          </div>
          <div className="subcomponent owed">
            <div>Tuesday Weeks</div>
            <div>Tuesday Vacation</div>
            <div>Thursday Weeks</div>
            <div>Thursday Vacation</div>
            <div>Total</div>
            <div>{month.tuesday.weeks}</div>
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
            <div>{month.thursday.weeks}</div>
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
            <div>${owed}</div>
          </div>
        </body>
      )}
    </div>
  );
};

export default Month;

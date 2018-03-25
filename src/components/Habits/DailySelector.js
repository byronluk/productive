// @flow
import React from 'react';

const DailySelector = fields => {
  return (
    <React.Fragment>
      <div
        id="daily-buttons-container"
        className="row justify-content-around btn-group-toggle mb-3"
        data-toggle="buttons"
      >
        <label className="btn btn-outline-secondary active border-0">
          <input {...fields.day.Su.input} defaultChecked type="checkbox" autoComplete="off" />
          <span className="h4 mx-1">S</span>
        </label>
        <label className="btn btn-outline-secondary active border-0">
          <input {...fields.day.M.input} defaultChecked type="checkbox" autoComplete="off" />
          <span className="h4 mx-0">M</span>
        </label>
        <label className="btn btn-outline-secondary active border-0">
          <input {...fields.day.T.input} defaultChecked type="checkbox" autoComplete="off" />
          <span className="h4 mx-1">T</span>
        </label>
        <label className="btn btn-outline-secondary active border-0">
          <input {...fields.day.W.input} defaultChecked type="checkbox" autoComplete="off" />
          <span className="h4 mx-0">W</span>
        </label>
        <label className="btn btn-outline-secondary active border-0">
          <input {...fields.day.Th.input} defaultChecked type="checkbox" autoComplete="off" />
          <span className="h4 mx-1">T</span>
        </label>
        <label className="btn btn-outline-secondary active border-0">
          <input {...fields.day.F.input} defaultChecked type="checkbox" autoComplete="off" />
          <span className="h4 mx-1">F</span>
        </label>
        <label className="btn btn-outline-secondary active border-0">
          <input {...fields.day.S.input} defaultChecked type="checkbox" autoComplete="off" />
          <span className="h4 mx-1">S</span>
        </label>
      </div>
      <div className="row">
        <button className="btn btn-sm btn-outline-info btn-block col mx-1" type="button">
          Weekdays
        </button>
        <button className="btn btn-sm btn-outline-info btn-block col mx-1 my-0" type="button">
          Weekends
        </button>
      </div>
    </React.Fragment>
  );
};

// add onclick active for weekdays and weekends and enable functionaly to trigger weekdays only or weekends only

// const onWeekdayClick = (): void => {
//   var weekdayButtons = document.query
//   });
// };

export default DailySelector;

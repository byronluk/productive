// @flow
import React from 'react';

class DailySelector extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div
          id="daily-buttons-container"
          className="row justify-content-around btn-group-toggle mb-3"
          data-toggle="buttons"
        >
          <label className="btn btn-outline-secondary active border-0">
            <input defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">S</span>
          </label>
          <label className="btn btn-outline-secondary active border-0">
            <input defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-0">M</span>
          </label>
          <label className="btn btn-outline-secondary active border-0">
            <input defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">T</span>
          </label>
          <label className="btn btn-outline-secondary active border-0">
            <input defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-0">W</span>
          </label>
          <label className="btn btn-outline-secondary active border-0">
            <input defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">T</span>
          </label>
          <label className="btn btn-outline-secondary active border-0">
            <input defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">F</span>
          </label>
          <label className="btn btn-outline-secondary active border-0">
            <input defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">S</span>
          </label>
        </div>
        <div className="row">
          <button
            className="btn btn-sm btn-outline-primary btn-block col-4 border-0"
            type="button"
            onClick={onWeekdayClick}
          >
            Weekdays
          </button>
          <button
            className="btn btn-sm btn-outline-primary btn-block col-4 border-0 my-0"
            type="button"
          >
            Weekends
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const onWeekdayClick = (): void => {
  $('#daily-buttons-container label').button('toggle');
};

export default DailySelector;

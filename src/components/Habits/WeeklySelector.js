// @flow
import * as React from 'react';

const WeeklySelector = fields => {
  return (
    <React.Fragment>
      <div
        id="weekly-buttons-container"
        className="row justify-content-around btn-group-toggle mb-3"
        data-toggle="buttons"
      >
        <label className="btn btn-outline-secondary border-0">
          <input value="1" type="radio" autoComplete="off" />
          <span className="h4 mx-1">1</span>
        </label>
        <label className="btn btn-outline-secondary border-0">
          <input value="2" type="radio" autoComplete="off" />
          <span className="h4 mx-0">2</span>
        </label>
        <label className="btn btn-outline-secondary border-0">
          <input value="3" type="radio" autoComplete="off" />
          <span className="h4 mx-1">3</span>
        </label>
        <label className="btn btn-outline-secondary border-0">
          <input value="4" type="radio" autoComplete="off" />
          <span className="h4 mx-0">4</span>
        </label>
        <label className="btn btn-outline-secondary border-0">
          <input value="5" type="radio" autoComplete="off" />
          <span className="h4 mx-1">5</span>
        </label>
        <label className="btn btn-outline-secondary border-0">
          <input value="6" type="radio" autoComplete="off" />
          <span className="h4 mx-1">6</span>
        </label>
      </div>
      <div className="container px-5 btn-group-toggle">
        <label className="btn btn-sm btn-outline-info btn-block col mx-1 my-0">
          <input type="checkbox" autoComplete="off" />
          Bi-weekly
        </label>
      </div>
    </React.Fragment>
  );
};

export default WeeklySelector;
